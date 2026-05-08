const fortunes =[
    "大吉💖素敵な出会いがあるかも！",
    "中吉　少し勇気を出すといいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　今日はとことんついてない"
];

//ボタンと表示エリアを取得
const button = document.getElementById("omikuji-bt");
const omikujiImg = document.getElementById("omikuji-img")
const result = document.getElementById("result");
const advice = document.getElementById("advice");

omikujiImg.innerHTML ="<img src='happy.png'>";
//ボタンがクリックされた時の処理
button.addEventListener("click", function () {
    //ランダムな数字を作る
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];
    
    //結果を表示
    result.textContent = fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
       result.style.color = "red";
       advice.textContent ="今日の主人公は君だ！今日は積極的に行動しよう";
       omikujiImg.innerHTML ="<img src='happy1.png'>";
    }else{
        if(resultText.includes("中吉")){
            result.style.color = "blue";
            advice.textContent ="";
            omikujiImg.innerHTML ="<img src='happy2.png'>";
        }else{
            if (resultText.includes("小吉")) {
                result.style.color = "green";
                advice.textContent ="";
                omikujiImg.innerHTML ="<img src='happy3.png'>";
            } else {
                if (resultText.includes("大凶")) {
                    result.style.color = "darkblue";
                    advice.textContent ="今日はわき役に徹しよう。無理なことをしないのはもちろん自分から動くのは避けよう";
                    omikujiImg.innerHTML ="<img src='happy5.png'>";
                } else {
                    result.style.color = "purple";
                    advice.textContent ="";
                    omikujiImg.innerHTML ="<img src='happy4.png'>";
                }
            }
        }
        
    }
    
    });