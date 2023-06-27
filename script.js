//グローバルスコープ ＆ 初期設定
let dice1;
let dice2;
var point1 = 251;
var point2 = 252;
var point3 = 253;
var point4 = 254;
document.getElementById("startbutton").style.display = "none"; //初期設定　スタートボタン消してる
document.getElementById("drawbutton").style.display = "none"; //初期設定　流局ボタン消してる
function takeout_reset() {
    document.getElementById("takeout_top").style.display = "none";
    document.getElementById("takeout_bottom").style.display = "none";
    document.getElementById("takeout_right").style.display = "none";
    document.getElementById("takeout_left").style.display = "none";
}

takeout_reset();

function test() {
    console.log("テストだよ");
}

function riichi(wind) { //立直処理
    switch (wind) {
        case '1':
            riichivoice();
            break;
        case '2':
            riichivoice();
            break;
        case '3':
            riichivoice();
            break;
        case '4':
            riichivoice();
            break;
    }
}

function dicerollbutton() {
    interval = setInterval(function () {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('diceresult1').innerHTML = dice1;
        document.getElementById('diceresult2').innerHTML = dice2;
    }, 100);

    stopTime = Math.floor(Math.random() * 1000) + 500;
    setTimeout(function () {
        clearInterval(interval);
        //   console.log(dice1,dice2);
        takeoutzone();
    }, stopTime);
}

function takeoutzone() {             //ここから取り出し処理
    takeout_reset();
    document.getElementById("startbutton").style.display = "block";
    let takeoutzone = dice1 + dice2;
    if (takeoutzone == 5 || takeoutzone == 9) {
        console.log("下");
        document.getElementById("takeout_bottom").style.display = "block";
    } else if (takeoutzone == 2 || takeoutzone == 6 || takeoutzone == 10) {
        console.log("右");
        document.getElementById("takeout_right").style.display = "block";
    } else if (takeoutzone == 3 || takeoutzone == 7 || takeoutzone == 11) {
        console.log("上");
        document.getElementById("takeout_top").style.display = "block";
    } else {
        console.log("左");
        document.getElementById("takeout_left").style.display = "block";
    }

}

function startbuttom() {
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("diceresult").style.display = "none";
    document.getElementById("takeoutzone").style.display = "none";
    document.getElementById("dicebutton").style.display = "none";
    document.getElementById("drawbutton").style.display = "block";
}


//                                           ーーーーーポイント処理ーーーーー

document.getElementById('point1').innerHTML = point1 + "oo"; //表示
document.getElementById('point2').innerHTML = point2 + "oo";
document.getElementById('point3').innerHTML = point3 + "oo";
document.getElementById('point4').innerHTML = point4 + "oo";

function win(wind) { //和了処理

}

//                                           ーーーーー流局処理ーーーーー
// document.getElementById("dicebutton").style.display ="none"; //とりま消す　一時的
function drawbutton() {
    document.getElementById("diceresult").style.display = "block";
    document.getElementById("takeoutzone").style.display = "block";
    document.getElementById("dicebutton").style.display = "block";
    document.getElementById("drawbutton").style.display = "none";
}

//                                          ーーー音声関係ーーー
function riichivoice() {
    // ランダムな数値を生成して、1から3までの整数を得る
    var randomIndex = Math.floor(Math.random() * 3) + 1;

    // audio要素を取得して、source属性にランダムな音声ファイルのパスを設定する
    var audioElement = document.getElementById('audio');
    audioElement.src = 'riichi' + randomIndex + '.wav';

    // 再生を開始する
    audioElement.play();
}