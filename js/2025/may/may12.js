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

function initializeWeights(data) {
  const weights = {};
  for (const key in data[0]) {
    if (key !== 'target') {
      weights[key] = Math.random() * 2 - 1; // Random between -1 and 1
    }
  }
  weights.bias = Math.random() * 2 - 1;
  return weights;
}

function train(data = []) {
  const epochs = 1000;
  const learningRate = 0.1;
  const regularization = 0.01;

  const weights = initializeWeights(data);
  console.log('Initial Weights: ', weights);
  console.log('Original Line Equation: ', getLineEquation(weights));
  console.log('-------------------------------');

  for (let i = 0; i < epochs; i++) {
    for (const row of data) {
      const prediction = getPredictedValue(weights, row);
      const error = row.target - prediction;

      // Update weights
      for (const key in weights) {
        if (key === 'bias') {
          weights.bias += learningRate * error;
        } else {
          weights[key] += learningRate * (error * row[key] - regularization * weights[key]);
        }
      }
    }
  }
  console.log('Updated weights: ', weights);
  console.log('Updated Line Equation: ', getLineEquation(weights));
  console.log('-------------------------------');
  return weights;
}


function getPredictedValue(weights = {}, row = {}) {
  let sum = weights.bias; // Add bias term
  for (const key in weights) {
    if (key !== 'bias' && row.hasOwnProperty(key)) {
      sum += weights[key] * row[key];
    }
  }
  return 1 / (1 + Math.exp(-sum)); // Sigmoid activation
}

function test(data = [], averages = {}) {
  let truePos = 0;
  let trueNeg = 0;
  let falsePos = 0;
  let falseNeg = 0;

  for (const row of data) {
    const predictedValue = getPredictedValue(averages, row);

    if (predictedValue > 0.5) {
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
  const confusionMatrix = { noHeartDisease: { noHeartDisease: [trueNeg, '️✅'], heartDisease: [falsePos, '❌'] }, heartDisease: { noHeartDisease: [falseNeg, '❌'], heartDisease: [truePos, '️✅'] } };

  return {
    accuracy,
    precision,
    recall,
    f1Score,
    confusionMatrix,
  }
}

function normalizeData(data) {
  const features = {};
  // First pass - get min/max
  for (const row of data) {
    for (const key in row) {
      if (!features[key]) {
        features[key] = { min: row[key], max: row[key] };
      } else {
        features[key].min = Math.min(features[key].min, row[key]);
        features[key].max = Math.max(features[key].max, row[key]);
      }
    }
  }

  // Second pass - normalize
  return data.map(row => {
    const normalized = {};
    for (const key in row) {
      if (key === 'target') {
        normalized[key] = row[key];
      } else {
        const range = features[key].max - features[key].min;
        normalized[key] = range === 0 ? 0 : (row[key] - features[key].min) / range;
      }
    }
    return normalized;
  });
}

function process(data = []) {
  const normalizedData = normalizeData(data);
  const testSize = 0.2;
  const trainingData = normalizedData.slice(0, Math.floor(normalizedData.length * (1 - testSize)));
  const testData = normalizedData.slice(Math.floor(normalizedData.length * (1 - testSize)));

  const averages = train(trainingData);

  const testResults = test(testData, averages);
  console.log('----- Test Results ----- ');
  console.table(testResults.confusionMatrix)
  delete testResults.confusionMatrix
  console.log(testResults);
  console.log('----------------');
}
