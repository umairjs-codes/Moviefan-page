const movieContainer = document.getElementById('movie-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let scrollAmount = 0;

// Function to scroll the movie container to the right
rightArrow.addEventListener('click', () => {
  movieContainer.scrollBy({
    left: 300, // Adjust this value based on how far you want to scroll
    behavior: 'smooth'
  });
});

// Function to scroll the movie container to the left
leftArrow.addEventListener('click', () => {
  movieContainer.scrollBy({
    left: -300, // Adjust this value based on how far you want to scroll
    behavior: 'smooth'
  });
});


