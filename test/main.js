const numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestion = document.getElementById('number-of-all-questions');

const option1 = document.querySelector('.option1');
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');

let indexOfQuestion, 
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');

const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');
      

const questions = [
    {
    question: "Как в JavaScript вычислить % от числа?",
    options: [
        "Так сделать нельзя",
        "Оператор %",
        "Умножить колиество процентов и разделить на 100",
        "Вызвать метод FindPrecent()",
    ],
    rightAnswer: 2
    },
    {
        question: 'Результат выражение "13" + 7',
        options: [
            "20",
            "137",
            "undefined",
            "ERROR",
        ],
        rightAnswer: 1
        },
        {
            question: "На JavaScript нельзя писать: ",
            options: [
                "Игры",
                "Скрипты для сайтов ",
                "Дестопные приложения",
                "Плохо",
            ],
            rightAnswer: 3
            },
            {
                question: "Сколько параметров можно передать в функции?",
                options: [
                    "1",
                    "2",
                    "Сколько угодно",
                    "Ни одного",
                ],
                rightAnswer: 2
                },
                {
                    question: "Что выведет alert(typeof null)?",
                    options: [
                        "Cообщение 'object'",
                        "Ничего",
                        "Ошибку",
                        "null",
                    ],
                    rightAnswer: 0
                    },
                    {
                        question: "Что не язык программирования?",
                        options: [
                            "C++",
                            "React",
                            "С",
                            "Java",
                        ],
                        rightAnswer: 1
                        },
                        {
                            question: "Что такое ООП?",
                            options: [
                                "Объектно ориентированное программирование",
                                "Общество охраны природы",
                                "Орган опеки и попечительства",
                                "Особенность ориентированное позиционирование",
                            ],
                            rightAnswer: 0
                            },
];

 
numberOfAllQuestion.innerHTML = questions.length;

const load = ()=>{
question.innerHTML = questions[indexOfQuestion].question;
option1.innerHTML = questions[indexOfQuestion].options[0];
option2.innerHTML = questions[indexOfQuestion].options[1];
option3.innerHTML = questions[indexOfQuestion].options[2];
option4.innerHTML = questions[indexOfQuestion].options[3];

numberOfQuestion.innerHTML = indexOfPage + 1;
indexOfPage++;
};

let completedAnswers = [];

const randomQuestion=()=>{
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;
    if(indexOfPage == questions.length){
        quizOver();
    }else{
        if(completedAnswers.length>0){
            completedAnswers.forEach(item =>{
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
                load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const updateAnswerTraker = status =>{
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const checkAnswer = el =>{
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer ){
        el.target.classList.add('correct'); 
        updateAnswerTraker('correct');
        score++;
    }else{
        el.target.classList.add('wrong'); 
        updateAnswerTraker('wrong'); 
    }
    disabledOption();
};

const disabledOption = ()=>{
    optionElements.forEach(item=>{
        item.classList.add('disablet');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer ){
            item.classList.add('correct'); 
        }
    });
};

const enableOption = ()=>{
    optionElements.forEach(item=>{
        item.classList.remove('disablet','correct','wrong');
        });
};

const answerTraker=()=>{
    questions.forEach(()=>{
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    });
};

const validate=()=>{
    if(!optionElements[0].classList.contains('disablet')){
        alert('Вам нужно выбрать один из вариантов ответа');
    }else{
        randomQuestion();
        enableOption();
    }
};

for(option of optionElements){
    option.addEventListener('click',e => checkAnswer(e));
};

btnNext.addEventListener('click', ()=>{
    validate();
});

const quizOver = ()=>{
   document.querySelector('.quiz-over-modal').classList.add('active');
   correctAnswer.innerHTML = score;
   numberOfAllQuestion2.innerHTML = questions.length;
};

const tryAgain = ()=>{
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener('load', ()=>{
    randomQuestion();
    answerTraker();
})