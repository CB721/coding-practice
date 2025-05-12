// read csv file
const fs = require('fs');
const csv = require('csv-parser');
const results = [];

fs.createReadStream('heart.csv')
  .pipe(csv())
  .on('data', (data) => {
    // convert all values to numbers
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = parseFloat(data[key]);
      }
    }
    // push the data to results
    results.push(data);
  })
  .on('end', () => {
    process(results);
  });

function getAllWithHeartDisease(data = []) {
  return data.filter((item) => item.target === 1);
}

function getAvgAgeWithHeartDisease(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.age, 0);
  return sum / heartDisease.length;
}

function getAvgSexWithHeartDisease(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.sex, 0);
  return sum / heartDisease.length;
}

function getAvgChestPainType(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.cp, 0);
  return sum / heartDisease.length;
}

function getAvgRestingBloodPressure(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.trestbps, 0);
  return sum / heartDisease.length;
}

function getAvgCholesterol(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.chol, 0);
  return sum / heartDisease.length;
}

function getAvgFastingBloodSugar(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.fbs, 0);
  return sum / heartDisease.length;
}

function getAvgRestingECG(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.restecg, 0);
  return sum / heartDisease.length;
}

function getAvgMaxHeartRate(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.thalach, 0);
  return sum / heartDisease.length;
}

function getAvgExerciseAngina(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.exang, 0);
  return sum / heartDisease.length;
}

function getAvgOldpeak(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.oldpeak, 0);
  return sum / heartDisease.length;
}

function getAvgSlope(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.slope, 0);
  return sum / heartDisease.length;
}

function getAvgCa(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.ca, 0);
  return sum / heartDisease.length;
}

function getAvgThal(data = []) {
  const heartDisease = getAllWithHeartDisease(data);
  const sum = heartDisease.reduce((acc, item) => acc + item.thal, 0);
  return sum / heartDisease.length;
}

function getAverages(data = []) {
  return {
    age: getAvgAgeWithHeartDisease(data),
    sex: getAvgSexWithHeartDisease(data),
    cp: getAvgChestPainType(data),
    trestbps: getAvgRestingBloodPressure(data),
    chol: getAvgCholesterol(data),
    fbs: getAvgFastingBloodSugar(data),
    restecg: getAvgRestingECG(data),
    thalach: getAvgMaxHeartRate(data),
    exang: getAvgExerciseAngina(data),
    oldpeak: getAvgOldpeak(data),
    slope: getAvgSlope(data),
    ca: getAvgCa(data),
    thal: getAvgThal(data),
  }
}

function getLineEquation(averages = {}) {
  let equationStr = '';
  const variableLtrs = [];
  for (const key in averages) {
    // look at last letter in variableLtrs
    // iterate to the next letter
    // if it is z, then go to aa, and if zz then go to aaa and so on.
    const lastLetter = variableLtrs[variableLtrs.length - 1];
    let nextLetter = '';
    if (lastLetter) {
      nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
    } else {
      nextLetter = 'a';
    }
    variableLtrs.push(nextLetter);
    equationStr += `${averages[key]}${nextLetter.toUpperCase()} + `;
  }
  // remove the last +
  equationStr = equationStr.slice(0, -3);
  return equationStr;
}

function train(data = []) {
  const epochs = 1000;
  const learningRate = 0.01;

  const averages = getAverages(data);
  console.log('Original Averages: ', averages);
  console.log('Original Line Equation: ', getLineEquation(averages));
  console.log('-------------------------------');

  for (let i = 0; i < epochs; i++) {
    for (const row of data) {
      // update the averages
      for (const col in row) {
        if (row.hasOwnProperty(col) && averages.hasOwnProperty(col)) {
          const diff = averages[col] - row[col];
          if (diff > 0) {
            if (row.target === 1) {
              averages[col] -= learningRate * diff;
            }
          }
          if (diff < 0) {
            if (row.target === 0) {
              averages[col] -= learningRate * diff;
            }
          }
        }
      }
    }
  }
  console.log('Updated Averages: ', averages);
  console.log('Updated Line Equation: ', getLineEquation(averages));
  console.log('-------------------------------');
  return averages;
}

function getPredictedValue(averages = {}, row = {}) {
  let sum = 0;
  for (const key in averages) {
    if (averages.hasOwnProperty(key) && row.hasOwnProperty(key)) {
      sum +=  row[key] - averages[key];
    }
  }
  return sum;
}

function test(data = [], averages = {}) {
  let truePos = 0;
  let trueNeg = 0;
  let falsePos = 0;
  let falseNeg = 0;

  for (const row of data) {
    const predictedValue = getPredictedValue(averages, row);
    
    if (predictedValue > 0) {
      if (row.target === 1) {
        truePos++;
      } else {
        falsePos++;
      }
    } else {
      if (row.target === 1) {
        falseNeg++;
      } else {
        trueNeg++;
      }
    }
  }

  const accuracy = (truePos + trueNeg) / (truePos + trueNeg + falsePos + falseNeg);
  const precision = truePos / (truePos + falsePos);
  const recall = truePos / (truePos + falseNeg);
  const f1Score = 2 * (precision * recall) / (precision + recall);
  const confusionMatrix = [[truePos, falseNeg], [falsePos, trueNeg]];

  return {
    accuracy,
    precision,
    recall,
    f1Score,
    confusionMatrix,
  }
}

function process(data = []) {
  const testSize = 0.2;
  const trainingData = data.slice(0, Math.floor(data.length * (1 - testSize)));
  const testData = data.slice(Math.floor(data.length * (1 - testSize)));

  const averages = train(trainingData);

  const testResults = test(testData, averages);
  console.log('----------------');
  console.log('Test Results: ', testResults);
}
