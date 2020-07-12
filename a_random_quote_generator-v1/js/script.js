/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
    quote : "The trouble with having an open mind is that people will insist on coming along and trying to put things in it.",
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


/***
 * `printQuote` function
***/

function printQuote() {

  let randomQuote = getRandomQuote( quotes );

  let display = `
    <p class = "quote">${ randomQuote.quote }</p>
    <p class = "source">${ randomQuote.source }
  `;

  if ( randomQuote.citation ) {
    display += `<span class = "citation">${ randomQuote.citation }</span>`;
  }

  if ( randomQuote.year ) {
    display += `<span class = "year">${ randomQuote.year }</span>`;
  }

  display += "</p>";

  document.getElementById( "quote-box" ).innerHTML = display;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById( "load-quote" ).addEventListener( "click", printQuote, false );