//グローバルスコープ ＆ 初期設定
let dice1;
let dice2;
let dice_value = 0;
var point1 = 250; //持ち点
var point2 = 250; //左
var point3 = 250;
var point4 = 250;

var cp1, cp2, cp3, cp4;

var house;

var startjudgement = 0;
// var start_house = 0;
var start_position = 0;

var now_wind = "東";
var num_wind = 1;

var honba = 0;
var offer_now = 0;


document.getElementById("startbutton").style.display = "none"; //初期設定　スタートボタン消してる
document.getElementById("drawbutton").style.display = "none"; //初期設定　流局ボタン消してる
document.getElementById("connpass").style.display = "none"; //初期設定　流局ボタン消してる
// document.getElementById("rii_bou").style.display = "none"; //初期設定　流局ボタン消してる
document.getElementById("ALLriichi_button").style.display = "none";


// スタート表示

function takeout_reset() {
    document.getElementById("takeout_up").style.display = "none";
    document.getElementById("takeout_down").style.display = "none";
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
            document.getElementById("rii_bou1").style.display = "block";
            point1 -= 1;
            break;
        case '2':
            riichivoice();
            document.getElementById("rii_bou2").style.display = "block";
            point2 -= 1;
            break;
        case '3':
            riichivoice();
            document.getElementById("rii_bou3").style.display = "block";
            point3 -= 1;
            break;
        case '4':
            riichivoice();
            document.getElementById("rii_bou4").style.display = "block";
            point4 -= 1;
            break;
    }
    // console.log(point1);
    pointdisplay();
}

//サイコロ処理NEW
function dicerollbutton() {
    if (typeof interval !== 'undefined') {
        // 既に実行中の場合、何もせずに終了
        return;
    }

    interval = setInterval(function () {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('diceresult1').innerHTML = dice1;
        document.getElementById('diceresult2').innerHTML = dice2;
    }, 100);

    stopTime = Math.floor(Math.random() * 1000) + 500;
    setTimeout(function () {
        clearInterval(interval);
        console.log(dice1,dice2);
        interval = undefined; // intervalをクリアしたらundefindに設定して再度ボタンが押せるようにする

        if(dice_value == 0){
            //-------------------------------------------------------------------席ぎめ
            let start_house = dice1 + dice2;

            if (start_house == 5 || start_house == 9) {
                cp1 = "東";
                cp2 = "南";
                cp3 = "西";
                cp4 = "北";
                house = 1;
                document.getElementById("cp1").style.color = "red";
                document.getElementById("takeout_up").style.display = "block";
            } else if (start_house == 2 || start_house == 6 || start_house == 10) {
                cp1 = "北";
                cp2 = "東";
                cp3 = "南";
                cp4 = "西";
                house = 2;
                document.getElementById("cp2").style.color = "red";
                document.getElementById("takeout_right").style.display = "block";
            } else if (start_house == 3 || start_house == 7 || start_house == 11) {
                cp1 = "西";
                cp2 = "北";
                cp3 = "東";
                cp4 = "南";
                house = 3;
                document.getElementById("cp3").style.color = "red";
                document.getElementById("takeout_down").style.display = "block";
            } else if (start_house == 4 || start_house == 8 || start_house == 12) {
                cp1 = "南";
                cp2 = "西";
                cp3 = "北";
                cp4 = "東";
                house = 4;
                document.getElementById("cp4").style.color = "red";
                document.getElementById("takeout_left").style.display = "block";
            }
            winddisplay();
            your_house_voice();

        } else if (dice_value == 1){
            // document.getElementById("takeoutzone").style.display="none";
            takeout_reset();
            //---------------------------------------------------------------取り出しぎめ
            var takeout = dice1 + dice2 + house;
            if (takeout == 5 || takeout == 9) {
                console.log("↑");
                document.getElementById("takeout_up").style.display = "block";
            } else if (takeout == 2 || takeout == 6 || takeout == 10) {
                console.log("→");
                document.getElementById("takeout_right").style.display = "block";
            } else if (takeout == 3 || takeout == 7 || takeout == 11) {
                console.log("↓");
                document.getElementById("takeout_down").style.display = "block";
            } else if (takeout == 4 || takeout == 8 || takeout == 12) {
                console.log("←");
                document.getElementById("takeout_left").style.display = "block";
            }

            takeout_voice();
            document.getElementById("startbutton").style.display = "block"; //startB表示
        } else {
            //２局目以降の処理
        }
        dice_value ++;
    }, stopTime);
}



function startbuttom() {
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("diceresult").style.display = "none";
    document.getElementById("takeoutzone").style.display = "none";
    document.getElementById("ALLdicebutton").style.display = "none";
    document.getElementById("drawbutton").style.display = "flex";
    document.getElementById("connpass").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("ALLriichi_button").style.display = "block";
    document.getElementById("header_info").style.display = "flex";
    header_info(); //ヘッダー更新
    start_voice();
    pointdisplay();
    dice_value = 0;
}


//                                           ーーーーーポイント処理ーーーーー
function pointdisplay(){
    document.getElementById('point1').innerHTML = point1 + "oo"; //表示
    document.getElementById('point2').innerHTML = point2 + "oo";
    document.getElementById('point3').innerHTML = point3 + "oo";
    document.getElementById('point4').innerHTML = point4 + "oo";
}


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


function header_info(){
    document.getElementById('round').innerHTML = now_wind + num_wind + "局";
    document.getElementById('honba').innerHTML = honba + "本場";
    document.getElementById('offerPoint').innerHTML = "供託"+ offer_now +"本";
}
//                                           ーーーーー終了処理ーーーーー

//startjudgementを０にする



//                                          ーーー音声関係ーーー
function riichivoice() {
    // ランダムな数値を生成して、1から3までの整数を得る
    var randomIndex = Math.floor(Math.random() * 3) + 1;

    // audio要素を取得して、source属性にランダムな音声ファイルのパスを設定する
    var riichi_audio = document.getElementById('audio');
    riichi_audio.src = 'riichi' + randomIndex + '.wav';

    // 再生を開始する
    riichi_audio.play();
}

function your_house_voice() {
    var your_house_audio = new Audio('your_house.wav');
    your_house_audio.play();
}

function takeout_voice(){
    var takeout_voice = new Audio('takeout.wav');
    takeout_voice.play();
}

function start_voice(){
    var yoro_voice = new Audio('yoro.wav');
    yoro_voice.play();
}