var questions = [
                      { 
                          "question": "What is the smallest unit of data in a computer?",
                          "option1": "Byte",
                          "option2": "Nibble",
                          "option3": "Bit",
                          "option4": "kilobyte",
                          "answer": "3"
                     },
                     { 
                          "question": "Which is the largest unit of information in a computer?",
                          "option1": "Terabyte",
                          "option2": "Terabit",
                          "option3": "Gigabyte",
                          "option4": "kilobyte",
                          "answer": "1"
                     },
                     { 
                          "question": "How many bytes are there in one KB?",
                          "option1": "1000",
                          "option2": "1024",
                          "option3": "1204",
                          "option4": "1020",
                          "answer": "2"
                     },
                     { 
                          "question": "What are binary numbers?",
                          "option1": "base 2 numbers",
                          "option2": "base 10 numbers",
                          "option3": "base 16 numbers",
                          "option4": "base 8 numbers",
                          "answer": "1"
                     },
                     { 
                          "question": "What do you call to a base 10 number system?",
                          "option1": "octal",
                          "option2": "Hex",
                          "option3": "Decimal",
                          "option4": "Binary",
                          "answer": "3"
                     },
                     { 
                          "question": "What is hexadecimal number system?",
                          "option1": "octal",
                          "option2": "Hex",
                          "option3": "Decimal",
                          "option4": "Binary",
                          "answer": "3"
                     },
                     { 
                          "question": "What is octal number system?",
                          "option1": "base 2 numbers",
                          "option2": "base 10 numbers",
                          "option3": "base 16 numbers",
                          "option4": "base 8 numbers",
                          "answer": "4"
                     },
                     { 
                          "question": "1024 mb is equal to _______gb?",
                          "option1": "1",
                          "option2": "1024",
                          "option3": "1204",
                          "option4": "1020",
                          "answer": "1"
                     },
                     { 
                          "question": "1 terabyte is equal to _______gb??",
                          "option1": "1000",
                          "option2": "1024",
                          "option3": "1204",
                          "option4": "1020",
                          "answer": "2"
                     },
                
                  ];

  
  var score = 0;
  var totQuestions = 5;

  var container = document.getElementById('quizContainer');
  var questionEl = document.getElementById('question'); 
  var opt1 = document.getElementById('opt1'); 
  var opt2 = document.getElementById('opt2'); 
  var opt3 = document.getElementById('opt3'); 
  var opt4 = document.getElementById('opt4');
  var nextButton =document.getElementById('nextButton');
  var prevButton =document.getElementById('prevButton');
  var resultCont =document.getElementById('result');
  var choicesCont =document.getElementById('questionchoices');

  
  var currentQuestion = Math.floor(Math.random(questions) * (questions.length));
  var q = "";
  var questionTracker = [];
  function loadQuestion() {
    var currentQuestion = Math.floor(Math.random(questions) * (questions.length));
    q = questions[currentQuestion];
    questionEl.textContent = q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

    questionTracker.push(q);
    questions.splice(q, 1);
  };


   var prevq = "";
  function loadPrevQuestion() {
   /* q = questionTracker[questionTracker.length - 1];
   loadNextQuestion();*/
    
  };

  function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption) {
      var answer =  selectedOption.value;
      if (q.answer == answer) {
        score+=1;
      }
      selectedOption.checked = false;
    }
    totQuestions--;
      if (totQuestions == 1) {
        nextButton.textContent = 'Finish';
      }
      if (totQuestions == 0) {
        container.style.display = 'none';
        choicesCont.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score ' + score;
        return;
      }
        loadQuestion();
        prevButton.style.display = '';

  };

  loadQuestion();                 