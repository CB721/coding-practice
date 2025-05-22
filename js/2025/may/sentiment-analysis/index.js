const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => data.push(initialDataProcessing(row)))
      .on('end', () => resolve(data))
      .on('error', reject);
  });
}

const files = [
  './data/twitter_training.csv',
  './data/sentimentdataset.csv',
];

Promise.all(files.map(file => readCSV(file)))
  .then(results => {
    const combinedData = results.flat();
    console.log('All CSV files successfully processed');
    const { model, totals, priors } = train(combinedData);

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
      console.log('----------')
      console.log('Input: ', input)
      console.log(predictNaiveBayes(model, totals, priors, input))
    })
  })
  .catch(error => console.error('Error processing files:', error));


function initialDataProcessing(row) {
  const keys = Object.keys(row);
  const lowercaseRow = {};
  keys.forEach((key) => {
    const newKey = key === 'Time of Tweet' ? 'time' : key.toLowerCase();
    if (key === 'Hour') {
      const time = parseInt(row[key])
      let timeOfDay = 'morning';
      if (time > 10 && time < 7) {
        timeOfDay = 'noon'
      } else if (time > 6 && time < 2) {
        timeOfDay = 'night'
      }
      lowercaseRow['time'] = timeOfDay;
    } else {
      lowercaseRow[newKey] = row[key];
    }
  });

  return {
    text: lowercaseRow.text,
    words: processText(lowercaseRow.text),
    sentiment: processSentiment(lowercaseRow.sentiment.toLowerCase().trim()),
    // sentiment: lowercaseRow.sentiment.toLowerCase().trim(),
    platform: lowercaseRow.platform?.toLowerCase() || 'twitter',
    time: lowercaseRow.time,
    month: lowercaseRow.month,
  }
}

function processText(text) {
  if (!text) return [];

  const matches = text
    .toLowerCase()
    .match(/[a-z0-9]+|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g);

  return matches ? matches.filter(Boolean) : [];
}

function processSentiment(sentiment = '') {
  const sentiments = {
    positive: [
      'positive', 'happiness', 'joy', 'love', 'amusement', 'enjoyment',
      'admiration', 'affection', 'awe', 'excitement', 'kind', 'pride',
      'elation', 'euphoria', 'contentment', 'serenity', 'gratitude',
      'hope', 'empowerment', 'compassion', 'tenderness', 'enthusiasm',
      'fulfillment', 'determination', 'zest', 'hopeful', 'proud',
      'grateful', 'empathetic', 'compassionate', 'playful', 'confident',
      'thrill', 'overjoyed', 'inspiration', 'motivation', 'satisfaction',
      'blessed', 'appreciation', 'confidence', 'accomplishment', 'optimism',
      'enchantment', 'playfuljoy', 'harmony', 'wonder', 'adventure',
      'festivejoy', 'freedom', 'resilience', 'success', 'triumph',
      'heartwarming', 'breakthrough', 'joy in baking', 'happy', 'good',
      'great', 'like'
    ],
    negative: [
      'negative', 'anger', 'fear', 'sadness', 'disgust', 'disappointed',
      'bitter', 'shame', 'despair', 'grief', 'loneliness', 'jealousy',
      'resentment', 'frustration', 'anxiety', 'intimidation', 'helplessness',
      'envy', 'regret', 'melancholy', 'bitterness', 'fearful', 'apprehensive',
      'overwhelmed', 'jealous', 'devastated', 'frustrated', 'envious',
      'heartbreak', 'betrayal', 'suffering', 'isolation', 'disappointment',
      'exhaustion', 'sorrow', 'darkness', 'desperation', 'desolation',
      'loss', 'heartache', 'obstacle', 'pressure', 'miscalculation',
      'embarrassed', 'sad', 'hate', 'bad', 'dislike', 'spam'
    ],
    neutral: [
      'neutral', 'calmness', 'confusion', 'curiosity', 'indifference',
      'numbness', 'nostalgia', 'ambivalence', 'contemplation', 'reflection',
      'pensive', 'solitude', 'emotion', 'suspense', 'challenge', 'okay',
      'fine', 'relief', 'mischievous', 'irrelevant', 'off-topic'
    ],
  };

  for (const [key, values] of Object.entries(sentiments)) {
    if (values.includes(sentiment)) {
      return key;
    }
  }

  return 'neutral'; // Default to neutral if no match found
}

function getTotalBySentiment(dataset, sentiment = 'positive') {
  return dataset.filter((item) => item.sentiment === sentiment).length;
}

function train(dataset) {
  const total = dataset.length;
  const positiveTotal = getTotalBySentiment(dataset, 'positive');
  const negativeTotal = getTotalBySentiment(dataset, 'negative');
  const neutralTotal = getTotalBySentiment(dataset, 'neutral');

  const priors = {
    positive: positiveTotal / total,
    negative: negativeTotal / total,
    neutral: neutralTotal / total,
  }

  const totals = {
    positive: positiveTotal,
    negative: negativeTotal,
    neutral: neutralTotal,
  }

  const model = {}

  dataset.forEach((item) => {
    item.words.forEach((word) => {
      if (!model[word]) {
        model[word] = { positive: 0, negative: 0, neutral: 0 };
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
  // console.log('Words:', words);

  let positive = Math.log(priors.positive);
  let negative = Math.log(priors.negative);
  let neutral = Math.log(priors.neutral);

  for (const word of words) {
    if (model[word]) {
      positive += Math.log(model[word].positive / totals.positive);
      negative += Math.log(model[word].negative / totals.negative);
      neutral += Math.log(model[word].neutral / totals.neutral);
    }
  }

  // console.log('Positive:', positive);
  // console.log('Negative:', negative);
  // console.log('Neutral:', neutral);

  const positiveProb = Math.exp(positive);
  const negativeProb = Math.exp(negative);
  const neutralProb = Math.exp(neutral);
  const totalProb = positiveProb + negativeProb + neutralProb ;

  return {
    positive: positiveProb / totalProb,
    negative: negativeProb / totalProb,
    neutral: neutralProb / totalProb,
  }
}