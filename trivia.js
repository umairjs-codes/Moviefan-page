const quizQuestions = [
    {
      question: "Who said: 'I saw a wand sticking out of a boy’s pocket...'",
      options: ["Walden Macnair", "Bellatrix Lestrange", "Junior Lucius Malfoy", "Barty Crouch"],
      answer: 3, // Index of correct answer (Barty Crouch)
    },
    {
      question:"What is the name of Harry Potter's pet owl?",
      options:["Hedwing", "Hoot", "Screech", "Owly"],
      answer: 0,

    },
    {
      question:" Who is the leader of the Avengers?",
      options:["Thor","Iron Man", "Captain America","Black Widow"],
      answer: 2,

    },
    {
      question:"Who is the main protagonist of the Star Wars saga?",
      options:["Darth Vader","Luke Skywalker","Han Solo","Pricess Leia"],
      answer: 1,

    },
    {
      question:"What is the name of Captain America's shield?",
      options:["Vibranium Sheild","Adamantium Sheild", "Uru Sheild", "Asgardian Sheild"],
      answer: 0,

    },
    {
      question:" Which Hogwarts house is Harry Potter sorted into?",
      options:["Ravenclaw", "Slytherin", "Hufflepuff", "Gryffindor"],
      answer: 3,

    },
    {
      question:"What is the name of the powerful Infinity Stones?",
      options:["The Elemental Gems", "The Cosmic Cubes", "The Aether", "The Infinity Gauntlet"],
      answer: 3,

    },
    {
question:"Who said that: With great power, comes great responsibility",
options:["Captain America", "Thor", "Spider Man", "Iron Man"],
answer: 2 ,


    },
    {
question:"What is the name of the magical stone that protects the Philosopher's Stone?",
options:["The Mirror of Erised"," The Sorting Hat", "The Resurrection Stone", "The Elder Wand"],
answer: 0,


    },
    {
question:"Who is the super-soldier created by HYDRA",
options:["Bucky Barnes","Steve Rogers","Clint Barton", "Natasha Romanoff"],
answer: 1,


    },

    // Add more questions
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  let totalQuestions = quizQuestions.length;
  
  document.getElementById('start-quiz').addEventListener('click', function () {
    startQuiz();
  });
  
  function startQuiz() {
    document.querySelector('.quiz-intro').style.display = 'none'; // Hide quiz intro
    document.querySelector('.quiz-question-container').style.display = 'block'; // Show quiz container
    currentQuestion = 0; // Reset current question index
    score = 0; // Reset score
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionData = quizQuestions[currentQuestion];
    document.getElementById('quiz-question').textContent = questionData.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = ''; // Clear previous options
  
    questionData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.classList.add('option');
      optionElement.addEventListener('click', () => checkAnswer(index, questionData.answer));
      optionsContainer.appendChild(optionElement);
    });
  
    document.getElementById('question-number').textContent = currentQuestion + 1;
  }
  
  function checkAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.option');
    if (selectedIndex === correctIndex) {
      options[selectedIndex].classList.add('correct');
      score++;
    } else {
      options[selectedIndex].classList.add('wrong');
      options[correctIndex].classList.add('correct');
    }
  
    // Disable further clicks after an answer is selected
    options.forEach(option => {
      option.style.pointerEvents = "none";
    });
  
    // Move to next question after a delay
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < totalQuestions) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }, 2000);
  }
  
  function endQuiz() {
    document.querySelector('.quiz-question-container').innerHTML = `
      <h2>Your Score: ${score} / ${totalQuestions}</h2>
      <button id="retake-quiz">Retake Quiz</button>
    `;
  
    // Add event listener for retaking the quiz
    document.getElementById('retake-quiz').addEventListener('click', function () {
      resetQuiz();
    });
  }
  
  function resetQuiz() {
    // Hide the current result and reset the quiz state
    document.querySelector('.quiz-question-container').innerHTML = ''; // Clear quiz content
    document.querySelector('.quiz-intro').style.display = 'block'; // Show the intro again
    document.querySelector('.quiz-question-container').style.display = 'none'; // Hide quiz container
    currentQuestion = 0; // Reset question index
    score = 0; // Reset score
    loadQuestion();
  }
  