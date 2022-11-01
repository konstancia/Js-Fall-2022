const sentence4 = 'have a GrEAT daY';
let sentence4_Titlecase='';
//code
const sentenceArray = sentence4.toLowerCase().split(' ');

sentence4_Titlecase = sentence4_Titlecase +  sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1) + ' ';

sentence4_Titlecase = sentence4_Titlecase + sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1) + ' ';

entence4_Titlecase = sentence4_Titlecase + sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1) + ' ';

entence4_Titlecase  = sentence4_Titlecase + sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1) + ' ';



console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`); // sentence_Titlecase 


let emptyArray = new Array();
for (num=0; num <10; num++)
 {
    emptyArray.push(num);
}   

    console.log(`${emptyArray}`);


    function removeNumFromArray(num, numArray) {
        // code
    }
    
    const arr1_1 = [1, 2, 3, 4, 5];
    const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
    console.log(numArrayAfterRemoval1_1);