// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A:string 

let c = [true, false, false];
// A:boolean

let d = {age: number};
// A: string, number

let e = [3]
// A: number

let f;
// A: any

let g = []
// A: never ( Had to look this up but essentially represents a value that will never occur from what I found on stackoverflow )



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: The releaseYear is not being given if its going to be an optional value it should have the ? to show it doesn't always need to be there.

let prices = [100, 200, 300];
prices[0] = '$100';
// A: It is trying to assign a string to a value that can only be a number.

function myFunc(a: number, b: number): number {}
// A:


// Codewars Questions 
//https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript

function capitalizeWord(word) {
    var firstLetter = word[0].toUpperCase();  // Capitalize the first letter
  
    var capitalizedWord = firstLetter + word.slice(1);
  
    return capitalizedWord;
  }

  //https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

  function shortcut (string) {
  
    var vowels = ['a','e','i','o','u'];
    var result = ''
    
    for (var i = 0; i < string.length; i++) {
      var letter = string[i];
      
      if (!vowels.includes(letter)) {
        result += letter;
      }
    }
    
    return result
  }