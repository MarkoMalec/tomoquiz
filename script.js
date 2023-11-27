//

fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data))


function quiz(data) {
    // console.log(data)

    let questionNum = 0;
    // var moneyTrack = 0;

    var contentWrapper = document.getElementsByClassName("content-wrapper");
    let questionWrapper = document.getElementById("question");
    var answerWrapper = document.getElementsByClassName("answers")[0];
    var rewardDiv = document.getElementById("right-conent");
    let allAnswers = data.questions[0].answer//to je array
    let correctAns = data.questions[0].correctAns;

    const [answer0, answer1, answer2, answer3] = [
        allAnswers[0],
        allAnswers[1],
        allAnswers[2],
        allAnswers[3]

    ];


    questionWrapper.innerText = data.questions[questionNum].question;//ubacili smo pitanje iz question.json u question div

    for (let i = 0; i < allAnswers.length; i++) {
        answerWrapper.innerHTML = `<div class="ans"> ${answer0}</div><div class="ans"> ${answer1}</div>
    <div class="ans"> ${answer2}</div>
    <div class="ans"> ${answer3}</div>`
    }//loop kroz pitanja i sprema ih u container


}