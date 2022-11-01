
/**
 * Due date : Oct-9 (Sun) eod
 */

const sentence1 = 'Hello Dear, how are you doing?';
let sentence1Lengh = sentence1.length;
console.log(`\nSentence Lenght -> ${sentence1Lengh}`);
let result1 = sentence1.length >= 8 ? "10" : "15"
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */
console.log(`\n\nresult1 -> ${result1}`);

const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
const replaceSentenceA_Alpha = sentence2.replace ('A' ,'Alpha');
console.log (`replaceSentenceA_Alpha --> ${replaceSentenceA_Alpha}`);
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence3_startWith_HeaLTh = sentence3.startsWith ('HeaLth');
console.log (`sentence3_startWith_HeaLTh --> ${sentence3_startWith_HeaLTh}`);

let sentence3_startsWith_Body = sentence3.startsWith('Body');
console.log (`sentence3_startsWith_Body -> ${sentence3_startsWith_Body}`);

/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'BoDy' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'BoDy' is present only once. (true or false)
 */

 let sentence3_lastCharacter = sentence3.endsWith('');
 console.log (`sentence3_lastCharacter -> ${sentence3_lastCharacter}`);

  let sentence3_L = sentence3.toLowerCase();
  let BoDy_l ='BoDy'.toLowerCase();
  let indexOf_Body = sentence3.indexOf(BoDy_l);
  let lastIndexOf = sentence3.lastIndexOf(BoDy_l);
   let result = indexOf_Body === lastIndexOf ;
   console.log (`${result}`);

