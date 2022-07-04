var questions = [
  {
    title:
      " What is the HTML tag under which one can write the JavaScript code?",
    choices: [
      "<javascript>",
      "<scripted>",
      "<script>",
      "<js>",
    ],
    // Answer: C
    answer: "<script>",
  },
  {
    title:
      "Choose the correct JavaScript syntax to change the content of the following HTML code.",
    choices: [
      "document.getElementById(“Junghoon”).innerHTML=”Jung Rules",
      "document.getElement(“Junghoon”).innerHTML=”Jung Rules",
      "document.getId(“Junghoon”)=”Jung Rules",
      "There is no relationship between HTML and JavaScript",
    ],
    // Answer: A
    answer: "document.getElementById(“Junghoon”).innerHTML=”Jung Rules",
  },
  {
    title: "Which of the following is the correct syntax to display “GTbootCamp” in an alert box using JavaScript?",
    choices: [
      "alertbox(“GTbootCamp”);",
      "msg(“GTbootCamp”);",
      "msgbox(“GTbootCamp”);",
      "alert(“GTbootCamp”);",
    ],
    // Answer: D
    answer:  "alert(“GTbootCamp”);",
  },

  {
    title:  "What is the correct syntax for referring to an external script called “JavaScript.js?”",
    choices: [
      "<script src=”JavaScript.js”>",
      "<script href=”JavaScript.js”>",
      "<script ref=”JavaScript.js”>",
      "<script name=”JavaScript.js”>",
    ],
    // Answer:A
    answer: "<script src=”JavaScript.js”>",
  },
  {
    title: "The external JavaScript file must contain <script> tag. True or False?",
    choices: [
      "True",
      "False",
    ],
    // Answer: B
    answer:
      "False",
  },
  {
    title:
      "What is the syntax for creating a function in JavaScript named as Quiz?",
    choices: [
      " function = Quiz()",
      "function Quiz()",
      "function := Quiz()",
      "function : Quiz()",
    ],
    // Answer: B
    answer: "function Quiz()",
  },
  {
    title:
      ". How is the function called in JavaScript?",
    choices: [
      "call Quiz();",
      "call function Quiz();",
      "Quiz();",
      " function Quiz();",
    ],
    // Answer: C
    answer: "Quiz();",
  },
  {
    title:
      "How to write an 'if' statement for executing some code.If “i” is NOT equal to 5?",
    choices: [
      " if(i<>5)",
      "if i<>5 ",
      " if(i!=5)",
      "if i!=5",
    ],
    // Answer: C
    answer:
      " if(i!=5)",
  },
  {
    title: "What is the correct syntax for adding comments in JavaScript?",
    choices: [
      " <!This is a comment>",
      "//This is a comment",
      " This is a comment",
      "**This is a comment**",
    ],
    // Answer: B
    answer: "//This is a comment",
  },
  {
    title: "How to insert a multi-line comment in JavaScript?",
    choices: [
      " <!This is comment line 1 This is comment line 2> ",
      "//This is comment line 1 This is comment line 2//",
      " /*This is comment line 1 This is comment line 2*/ ",
    ],
    answer:
      // Answer: C
      " /*This is comment line 1 This is comment line 2*/ ",
  },
  
];
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsBox");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 120;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
  var x = document.getElementById("startTime");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 var y = document.getElementById("highscores");
 if (y.style.display ==="none"){
  y.style.display ="block";
 }else {
  y.style.display ="none";
 }



  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time Left: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        quizCompleted();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent =
        "Correct!";
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent =
        "The answer was:" + questions[questionIndex].answer;
    }
  }
  questionIndex++;

  if (questionIndex >= questions.length) {
    quizCompleted();
    createDiv.textContent =
      "You answered  " + score + "/" +questions.length +
      " Correctly!";
  } else {
    render(questionIndex);
  }

  questionsDiv.appendChild(createDiv);
}

function quizCompleted() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Complete!";

  questionsDiv.appendChild(createH1);

  var createTitleLine = document.createElement("hr");
  createTitleLine.setAttribute("id", "titleline");

  questionsDiv.appendChild(createTitleLine);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    var calcScore = parseInt(timeRemaining) * parseInt(score);
    console.log(typeof timeRemaining);
    console.log(typeof score);
    createP.textContent = "Your final score is: " + calcScore;

    questionsDiv.appendChild(createP2);
  }}

