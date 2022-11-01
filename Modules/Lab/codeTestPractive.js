/**
Question-1:
    Create a function to return the account object in given accountData-array and given account-id
​
    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765
​
​
        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }
​
    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234
​
​
        If input is accountData and accountId, return:
            {}
*/
/**
Question-2:
    Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
        example:
            input -> [hello, laugh, live, peaceful, hopeful]
            ans -> laugh, peaceful
​
            input -> [hello, laugh, live, king, queen]
            ans -> laugh
​
            input -> [live, king, queen]
            ans -> 
*/

//function arrayFindA (array);
        /*let str = (`hello, laugh, live, peaceful, hopeful`);
        
        const getIndexOfCharacter = function (str, char) {
            let tmpArray = [...str];
            char = char.toLowerCase();
            return tmpArray.reduce((results, elem, index) => elem.toLowerCase()
            === char ? [...results, index ]: results);

        };

        let results = getIndexOfCharacter(str, 'a');
        */

        let str = (`hello, laugh, live, peaceful, hopeful`);
        let cnt = 0;

        for (let val of str) {
            if (val.toLowerCase()=== 'a'){
                cnt++;
            };


        };
        console.log(cnt);
/**
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye
​
    Create a function to find if given string is palindrome (ignore cases).
*/
function palindrom(str) {
    return true;
}
palindrom("level");



function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//const reverseString = string.split('').reverse().join('');
