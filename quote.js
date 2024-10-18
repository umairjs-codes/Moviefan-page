// Array of quotes[QUOTE OF THE DAY PAGE]
const quotes = [
    {
      text: "It does not do to dwell on dreams and forget to live.",
      character: "Albus Dumbledore",
      movie: "Harry Potter"
    },

    {
      text: "I am Iron Man.",
      character: "Tony Stark",
      movie: "Marvel Cinematic Universe"
    },

    {
      text: "The Force will be with you. Always.",
      character: "Obi-Wan Kenobi",
      movie: "Star Wars"
    },
    
    {
      text: "To the well-organized mind, death is but the next great adventure.",
      character: "Albus Dumbledore",
      movie: "Harry Potter"

      
    },

    {
      text:  "We're not the bad guys. We just happen to be the only people brave enough to stand up to them. ",
      character: "Tony Stark",
      movie: "Marvel Cinematic Universe "

      
    },

    {
      text:  "I find your lack of faith disturbing.",
      character: "Darth Vader",
      movie: "Star Wars "

      
    },

    {
      text:  "Fear is the path to the Dark Side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. ",
      character: "Lord Voldemort",
      movie: "Harry Potter "

      
    },

    {
      text:  "In the end, it doesn't matter. We're all just pawns in someone else's game ",
      character: "Loki",
      movie: "Marvel Cinematic Universe "

      
    },

    {
      text:  "It's not a matter of whether we're powerful enough, it's a matter of whether we're brave enough. ",
      character: "Hermione Granger",
      movie: "Harry Potter "

      
    },

    {
      text:  "In the red room, we learned to trust no one. ",
      character: "Black Widow",
      movie: "Marvel Cinematic Universe "

      
    },

    {
      text:  " With great power, comes great responsibility.",
      character: "Spider-Man",
      movie: " Marvel Cinematic Universe"

      
    },

    {
      text:  "There are some things you can't share with anyone else, and that's what makes them special. ",
      character: "Rubeus Hagrid",
      movie: "Harry Potter "

      
    },

    // Add more quotes here
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    document.querySelector('.quote-text').textContent = `"${randomQuote.text}"`;
    document.querySelector('.quote-author').textContent = `- ${randomQuote.character}, ${randomQuote.movie}`;
  }
  
  // Call the function when the page loads
  window.onload = displayRandomQuote;
  