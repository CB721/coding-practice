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
    const testResults = {
      normalSplit: processNormalSplit(results),
      kFold: processKFold(results),
    }
    const confusionMatrices = {
      normalSplit: testResults.normalSplit.confusionMatrix,
      kFold: testResults.kFold.confusionMatrix,
    }
    delete testResults.normalSplit.confusionMatrix;
    delete testResults.kFold.confusionMatrix;
    console.log('----- Final Results -----');
    console.log('Normal Split Confusion Matrix:');
    console.table(confusionMatrices.normalSplit);
    console.log('K-Fold Confusion Matrix:');
    console.table(confusionMatrices.kFold);
    console.log('Normal Split Results:');
    console.table(testResults.normalSplit);
    console.log('K-Fold Results:');
    console.table(testResults.kFold);
    console.log('------ Comparison -----');
    console.log('Normal Split vs K-Fold');
    console.log('Accuracy:', testResults.normalSplit.accuracy > testResults.kFold.accuracy ? 'Normal Split' : 'K-Fold');
    console.log('Precision:', testResults.normalSplit.precision > testResults.kFold.precision ? 'Normal Split' : 'K-Fold');
    console.log('Recall:', testResults.normalSplit.recall > testResults.kFold.recall ? 'Normal Split' : 'K-Fold');
    console.log('F1 Score:', testResults.normalSplit.f1Score > testResults.kFold.f1Score ? 'Normal Split' : 'K-Fold');
    console.log('Specificity:', testResults.normalSplit.specificity > testResults.kFold.specificity ? 'Normal Split' : 'K-Fold');
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

function train1(data = []) {
  const epochs = 1000;
  const learningRate = 0.1;
  const regularization = 0.01;

  const weights = initializeWeights(data);
  // runtime complexity = O(rowsOfData * numberOfFeatures * epochs) ~ O(n^2)
  // for heart disease dataset, rowsOfData = 1026, numberOfFeatures = 13, epochs = 1000
  // so the runtime complexity is O(1026 * 13 * 1000) = O(13338000) ~ O(n^2)
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
  return weights;
}

// │   (index)   │       Values       │
// ├─────────────┼────────────────────┤
// │  accuracy   │ 0.8253658536585367 │
// │  precision  │ 0.8028533343979983 │
// │   recall    │ 0.8714733259612872 │
// │   f1Score   │ 0.8349845888950751 │
// │ specificity │ 0.7763606755543536 │
function train2(data = []) {
  const epochs = 1000;
  const batchSize = 32; // ~ square root of number of rows
  const minLearningRate = 0.001;
  const maxLearningRate = 0.1;
  const regularization = 0.01;
  const earlyStopPatience = 5;

  const weights = initializeWeights(data);
  let bestLoss = Infinity;
  let patience = earlyStopPatience;
  let learningRate = maxLearningRate;

  for (let epoch = 0; epoch < epochs; epoch++) {
    let epochLoss = 0;

    // Shuffle data
    const shuffled = [...data].sort(() => Math.random() - 0.5);

    // Process mini-batches
    for (let i = 0; i < shuffled.length; i += batchSize) {
      const batch = shuffled.slice(i, i + batchSize);
      let batchLoss = 0;

      const gradients = {};
      for (const key in weights) {
        gradients[key] = 0;
      }

      // Accumulate gradients for batch
      for (const row of batch) {
        const prediction = getPredictedValue(weights, row);
        const error = row[currDataset.y] - prediction;
        batchLoss += Math.abs(error);

        for (const key in weights) {
          if (key === 'bias') {
            gradients.bias += error;
          } else {
            gradients[key] += error * row[key];
          }
        }
      }

      // Apply accumulated gradients
      for (const key in weights) {
        const gradient = gradients[key] / batch.length;
        weights[key] += learningRate * (gradient - regularization * weights[key]);
      }

      epochLoss += batchLoss / batch.length;
    }

    // Early stopping check
    if (epochLoss < bestLoss) {
      bestLoss = epochLoss;
      patience = earlyStopPatience;
    } else {
      patience--;
      learningRate *= 0.9; // Reduce learning rate
      learningRate = Math.max(learningRate, minLearningRate);
    }

    if (patience <= 0) {
      console.log(`Early stopping at epoch ${epoch}`);
      break;
    }

    if (epoch % 100 === 0) {
      console.log(`Epoch ${epoch}, Loss: ${epochLoss}`);
    }
  }

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

  const accuracy = (truePos + trueNeg) / (truePos + trueNeg + falsePos + falseNeg);
  const precision = truePos / (truePos + falsePos);
  const recall = truePos / (truePos + falseNeg);
  const specificity = trueNeg / (trueNeg + falsePos);
  const f1Score = 2 * (precision * recall) / (precision + recall);
  // const confusionMatrix = [[`${trueNeg} ✅`, `${falsePos} ❌`], [`${falseNeg} ❌`, `${truePos} ✅`]];
  const confusionMatrix = [[trueNeg, falsePos], [falseNeg, truePos]];

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

function splitIntoKFolds(data, k) {
  const folds = Array(k).fill().map(() => []);
  const copyData = [...data];

  while (copyData.length > 0) {
    for (let i = 0; i < k && copyData.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * copyData.length);
      folds[i].push(copyData.splice(randomIndex, 1)[0]);
    }
  }
  return folds;
}

function runKFoldCV(data, k = 5) {
  const folds = splitIntoKFolds(data, k);
  const metrics = {
    accuracy: 0,
    precision: 0,
    recall: 0,
    f1Score: 0,
    specificity: 0,
    confusionMatrix: [[0, 0], [0, 0]],
  };

  for (let i = 0; i < k; i++) {
    const testFold = folds[i];
    const trainFolds = folds.filter((_, index) => index !== i);
    const trainData = trainFolds.flat();

    const model = train1(trainData);
    const results = test(testFold, model);

    Object.keys(metrics).forEach(key => {
      if (key !== 'confusionMatrix') {
        metrics[key] += results[key];
      } else {
        metrics.confusionMatrix[0][0] += results.confusionMatrix[0][0];
        metrics.confusionMatrix[0][1] += results.confusionMatrix[0][1];
        metrics.confusionMatrix[1][0] += results.confusionMatrix[1][0];
        metrics.confusionMatrix[1][1] += results.confusionMatrix[1][1];
      }
    });
  }

  // Average the metrics
  Object.keys(metrics).forEach((key) => {
    if (key !== 'confusionMatrix') {
      metrics[key] /= k;
    } else {
      metrics.confusionMatrix[0][0] /= k;
      metrics.confusionMatrix[0][1] /= k;
      metrics.confusionMatrix[1][0] /= k;
      metrics.confusionMatrix[1][1] /= k;
    }
  });

  return metrics;
}

function processKFold(data = []) {
  const normalizedData = normalizeData(data);
  const k = 7;  // number of folds

  console.log('----- Starting K-Fold Cross Validation -----');
  return runKFoldCV(normalizedData, k);
}

function processNormalSplit(data = []) {
  const normalizedData = normalizeData(data);
  const testSize = 0.2;

  const testData = [];
  while (normalizedData.length > 0 && testData.length < Math.floor(normalizedData.length * testSize)) {
    const randomIndex = Math.floor(Math.random() * normalizedData.length);
    testData.push(normalizedData.splice(randomIndex, 1)[0]);
  }
  const trainingData = normalizedData;

  const model = train1(trainingData);

  return test(testData, model);
}
