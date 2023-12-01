fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data));

function quiz(data) {
    let questionNum = 0;
    let moneyTrack = 0;

    let questionWrapper = document.getElementById("question");
    let answerWrapper = document.querySelector(".answers");
    let rewardDiv = document.getElementById("right-content");

    let ans = document.querySelectorAll(".ans");

    function updateMoneyClass() {
        // Ukloni klasu 'currentMoney' sa svih elemenata
        moneyArr.forEach((moneyElem) => {
            moneyElem.classList.remove("currentMoney");
        });

        // Dodaj klasu 'currentMoney' samo trenutnom elementu
        moneyArr[questionNum].classList.add("currentMoney");
    }

    function renderQuestion() {
        questionWrapper.innerText = data.questions[questionNum].question;

        let allAnswers = data.questions[questionNum].answer;
        const [answer0, answer1, answer2, answer3] = allAnswers;

        answerWrapper.innerHTML = `
            <div class="ans">${answer0}</div>
            <div class="ans">${answer1}</div>
            <div class="ans">${answer2}</div>
            <div class="ans">${answer3}</div>
        `;

        // Ponovno postavljamo event listenere nakon ažuriranja pitanja
        ans = document.querySelectorAll(".ans");
        ans.forEach((ans, index) => {
            ans.addEventListener("click", () => checkCorrect(index, data.questions[questionNum].correctAns));
        });
    }

    ans.forEach((ans, index) => {
        ans.addEventListener("click", () => checkCorrect(index, data.questions[questionNum].correctAns));
    });

    function checkCorrect(ans, index) {
        console.log("index je: ", index);
        if (ans === index) {
            console.log("Točan odgovor!");
            questionNum++;
            moneyTrack++;
            updateMoneyClass();
            renderQuestion();
        } else {
            console.log("Pogrešan odgovor!");
            // Dodaj logiku za pogrešan odgovor ako je potrebno
        }
    }

    // Inicijalni poziv funkcija za prikaz prvog pitanja i postavljanje event listenera
    renderQuestion();
    updateMoneyClass();
}
