//


fetch("question.json")
    .then(response => response.json())
    .then(data => quiz(data))


function quiz(data) {
    // console.log(data)
    let questionNum = 0;
    let moneyTrack = -1;



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

    //na ans pozivamo forEach funkciju te arrow funkciji(koja se nalazi unutar forEacha()) dodjeljujemo 2 parametra ans i index. Prvi parametar je ans koji nam daje elemente  a drugi index koji nam daje inex (broj) svakog elementa
    ans.forEach((ans, index) => {
        ans.addEventListener("click", () => checkCorrect(index, correctAns));//checkCorrect ima parametre index (koji smo dobili od forEach() i correctAns koji se nalazi unutar json-A )




        const money = document.getElementsByTagName("p");
        moneyArr = [...money].reverse();
        // console.log(moneyArr);

        /* for (m = 0; m < moneyArr.length; m++) {
             moneyArr[moneyTrack].classList.add("currentMoney");
         }*/





    });

    //akko uspijem povećati index onda ce correctAns++
    function checkCorrect(ans, index) {
        console.log("index je: ", correctAns);
        if (ans === index) {
            console.log("Točan odgovor!");
            questionNum++
            moneyTrack++


            const money = document.getElementsByTagName("p");
            moneyArr = [...money].reverse();
            console.log("ovo je money array: ", moneyArr);

            for (m = 0; m < moneyArr.length; m++) {
                moneyArr[moneyTrack].classList.add("currentMoney");


                /*///pokusaj brisanja klase
                                if (m = moneyArr[moneyTrack] - 1) {
                                    moneyArr[questionNum].classList.remove("currentMoney")
                                    console.log("class is removed");
                                }*/

            }

            //reload
            correctAns = data.questions[questionNum].correctAns;//moram ga opet ovdje staviti da se ucita

            // correctAns.style.backgroundColor = "green";
            questionWrapper.innerText = data.questions[questionNum].question;//opet ucitavam pitanja jer je questionNum++


            //  delay 
            /*  setTimeout(() => {
                  ans[userAnswerIndex].style.backgroundColor = "";
              }, 900);*/


        } else {

            console.log("Pogrešan odgovor!", moneyArr[questionNum]);
            moneyArr[questionNum].classList.add("false");
            //game-over visible

            document.getElementById("game-over").innerText = "you are quite stupid #elStupido"//you have won value from <p>


            setTimeout(() => {
                document.getElementById("game-over").style.visibility = "visible";
            }, 200);
            setTimeout();








            /*// delay 
            setTimeout(() => {
                questionWrapper.innerText = data.questions[questionNum].question;
                ans.forEach(answer => {
                    // ans[userAnswerIndex].style.backgroundColor = "red";
                });
            }, 200);*/


        }
        //  console.log(questionNum, moneyTrack)



    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

