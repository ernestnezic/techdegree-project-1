/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let randomNumber;

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote : "Be yourself; everyone else is already taken.",
    source : "Oscar Wilde"
  },
  {
    quote : "Without music, life would be a mistake.Without music, life would be a mistake.",
    source : "Friedrich Nietzsche",
    citation : "Twilight of the Idols",
    year : "1889."
  },
  {
    quote : "Life isn't about finding yourself. Life is about creating yourself.",
    source : "Dr. Seuss",
    citation : "Happy Birthday to You"
  },
  {
    quote : "Logic will get you from A to Z; imagination will get you everywhere.",
    source : "Albert Einstein"
  },
  {
    quote : "Some infinities are bigger than other infinities.",
    source : "John Green",
    citation : "The Fault in Our Stars",
    year : "2012."
  },
  {
    quote : "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
    source : "Terry Pratchett",
    citation : "Diggers"
  },
  {
    quote : "We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.",
    source : "Veronica Roth",
    citation : "Divergent"
  }

 ];
 //console.log(quotes);


/***
 * `getRandomQuote` function
***/

function getRandomQuote( quotesArray ) {
  randomNumber = Math.floor( Math.random() * quotesArray.length );
  return quotesArray[ randomNumber ];
}

//console.log( `The quote is "${ getRandomQuote( quotes ).quote }. Random number between 0 and ${ quotes.length } is ${ randomNumber }."` );
//console.log( quotes );

/***
 * `printQuote` function
***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById("load-quote").addEventListener("click", printQuote, false);