console.log("Hello World!");
/**
 * console.log statements helps to print anything in the terminal/console
 */

console.log('Hello World again!');
/**
 * In VS-Code, log is the shortcut for console.log()
 */


 let planets = ['plUtO', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRtH']
  let marsIndexZero = planets.unshift ('Mars');
  let venusIndexFour = planets.splice (4,0, 'Venus');
  console.log (`test --> ${planets}`);

 /**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */

  const sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

  for (let i=0 ; i < sports.length ; i++) {
      console.log(sports[i]);
  }