let answerList = null;

fetch('https://random-word-api.herokuapp.com/word?number=150')
    .then(res => res.json())
    .then(res=>{
        answerList = res;
        todayAnswer = answerList[Math.floor(Math.random()*answerList.length)];
        document.getElementById('words').innerText = todayAnswer;
    }
)

setInterval(() => {
    let timeLeft = document.getElementById('timeLeft').innerText;
    let score = document.getElementById('getScore').innerText;
    timeLeft -= 1;
    document.getElementById('timeLeft').innerText = timeLeft;
    if (timeLeft < 0){
        var result = confirm("아쉽습니다! 당신의 최종 점수는 " + score + "점 입니다! 다시 도전하시겠습니까?")
        if (result) {
            document.getElementById('timeLeft').innerText = 4;
            document.getElementById('getScore').innerText = 0;
            todayAnswer = answerList[Math.floor(Math.random()*answerList.length)];
            document.getElementById('words').innerText = todayAnswer;
        } else if(!result){
            let bodyHtml = '<header><h1>G.O.D. of Typing!</h1></header><div id="EndBox"><p class="endings">Thank you for playing my game!</p><p>Do you want to play again?</p><button id="gameEnd" onclick="location.href=\'index.html\'">Click Here!</button><div>';
            document.querySelector('body').innerHTML = bodyHtml;
        }
        
    }
}, 1000);

function answerCheck(event){
    let answer = document.getElementById('words').innerText;
    let myAnswer = document.getElementById('answerBox').value;
    let score = document.getElementById('getScore').innerText;
    let score2 = Number(score);
    if (answer === myAnswer){
        score2 += 1;
        document.getElementById('getScore').innerText = score2;
        document.getElementById('answerBox').value = '';
        todayAnswer = answerList[Math.floor(Math.random()*answerList.length)];
        document.getElementById('words').innerText = todayAnswer;
        document.getElementById('timeLeft').innerText = 4;
    } else {
        document.getElementById('answerBox').value = '';
    }
    event.preventDefault();
}

