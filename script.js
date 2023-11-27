//

fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data))


function quiz(data) {
    // console.log(data)

    // var questionNum = 0;
    // var moneyTrack = 0;

    var contentWrapper = document.getElementsByClassName("content-wrapper");
    let questionWrapper = document.getElementById("question");
    var answerWrapper = document.getElementsByClassName("answers");

    var rewardDiv = document.getElementById("right-conent");


    questionWrapper.innerText = data.questions[0].question;//ubacili smo pitanje iz question.json u question div

}





