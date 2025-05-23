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
  './data/sentiment_analysis.csv',
];

Promise.all(files.map(file => readCSV(file)))
  .then(results => {
    const combinedData = results.flat();
    console.log('All CSV files successfully processed');
    const { model, totals, priors } = train(combinedData);

    const inputs = [
      { text: 'I love this product!', sentiment: 'positive' },
      { text: 'This is the worst experience ever.', sentiment: 'negative' },
      { text: 'It was okay, nothing special.', sentiment: 'neutral' },
      { text: 'I don\'t care about this at all.', sentiment: 'neutral' },
      { text: 'I hate this bullshit!', sentiment: 'negative' },
      { text: 'That fucking shit is the best', sentiment: 'positive' },
      { text: "I\'d literally die to get one of those!", sentiment: 'positive' },
      { text: 'Now we need a chog friend', sentiment: 'positive' },
      { text: 'Not complicated, just a process', sentiment: 'neutral' },
      { text: "Lmao love that. I need to start doing the same. People say wild shit to me all the time and act like it\'s normal", sentiment: 'negative' },
      { text: 'I"m awake. Going to head out here soon.', sentiment: 'positive' },
      { text: "Shout out to Sam", sentiment: 'positive' },
      { text: "Holy shit I haven\'t thought of that in forever. Swagg response though", sentiment: 'positive' },
      { text: 'Traffic was okay this morning.', sentiment: 'neutral' },
      { text: 'Just finished an amazing workout! 💪', sentiment: 'positive' },
      { text: 'huh what the ****? Smelly? Noooo. I just thought she hung out with cows all day', sentiment: 'negative' },
      { text: 'Going to miss my roomie ... We will no longer be roomies starting tomorrow', sentiment: 'negative' },
      { text: 'First thing I did this morning was wake up, brew up a nice pot of coffee, and then see this shit on the news today', sentiment: 'negative' },
      { text: 'We got the best seats in the house!', sentiment: 'positive' },
      { text: 'Omg can you fr fr calm down?', sentiment: 'negative' },
      { text: 'Arthur\'s the best bunny ever', sentiment: 'positive' }
    ]

    let correctTally = 0;
    inputs.forEach((input) => {
      console.log('----------')
      console.log('Input: ', input.text)
      const { positive, negative, neutral } = predictNaiveBayes(model, totals, priors, input.text);
      console.log((positive * 100).toFixed(2) + '% likely to be positive');
      console.log((negative * 100).toFixed(2) + '% likely to be negative');
      console.log((neutral * 100).toFixed(2) + '% likely to be neutral');
      const predictedSentiment = positive > negative && positive > neutral ? 'positive' : negative > positive && negative > neutral ? 'negative' : 'neutral';
      console.log('predictedSentiment:', predictedSentiment);
      console.log('expectedSentiment:', input.sentiment);
      if (predictedSentiment === input.sentiment) {
        correctTally++;
      }
    });
    console.log('----------')
    console.log('Correctly predicted: ', correctTally, 'out of', inputs.length);
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
    platform: lowercaseRow.platform?.toLowerCase() || 'twitter',
    time: lowercaseRow.time,
    month: lowercaseRow.month,
  }
}

function processText(text) {
  if (!text) return [];

  // First preserve contractions by replacing apostrophes temporarily
  let processed = text
    .toLowerCase()
    .replace(/([a-z])'([a-z])/g, '$1\u0001$2'); // Use special char to mark contractions

  // Match:
  // - Words with preserved contractions
  // - Quoted phrases
  // - Individual punctuation
  // - Regular words
  const matches = processed.match(
    /"[^"]+"|'[^']+'|[a-z0-9]+\u0001[a-z0-9]+|[a-z0-9]+|[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g
  );

  // Restore apostrophes and clean up
  return matches
    ? matches
      .map(token => token.replace(/\u0001/g, "'"))
      .filter(Boolean)
    : [];
}

function processSentiment(sentiment = '') {
  if (typeof sentiment === 'number') {
    if (sentiment > 0) {
      return 'positive';
    }
    if (sentiment < 0) {
      return 'negative';
    }
    return 'neutral';
  }
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
  const unknownWordPenalty = Math.log(1e-5);
  const smoothing = 1e-10;

  let positive = Math.log(priors.positive + smoothing);
  let negative = Math.log(priors.negative + smoothing);
  let neutral = Math.log(priors.neutral + smoothing);

  const unknownWords = [];

  for (const word of words) {
    if (model[word]) {
      // Add smoothing to prevent division by zero
      positive += Math.log((model[word].positive + smoothing) / (totals.positive + smoothing));
      negative += Math.log((model[word].negative + smoothing) / (totals.negative + smoothing));
      neutral += Math.log((model[word].neutral + smoothing) / (totals.neutral + smoothing));
    } else {
      // If the word is unknown, apply penalty
      unknownWords.push(word);
      positive += unknownWordPenalty;
      negative += unknownWordPenalty;
      neutral += unknownWordPenalty;
    }
  }

  const positiveProb = Math.exp(positive);
  const negativeProb = Math.exp(negative);
  const neutralProb = Math.exp(neutral);
  const totalProb = positiveProb + negativeProb + neutralProb;
  if (unknownWords.length > 0) {
    console.log('Unknown words:', unknownWords);
  }
  return {
    positive: positiveProb / totalProb,
    negative: negativeProb / totalProb,
    neutral: neutralProb / totalProb,
  }
}