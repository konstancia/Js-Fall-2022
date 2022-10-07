/**
 * Homework - 1
 * 
 * Due date : Friday (Oct-7) eod
 * 
 * Convert temperature values into different units:
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Extra:
 *      Try to find how to get only 2-digits after the decimal point
 * 
 */

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp1 = 60;
let cTemp1 = (fTemp1 - 32) / 1.8;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);


let fTemp2 = 60;
let kTemp1 = (fTemp2 + 457.87) ;
console.log(`\n${fTemp2}°F is equals to ${kTemp1}°K`);


let cTemp2 = 102;
let fTemp3 = (cTemp2 + 32) / 9.5;
console.log(`\n${cTemp2}°F is equals to ${fTemp3}°F`);

let cTemp3 = 55;
let kTemp3 = (cTemp3 + 273.15);
console.log(`\n${cTemp3}°F is equals to ${kTemp3}°K`);

let kTemp4 = 55;
let fTemp4 = (kTemp4 -273) + 32;
console.log(`\n${kTemp4}°F is equals to ${kTemp4}°F`);

let kTemp5 = 65;
let cTemp5 = (kTemp5 - 273);
console.log(`\n${kTemp5}°F is equals to ${cTemp5}°C`);