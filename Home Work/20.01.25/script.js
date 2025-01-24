const quiz = document.getElementById('quiz');
const welcomeQuiz = document.getElementById('welcomeQuiz');
const timerAnimation = document.getElementById('timerAnimation');
const sectionEnd = document.getElementById('sectionEnd');
const scoreText = document.getElementById('scoreText');
const questionText = document.getElementById('questionText');
const buttons = document.querySelectorAll('.answerBtn');
const nextQuestion = document.getElementById('nextQuestion');
const restartBtn = document.getElementById('restartBtn');
const startQuiz = document.getElementById('startQuiz');
const skipButton = document.getElementById('skipButton');

let time = 10;
let i = 0;
let num = 0;
let isClicked = true;

restartBtn.addEventListener('click', () => {
    sectionEnd.style.display = 'none';
    welcomeQuiz.style.display = 'flex';
    startQuiz.style.display = 'flex';
    time = 10;
    i = 0;
    num = 0;
    isClicked = true;
    timerAnimation.classList.toggle('animated');
})

startQuiz.addEventListener('click', () => {
    quiz.style.display = 'flex';
    startQuiz.style.display = 'none';
    welcomeQuiz.style.display = 'none';
    timerAnimation.classList.toggle('animated');

    const interval = setInterval(() => {
        time--;
        if (time == 0) {
            skipQuestion()
        }

        
    }, 1000)
    

    async function fetchData() {
        i++;
        const apiUrl = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions';
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            questionText.textContent = data[i].question

            function checkAnswer(e) {

                if (isClicked) {
                    
                    skipButton.style.display = 'flex';

                    if (e.textContent == buttons[data[i].answer].textContent) {
                        buttons[data[i].answer].style.background = 'green';
                        num++;
                        isClicked = false;
                    } else {
                        buttons[data[i].answer].style.background = 'green';
                        e.style.background = 'red';
                        isClicked = false;
                    }
                } else {
                    
                }
    
            } 
            for (let b = 0; b < data[i].options.length; b++) {
                buttons[b].textContent = data[i].options[b];
            }

            buttons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    checkAnswer(e.target);
                })
            })

        } catch (error) {
            console.error('Kate' + error)
        }



    }

    fetchData()

    function skipQuestion() {
        fetchData()
        quiz.style.display = 'none';
        nextQuestion.style.display = 'flex';
        isClicked = true;
        skipButton.style.display = 'none';
        setTimeout(() => {
            nextQuestion.style.display = 'none';
            time = 10;
            quiz.style.display = 'flex';
        }, 3000);

        buttons.forEach(button => {
            button.style.background = '#006dc0';
        })

        if (i == 5) {
            clearInterval(interval);
            setTimeout(() => {
                nextQuestion.style.display = 'none';
                quiz.style.display = 'none';
                sectionEnd.style.display = 'flex';
                sectionEnd.style.flexDirection = 'column';
                scoreText.textContent = `Your score: ${num}`
            }, 10000)
        }

    }

    skipButton.addEventListener('click', () => {
        skipQuestion();
    })
});






