//


fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data))


function quiz(data) {
    // console.log(data)
    let questionNum = 0;
    var moneyTrack = 0;


    // var contentWrapper = document.getElementsByClassName("content-wrapper");
    let questionWrapper = document.getElementById("question");
    var answerWrapper = document.querySelector(".answers");
    var rewardDiv = document.getElementById("right-conent");
    let allQuestions = data.questions[questionNum].question;
    let allAnswers = data.questions[questionNum].answer//to je array
    let correctAns = data.questions[questionNum].correctAns;


    const [answer0, answer1, answer2, answer3] = [
        allAnswers[0],
        allAnswers[1],
        allAnswers[2],
        allAnswers[3]

    ];
    //prvo pitanje
    questionWrapper.innerText = data.questions[questionNum].question;


    for (let i = 0; i < allAnswers.length; i++) {
        answerWrapper.innerHTML = `<div class="ans"> ${answer0}</div><div class="ans"> ${answer1}</div>
    <div class="ans"> ${answer2}</div>
    <div class="ans"> ${answer3}</div>`
    }//iteracija kroz pitanja i stavlja ih u container

    // console.log(allQuestions);

    // event listener za svaki odgovor
    let ans = document.querySelectorAll(".ans");

    ans.forEach((ans, index) => {
        ans.addEventListener("click", () => checkCorrect(index, correctAns));

    });

    //akko uspijem povećati index onda ce correctAns++
    function checkCorrect(userAnswerIndex, index) {
        console.log(index);
        if (userAnswerIndex === index) {
            console.log("Točan odgovor!");
            questionNum++
            moneyTrack++

            correctAns = data.questions[questionNum].correctAns;//moram ga opet ovdje staviti da se ucita



            // ans[userAnswerIndex].style.backgroundColor = "green";
            questionWrapper.innerText = data.questions[questionNum].question;//opet ucitavam pitanja jer je questionNum++




            //  delay 
            /* setTimeout(() => {
              ans[userAnswerIndex].style.backgroundColor = "";
            }, 900);*/


        } else {
            console.log("Pogrešan odgovor!");
            // ans[userAnswerIndex].style.backgroundColor = "orange";



            /*// delay 
            setTimeout(() => {
                questionWrapper.innerText = data.questions[questionNum].question;
                ans.forEach(answer => {
                    // ans[userAnswerIndex].style.backgroundColor = "red";
                });
            }, 200);*/


        }
        console.log(questionNum, moneyTrack)
        // console.log("tocan odgovor je ", correctAns);
        //console.log("broj pitanja je ", questionNum);
        //console.log(correctAns[questionNum]);
        // console.log(ans[userAnswerIndex]);
        // console.log(userAnswerIndex);
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

