const sentence4 = 'have a GrEAT daY';
let sentence4_Titlecase='';
//code
const sentenceArray = sentence4.split(' '); //['have' 'a' 'GrEAT' 'daY']

let word1 = sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1).toLowerCase();

let word2 = sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1).toLowerCase();

let word3 = sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1).toLowerCase();

let word4 = sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1).toLowerCase();

sentence4_Titlecase = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4;

console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`); // sentence_Titlecase 



