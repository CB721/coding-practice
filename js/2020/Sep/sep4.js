// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

function ladderLength(beginWord, endWord, wordList) {
    const ladder = [];
    let x = 0;

    for (let i = 0; i < beginWord.length; i++) {
        console.log("-------")
        console.log(ladder);
        // check each word in the word list
        for (let j = 0; j < wordList.length; j++) {
            if (beginWord === wordList[j] && ladder.indexOf(wordList[j]) < 0) {
                ladder.push(wordList[j]);
                break;
            }
            console.log("curr letter", wordList[j][i], beginWord[i]);
            // if the the letters don't match
            if (beginWord[i] !== wordList[j][i]) {
                let onlyOneDiff = true;
                // check if all of the other letters do
                // only one letter can change at a time
                // start from the next index since all letters to this point match
                for (let q = i + 1; q < wordList[j].length; q++) {
                    // if they don't match
                    if (wordList[x][q] !== beginWord[q]) {
                        // there is more than one letter that is different
                        onlyOneDiff = false;
                        // exit the loop
                        break;
                    }
                }
                // if only one letter is different
                if (onlyOneDiff) {
                    // set the begin word to the current word list word
                    beginWord = wordList[x];
                    // add the current word list word to the ladder array
                    ladder.push(wordList[x]);
                    // exit loop
                    break;
                }
                // continue loop to see if another word matches
            }
        }
    }
    // if the begin word ends up equally the end word
    // return the length of the ladder array
    // otherwise return 0
    return beginWord === endWord ? ladder.length : 0;
}

// console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])) // 5
// console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])) // 0
console.log(ladderLength("hot", "dog", ["hot", "dog", "dot"])) // 3