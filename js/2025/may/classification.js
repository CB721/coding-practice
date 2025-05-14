// read csv file
const fs = require('fs');
const csv = require('csv-parser');
const results = [];

const dataset =
{
  heartDisease: {
    filename: 'heart.csv',
    y: 'target',
    threshold: 0.5,
  },
}

const currDataset = dataset.heartDisease;

fs.createReadStream(currDataset.filename)
  .pipe(csv())
  .on('data', (data) => {
    // convert all values to numbers
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = parseFloat(data[key].trim());
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

  for (const key in averages) {
    equationStr += `${averages[key]} * ${key} + `;
  }
  // remove the last +
  equationStr = equationStr.slice(0, -3);
  return equationStr;
}

function initializeWeights(data) {
  const weights = {};
  for (const key in data[0]) {
    if (key !== currDataset.y) {
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
      const error = row[currDataset.y] - prediction;

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


function getPredictedValue(model = {}, row = {}) {
  let sum = model.bias; // Add bias term
  for (const key in model) {
    if (row.hasOwnProperty(key)) {
      sum += model[key] * row[key];
    }
  }
  return 1 / (1 + Math.exp(-sum)); // Sigmoid activation
}

function test(data = [], model = {}) {
  let truePos = 0;
  let trueNeg = 0;
  let falsePos = 0;
  let falseNeg = 0;

  for (const row of data) {
    const predictedValue = getPredictedValue(model, row);

    if (predictedValue > currDataset.threshold) {
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
  // truePos = 16
  // trueNeg = 144
  // falsePos = 10
  // falseNeg = 30
  const accuracy = (truePos + trueNeg) / (truePos + trueNeg + falsePos + falseNeg); //  // 0.8
  const precision = truePos / (truePos + falsePos); // 0.615
  const recall = truePos / (truePos + falseNeg); // 0.348
  const specificity = trueNeg / (trueNeg + falsePos); // 0.935
  const f1Score = 2 * (precision * recall) / (precision + recall); // 0.444
  const confusionMatrix = [[`${trueNeg} ✅`, `${falsePos} ❌`], [`${falseNeg} ❌`, `${truePos} ✅`]];

  return {
    accuracy,
    precision,
    recall,
    specificity,
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
      if (key === currDataset.y) {
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
  
  const testData = [];
  while (normalizedData.length > 0 && testData.length < Math.floor(normalizedData.length * testSize)) {
    const randomIndex = Math.floor(Math.random() * normalizedData.length);
    testData.push(normalizedData.splice(randomIndex, 1)[0]);
  }
  const trainingData = normalizedData;

  const model = train(trainingData);

  const testResults = test(testData, model);
  console.log('----- Test Results ----- ');
  console.table(testResults.confusionMatrix)
  delete testResults.confusionMatrix
  console.log(testResults);
  console.log('----------------');
}
