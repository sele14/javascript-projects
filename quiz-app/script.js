const quizData = [
    {
        question: 'What is the capital of Chile?',
        a: 'Santiago',
        b: 'Oslo',
        c: 'London',
        d: 'Moscow',
        correct: 'a'
    },
    {
        question: 'What is the highest mountain in Britain?',
        a: 'Johnstone',
        b: 'Cray Canyon',
        c: 'Thornsby',
        d: 'Ben Nevis',
        correct: 'd'
    },
    {
        question: 'What is the smallest country in the world?',
        a: 'Monaco',
        b: 'Indigo Islands',
        c: 'Vatican City',
        d: 'Seychelles',
        correct: 'c'
    },
    {
        question: 'Alberta is a province of which country?',
        a: 'Canada',
        b: 'United States',
        c: 'France',
        d: 'Germany',
        correct: 'a'
    },
    {
        question: 'What is the largest country in the world?',
        a: 'China',
        b: 'Russia',
        c: 'Canada',
        d: 'Brazil',
        correct: 'b'
    }
    
];

// get question and answer elements
const quiz = document.getElementById('quiz');
const answersElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// question index tracker
let currentQuiz = 0;
let score = 0;
let totalScore = quizData.length;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    // get current quiz data (q+answers) by index
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

// get selected answer
function getSelection(){

    let answer = undefined;

    // for each element with class = "answer", print the value
    answersElement.forEach((element) => {
        if(element.checked) {
            answer = element.id;
        }
    });
    return answer;
}

// make sure radio is deselected between each question
function deselectAnswers(){
    answersElement.forEach((element) => {
        element.checked = false;
    })
}

// add event listener to button
submitBtn.addEventListener('click', () => {
    
    // iterate to next index each time button is clicked
    const answer = getSelection();
    console.log(answer);

    // if user provides an answer
    if(answer) {
        // check if answer is correct, increase score
        if(answer == quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            // show final score
            let totScore = (score/quizData.length)*100;
            quiz.innerHTML = `
                            <h2>Your score is ${totScore}%</h2>
                            <button onclick="location.reload()">Try Again</button>
                            `;
        }
    }else {
        alert("Please provide an answer!")
    }


})