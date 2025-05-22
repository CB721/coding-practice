const fs = require('fs');
const csv = require('csv-parser');

const data = [];

fs.createReadStream('./data/twitter_training.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push({
      ...row,
      words: processText(row.text),
      sentiment: row.sentiment.toLowerCase(),
    });
  }
  )
  .on('end', () => {
    console.log('CSV file successfully processed');
    const { model, totals, priors } = train(data);
    const inputs = [
      'I love this product!',
      'This is the worst experience ever.',
      'It was okay, nothing special.',
      'I don\'t care about this at all.',
      'I hate this bullshit!',
      'That fucking shit is the best',
      "I'd literally die to get one of those",
      'Now we need a chog friend',
      'Not complicated, just a process',
      'Lmao love that. I need to start doing the same. People say wild shit to me all the time and act like it"s normal',
      'I"m awake. Going to head out here soon.',
      "Shout out to Sam",
      'Holy shit I haven"t thought of that in forever. Swagg response though'
    ]

    inputs.forEach((input) => {
      console.log('Input: ', input)
      console.log(predictNaiveBayes(model, totals, priors, input))
      console.log('----------')
    })
  }
  )
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  }
  );

function processText(text) {
  // Basic text processing: convert to lowercase, remove punctuation and split into individual words
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ')
}

function getTotalBySentiment(dataset, sentiment = 'positive') {
  return dataset.filter((item) => item.sentiment === sentiment).length;
}

function train(dataset) {
  const total = dataset.length;
  const positiveTotal = getTotalBySentiment(dataset, 'positive');
  const negativeTotal = getTotalBySentiment(dataset, 'negative');
  const neutralTotal = getTotalBySentiment(dataset, 'neutral');
  const irrelevantTotal = getTotalBySentiment(dataset, 'irrelevant');

  const priors = {
    positive: positiveTotal / total,
    negative: negativeTotal / total,
    neutral: neutralTotal / total,
    irrelevant: irrelevantTotal / total,
  }

  const totals = {
    positive: positiveTotal,
    negative: negativeTotal,
    neutral: neutralTotal,
    irrelevant: irrelevantTotal,
  }

  const model = {}

  dataset.forEach((item) => {
    item.words.forEach((word) => {
      if (!model[word]) {
        model[word] = { positive: 0, negative: 0, neutral: 0, irrelevant: 0 };
      }
      model[word][item.sentiment] += 1;
    });
  });

  return {
    model,
    priors,
    totals,
  }
}

function predictNaiveBayes(model, totals, priors, input = '') {
  const words = processText(input);

  let positive = Math.log(priors.positive);
  let negative = Math.log(priors.negative);
  let neutral = Math.log(priors.neutral);
  let irrelevant = Math.log(priors.irrelevant);

  for (const word of words) {
    if (model[word]) {
      positive += Math.log(model[word].positive / totals.positive);
      negative += Math.log(model[word].negative / totals.negative);
      neutral += Math.log(model[word].neutral / totals.neutral);
      irrelevant += Math.log(model[word].irrelevant / totals.irrelevant);
    }
  }

  const positiveProb = Math.exp(positive);
  const negativeProb = Math.exp(negative);
  const neutralProb = Math.exp(neutral);
  const irrelevantProb = Math.exp(irrelevant);
  const totalProb = positiveProb + negativeProb + neutralProb + irrelevantProb;

  return {
    positive: positiveProb / totalProb,
    negative: negativeProb / totalProb,
    neutral: neutralProb / totalProb,
    irrelevant: irrelevantProb / totalProb,
  }
}