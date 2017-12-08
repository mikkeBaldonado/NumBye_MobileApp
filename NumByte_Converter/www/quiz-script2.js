 var questions = [
                      { 
                          "question": "What is the smallest unit of electronic data?",
                         // "option1": "Byte",
                         // "option2": "Nibble",
                         // "option3": "Bit",
                         // "option4": "kilobyte",
                          "choice": ["Byte", "Nibble", "Bit", "Kilobyte"],
                          "answer": "Bit"
                     },
                     { 
                          "question": "Which of the following is the largest unit of electronic data?",
                          //"option1": "Terabyte",
                          //"option2": "Terabit",
                          //"option3": "Gigabyte",
                          //"option4": "kilobyte",
                          "choice": ["Terabyte", "Terabit", "Gigabyte", "kilobyte"],
                          "answer": "Terabyte"
                     },
                     { 
                          "question": "How many bytes are there in 1 Kilobyte?",
                          //"option1": "1000 bytes",
                          //"option2": "1024 bytes",
                          //"option3": "1204 bytes",
                          //"option4": "1020 bytes1",
                          "choice": ["1000 bytes", "1024 bytes", "1204 bytes", "1020 bytes"],
                          "answer": "21024 bytes"
                     },
                     { 
                          "question": "What are binary numbers?",
                          //"option1": "base 2 numbers",
                          //"option2": "base 10 numbers",
                          //"option3": "base 16 numbers",
                          //"option4": "base 8 numbers",
                          "choice": ["base 2 numbers", "base 10 numbers", "base 16 numbers", "base 8 numbers"],
                          "answer": "base 2 numbers"
                     },
                     { 
                          "question": "What do you call to a base 10 number system?",
                          //"option1": "octal",
                          //"option2": "Hex",
                          //"option3": "Decimal",
                          //"option4": "Binary",
                          "choice": ["octal", "Hex", "Decimal", "Binary"],
                          "answer": "Decimal"
                     },
                     { 
                          "question": "What is the base of hexadecimal number system?",
                          //"option1": "9",
                          //"option2": "10",
                          //"option3": "16",
                          //"option4": "15",
                          "choice": ["9", "10", "16", "15"],
                          "answer": "16"
                     },
                     { 
                          "question": "What is the base of octal number system?",
                          //"option1": "7",
                          //"option2": "10",
                          //"option3": "16",
                          //"option4": "8",
                          "choice": ["7", "10", "16", "8"],
                          "answer": "8"
                     },
                     { 
                          "question": "1024 mb is equal to _______ gb?",
                          //"option1": "1",
                          //"option2": "1024",
                          //"option3": "1204",
                          //"option4": "1020",
                          "choice": ["1", "1024", "1204", "1020"],
                          "answer": "1"
                     },
                     { 
                          "question": "1 terabyte is equal to _______ gb?",
                          //"option1": "1000",
                          //"option2": "1024",
                          //"option3": "1204",
                          //"option4": "1020",
                          "choice": ["1", "1024", "1204", "1020"],
                          "answer": "1024"
                     },
                     { 
                          "question": "What are the possible values of binary digit?",
                          //"option1": "0 or 1",
                          //"option2": "-1 or 1",
                          //"option3": "1 or 2",
                          //"option4": "-1 or 0",
                          "choice": ["0 or 1", "-1 or 1", "1 or 2", "-1 or 0"],
                          "answer": "0 or 1"
                     },
                     { 
                          "question": "How many bits are there in 1 Byte?",
                          //"option1": "7",
                          //"option2": "8",
                          //"option3": "1",
                          //"option4": "2",
                          "choice": ["7", "8", "1", "2"],
                          "answer": "8"
                     },
                     { 
                          "question": "Bit stands for _______?",
                          //"option1": "Binary Bit",
                          //"option2": "Binary Digit",
                          //"option3": "Bin Digit",
                          //"option4": "Binary",
                          "choice": ["Binary Bit", "Binary Digit", "B Digit", "Binary Git"],
                          "answer": "Binary Digit"
                     },
                     { 
                          "question": "Gigabyte is greater than megabyte.",
                          //"option1": "False, Gigabyte and megabyte are equal",
                          //"option2": "True, Gigabyte is always greater than megabyte",
                          //"option3": "False, Gigabyte is less than megabyte",
                          //"option4": "True, Gigabyte is sometimes greater than megabyte",
                          "choice": ["False, Gigabyte and megabyte are equal", "True, Gigabyte is always greater than megabyte", "False, Gigabyte is less than megabyte", "True, Gigabyte is sometimes greater than megabyte"],
                          "answer": "True, Gigabyte is always greater than megabyte"
                     },
                     { 
                          "question": "Decimal number can consist of 0 to _______ numbers.",
                          //"option1": "1",
                          //"option2": "-1 or 1",
                          //"option3": "9",
                          //"option4": "10",
                          "choice": ["1", "-1 or 1", "9", "10"],
                          "answer": "9"
                     },
                     { 
                          "question": "What is the commonly used number system?",
                          //"option1": "Decimal",
                          //"option2": "Hexadecimal",
                          //"option3": "Binary",
                          //"option4": "Octal",
                          "choice": ["Decimal", "Hexadecimal", "Binary", "Octal"],
                          "answer": "Decimal"
                     },
                
                  ];


  
  var randomIndex = [];
  for(var x = 0; x < 5; x++) {
      var rIndex = Math.floor(Math.random(questions) * (questions.length));
      q = questions[rIndex];
      randomIndex.push(q);
      questions.splice(rIndex, 1);
  }

  var currentQuestion = 0;
  var score = 0;
  var totQuestions = randomIndex.length;

  

  var container = document.getElementById('quizContainer');
  var questionEl = document.getElementById('question'); 
  var opt1 = document.getElementById('opt1'); 
  var opt2 = document.getElementById('opt2'); 
  var opt3 = document.getElementById('opt3'); 
  var opt4 = document.getElementById('opt4');
  var nextButton =document.getElementById('nextButton');
  var prevButton =document.getElementById('prevButton');
  var resultCont =document.getElementById('score');
  var resultText =document.getElementById('resultText');
  var choicesCont =document.getElementById('questionchoices');
  var ansKeyCont =document.getElementById('answerKey');
  var ansKey1 =document.getElementById('answer1');
  var ansKey2 =document.getElementById('answer2');
  var ansKey3 =document.getElementById('answer3');
  var ansKey4 =document.getElementById('answer4');
  var ansKey5 =document.getElementById('answer5');
  
  function loadQuestion(questionIndex) {
    var q = randomIndex[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.choice[0];
    opt2.textContent = q.choice[1];
    opt3.textContent = q.choice[2];
    opt4.textContent = q.choice[3];

    //checkAns();
  }

  
  function checkAns(){
  	var selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption) {
      var answer = selectedOption.parentElement.textContent;
      if (randomIndex[currentQuestion].answer == answer) {
      	score+=1;
      }
      selectedOption.checked = false;
    }
  }


  function loadNextQuestion() {
    checkAns();
    currentQuestion++;
      if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Done';
      }
      if (currentQuestion == totQuestions) {
        container.style.display = 'none';
        choicesCont.style.display = 'none';
        resultText.style.display = '';
        //resultCont.style.display = '';
        resultCont.textContent = '' + score;
        return;
      }
      loadQuestion(currentQuestion);
      prevButton.style.display = '';
  }

  function loadPrevQuestion() {
  	checkAns();
  	currentQuestion -= 1;
    loadQuestion(currentQuestion);
  };

  function ansKey() {
  	resultText.style.display = 'none';
    ansKeyCont.style.display ='';

    ansKey1.innerText = '1. ' + randomIndex[0].question + ' \n Answer: ' + randomIndex[0].answer;
    ansKey2.innerText = '2. ' + randomIndex[1].question + ' \n Answer: ' + randomIndex[1].answer;
    ansKey3.innerText = '3. ' + randomIndex[2].question + ' \n Answer: ' + randomIndex[2].answer;
    ansKey4.innerText = '4. ' + randomIndex[3].question + ' \n Answer: ' + randomIndex[3].answer;
    ansKey5.innerText = '5. ' + randomIndex[4].question + ' \n Answer: ' + randomIndex[4].answer;

  };

  loadQuestion(currentQuestion);