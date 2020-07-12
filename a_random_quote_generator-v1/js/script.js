/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
 * @type {number}
 * Creating a global variable randomNumber used in getRandomQuote() function and console.log() while testing;
 * Declaring the ramdomNumber variable in the global scope so we can access it with console.log() method outside the getRandomQuote() function scope.
 **/
let randomNumber;


/***
 * 'quotes' array of objects
 * @type {Array}
 * 
 * Stores an array of quote objects
 * Each quote object consists of at least 2 properties: 'quote' and 'source'
 * Some quote objects contain as well 'citation' or/and 'year' properties
 * All properties are string values
 **/
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
    quote : "If I’m gonna tell a real story, I’m gonna start with my name.",
    source : "Kendrick Lamar",
    year : "2014."
  },
  {
    quote : "Have enough courage to start and enough heart to finish.",
    source : "Jessica N. S. Yourko",
  }

 ];
 
 //testing the 'quotes' array with console.log() function
 //console.log(quotes);


/***
 * 'getRandomQuote' function
 * Returns a random quote object from 'quotes' array of objects
 *
 * @param {object} quotesArray - Array from which a random quote object will be selected and returned.
 * @return {object} A random quote object.
 **/
function getRandomQuote( quotesArray ) {

  randomNumber = Math.floor( Math.random() * quotesArray.length );
  return quotesArray[ randomNumber ];

}

//testing the getRandomQuote() function with console.log() method
//console.log( `The quote is "${ getRandomQuote( quotes ).quote }. Random number between 0 and ${ quotes.length } is ${ randomNumber }."` );


/***
 * 'printQuote' function
 * Prints selected quote to the index.html web page
 * 
 * @type {object} randomQuote - stores a random quote from the 'quotes' array by calling getRandomQuote() function
 * @type {string} display - stores a string of elements that need to be displayed on the index.html web page
 **/
function printQuote() {

  let randomQuote = getRandomQuote( quotes );

  let display = `
    <p class = "quote">${ randomQuote.quote }</p>
    <p class = "source">${ randomQuote.source }
  `;

  //Adding 'citation' element to 'display' string variable if there is one
  if ( randomQuote.citation ) {
    display += `<span class = "citation">${ randomQuote.citation }</span>`;
  }

  //Adding 'year' element to 'display' string variable if there is one
  if ( randomQuote.year ) {
    display += `<span class = "year">${ randomQuote.year }</span>`;
  }

  //Finishing 'display' string with closing paragrah tag; </p>
  display += "</p>";

  //Inserting 'display' string to the index.html file so it can be displayed on our web page
  document.getElementById( "quote-box" ).innerHTML = display;

}


//Reloads a new quote by calling on the printQuote() function each time the button 'Show another quote' is pressed
document.getElementById( "load-quote" ).addEventListener( "click", printQuote, false );