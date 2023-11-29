// Fetchanje podataka iz JSON datoteke
fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data));
// ...
// ...
function quiz(data) {
    let questionNum = 0;
    let moneyTrack = 0;

    let questionWrapper = document.getElementById("question");
    let answerWrapper = document.querySelector(".answers");

    function setQuestionAndAnswers() {
        questionWrapper.innerText = data.questions[questionNum].question;
        let allAnswers = data.questions[questionNum].answer;

        answerWrapper.innerHTML = "";
        for (let i = 0; i < allAnswers.length; i++) {
            answerWrapper.innerHTML += `<div class="ans">${allAnswers[i]}</div>`;
        }

        let ans = document.querySelectorAll(".ans");
        ans.forEach((ans, index) => {
            ans.addEventListener("click", () => checkCorrect(index, data.questions[questionNum].correctAns));
        });
    }

    function checkCorrect(ans, index) {
        if (ans === index) {
            console.log("Točan odgovor!");
            questionNum++;
            moneyTrack++;

            let totalDivs = document.querySelectorAll('.right-content > div');
            console.log(totalDivs);
            let divToChangeColor = document.querySelector('.right-content > div:nth-child(' + (totalDivs - moneyTrack + 1) + ')');

            if (divToChangeColor) {
                divToChangeColor.style.backgroundColor = "orange";
            }

            // Postavi preostale divove na zadane boje
            for (let i = moneyTrack + 1; i <= totalDivs; i++) {
                let defaultDiv = document.querySelector('.right-content > div:nth-child(' + (totalDivs - i + 1) + ')');
                if (defaultDiv) {
                    defaultDiv.style.backgroundColor = "red"; // Postavi na zadanu boju (može biti prazno)
                }
            }

            if (questionNum < data.questions.length) {
                setQuestionAndAnswers();
            } else {
                console.log("Kviz završen!");
            }
        } else {
            console.log("Pogrešan odgovor!");
            // Dodaj ovdje željenu logiku za pogrešan odgovor
        }

        // console.log("Točan odgovor je ", index);
        // console.log("Broj pitanja je ", questionNum);
        //  console.log("MoneyTrack je ", moneyTrack);
    }

    setQuestionAndAnswers();
}
