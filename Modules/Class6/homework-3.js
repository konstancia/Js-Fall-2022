// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
let countryName = 'Japan';
// countryName.length;  <-- not allowed

function strLength(s) {
    var length = 0;
    while (s[length] !== undefined){
      length++;
    } 
    return length;
  }
  
  console.log(strLength("Japan")); // 5
  console.log(strLength("")); // 0

/**
 * Q2: find the number of words in the given sentence2
 */
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let numOfWords = sentence2.split('').length;
console.log(`Number of words --> ${numOfWords}`);

/**
 * Q3: Create abbreviation for a 4-word sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe' -> YNWA
 * 
 * 
 */

 function makeAbbr(words) {
    words = words.trim();
    const length = words.length;
    let acronym = words[0];
  
    for(let i = 1; i < length; i++) {
      if(words[i - 1] === ' ' && words[i] !== ' ') {
         acronym += words[i];
      }
    }
  
    return acronym;
  }
  console.log(makeAbbr('I love you'));
  console.log(makeAbbr('I     love     you'));
  console.log(makeAbbr('   I    love    you   '));


const sentence3 = 'you Never waLK ALONe';
let abbr = '';
// code
console.log(`abbr -> ${abbr}`);     // abbr -> YNWA

/**
 * Q4: Convert the string value in to Titlecase
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 * 
 * 
 */
 const sentence4 = 'you live Only once';
 let sentence4_Titlecase='';
 //code
 const sentenceArray = sentence4.split(' '); 
 
 let word1 = sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1).toLowerCase();
 
 let word2 = sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1).toLowerCase();
 
 let word3 = sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1).toLowerCase();
 
 let word4 = sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1).toLowerCase();
 
 sentence4_Titlecase = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4;
 
 console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`); // sentence_Titlecase 

 const sentence5 = 'you Never waLK ALONe';
 let sentence5_Titlecase='';
 //code
 const sentenceArray1 = sentence5.split(' '); 
 
 let word1a = sentenceArray1[0].charAt(0).toUpperCase() + sentenceArray1[0].slice(1).toLowerCase();
 
 let word2a = sentenceArray1[1].charAt(0).toUpperCase() + sentenceArray1[1].slice(1).toLowerCase();
 
 let word3a = sentenceArray1[2].charAt(0).toUpperCase() + sentenceArray1[2].slice(1).toLowerCase();
 
 let word4a = sentenceArray1[3].charAt(0).toUpperCase() + sentenceArray1[3].slice(1).toLowerCase();
 
 sentence5_Titlecase = word1a + ' ' + word2a + ' ' + word3a + ' ' + word4a;
 
 console.log(`sentence5_Titlecase -> ${sentence5_Titlecase}`); // sentence_Titlecase 


