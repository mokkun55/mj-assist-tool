//グローバルスコープ ＆ 初期設定
let dice1;
let dice2;
var point1 = 251;
var point2 = 252;
var point3 = 253;
var point4 = 254;

var cp1, cp2, cp3, cp4;

var startjudgement = 0;
var start_house = 0;
var start_position = 0;

document.getElementById("startbutton").style.display = "none"; //初期設定　スタートボタン消してる
document.getElementById("drawbutton").style.display = "none"; //初期設定　流局ボタン消してる
document.getElementById("connpass").style.display = "none"; //初期設定　流局ボタン消してる

function takeout_reset() {
    document.getElementById("takeout_top").style.display = "none";
    document.getElementById("takeout_bottom").style.display = "none";
    document.getElementById("takeout_right").style.display = "none";
    document.getElementById("takeout_left").style.display = "none";
}

function winddisplay(){
    document.getElementById('cp1').innerHTML = cp1 ; //表示
    document.getElementById('cp2').innerHTML = cp2 ;
    document.getElementById('cp3').innerHTML = cp3 ;
    document.getElementById('cp4').innerHTML = cp4 ;
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
    startjudgement += 1; //１回目は起家ぎめ
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
    var start_position;
    
    let takeoutzone = dice1 + dice2;
    if (takeoutzone == 5 || takeoutzone == 9) {
        console.log("下");
        start_start_position = 3;
        document.getElementById("takeout_bottom").style.display = "block";
    } else if (takeoutzone == 2 || takeoutzone == 6 || takeoutzone == 10) {
        console.log("右");
        start_position = 4;
        document.getElementById("takeout_right").style.display = "block";
    } else if (takeoutzone == 3 || takeoutzone == 7 || takeoutzone == 11) {
        console.log("上");
        start_position = 1;
        document.getElementById("takeout_top").style.display = "block";
    } else {
        console.log("左");
        start_position = 2;
        document.getElementById("takeout_left").style.display = "block";
    }

    if (startjudgement == 2){       //最初の一回しかスタート表示しない（🎲２回振ったとき
        document.getElementById("startbutton").style.display = "block";
        
        //この数字で起家と席ぎめ
        
        if (start_house == 1) {
            cp1 = "東";
            cp2 = "南";
            cp3 = "西";
            cp4 = "北";
            document.getElementById("cp1").style.color = "red";
        } else if (start_house == 2) {
            cp1 = "北";
            cp2 = "東";
            cp3 = "南";
            cp4 = "西";
            document.getElementById("cp2").style.color = "red";
        } else if (start_house == 3) {
            cp1 = "西";
            cp2 = "北";
            cp3 = "東";
            cp4 = "南";
            document.getElementById("cp3").style.color = "red";
        } else if (start_house == 4) {
            cp1 = "南";
            cp2 = "西";
            cp3 = "北";
            cp4 = "東";
            document.getElementById("cp4").style.color = "red";
        }
        winddisplay();
    } else if (startjudgement == 0) {
        //🎲を振って親を決めてください
        
    } else if (startjudgement == 1) {
        //🎲を振って取り出し位置を決めてください
        start_house = start_position; //起家代入
        console.log(start_house);
    }
    
}

function startbuttom() {
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("diceresult").style.display = "none";
    document.getElementById("takeoutzone").style.display = "none";
    document.getElementById("dicebutton").style.display = "none";
    document.getElementById("drawbutton").style.display = "block";
    document.getElementById("connpass").style.display = "block";
}


//                                           ーーーーーポイント処理ーーーーー

document.getElementById('point1').innerHTML = point1 + "oo"; //表示
document.getElementById('point2').innerHTML = point2 + "oo";
document.getElementById('point3').innerHTML = point3 + "oo";
document.getElementById('point4').innerHTML = point4 + "oo";

function win(wind) { //和了処理

}
//                                           ーーーーーコンパスーーーーー
// document.getElementById('cp1').innerHTML = cp1 ; //表示
// document.getElementById('cp2').innerHTML = cp2 ;
// document.getElementById('cp3').innerHTML = cp3 ;
// document.getElementById('cp4').innerHTML = cp4 ;

//                                           ーーーーー流局処理ーーーーー
function drawbutton() {
    document.getElementById("diceresult").style.display = "block";
    document.getElementById("takeoutzone").style.display = "block";
    document.getElementById("dicebutton").style.display = "block";
    document.getElementById("drawbutton").style.display = "none";
    document.getElementById("connpass").style.display = "none";
    takeout_reset();
    // dicerollbutton();  これは処理後　わんちゃん手動でもOK

    //流局処理書く　立直棒供託、聴牌者選択、本場どうするか＋１？
}

//                                           ーーーーー終了処理ーーーーー

//startjudgementを０にする



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

function startvoice() {
    
}