function checkAnswer(e) {


    console.log(e);

};
checkAnswer();
/*
//na sve ansove postaviti listener i onda u if-u provjeriti dali je klasa elementa na koji je kliknuto true, ako je{ postaviti zelenu podlogu tom elementu};
answerDivs[j].addEventListener("click", function checkAnswer(e) {
    if (e.target.id == answerCorrect) {}})*/


//na sve ansove postaviti listener i onda u if-u provjeriti dali je klasa elementa na koji je kliknuto true, ako je{ postaviti zelenu podlogu tom elementu};

for (let j = 0; j < ans.length; j++)
    ans[j].addEventListener("click", function checkAnswer(e) {
        //  if (e.target.classList == "currentMoney") {
        console.log(`e.target.class=="currentMoney`);
        // }

    });

setTimeout(() => {
    document.getElementById("game-over").style.visibility = "visible";
}, 200);
setTimeout();