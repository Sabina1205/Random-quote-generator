const quoteStore = [
    {
        "quote": "So many books, so little time.",
        "author": "Frank Zappa"
    }, {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi"
    }, {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss"
    }, {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt"
    }, {
        "quote": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle"
    }
  ];
  
  window.onload = init;
  function init() {
    displayQuote();
  }
  
  function displayQuote() {
    let quoteSize = quoteStore.length;
    let randomQuote = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = quoteStore[randomQuote];

    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22"

    // Add quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat

    // Add author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat
    
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
  }
