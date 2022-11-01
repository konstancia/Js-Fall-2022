/*Create a function to return reverse a given array (without using reverse-function from array-class)
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> [hopeful, peaceful, live, laugh, hello]
        input -> [hello, laugh, live, king, queen]
        ans -> [queen, king, live, laugh, hello]
Create a function to return the largest string(s) from a given string array.
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> peaceful
        input -> [hello, laugh, live, king, queen]
        ans -> hello, laugh, queen
        */

const str= (`hello, laugh, live, peaceful, hopeful`);

const longerWord = (str) => {
const strArray = str.split (' ');
const sortedStrArray = strArray.sort(
    ( strA, strB) => {
        return strB.length  - 
        strA.length;
    }
);
return sortedStrArray[0];
}

 console.log(longerWord(str));


/*Create a function to return color name(s) appearing maximum number of times in given string array
    example:
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
        ans -> red
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
        ans -> blue, red
        input -> []
        ans -> 
Create a function to return minimum value in the given numbers-array
    example:
        input -> [12, 34, 25, 7, 4, 67, 19]
        ans -> 4
        input -> [34, 54, 12, -8, 0, 45]
        ans -> -8
        input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
        ans -> 10
        */

        