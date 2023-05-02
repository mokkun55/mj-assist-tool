var point_ton = 25000;
var point_nan = 25000;
var point_sya = 25000;
var point_pei = 25000;
var people = 4;
var honba_count = 0;
var over_point = 0;
var clickCount_ton = 0;
var clickCount_nan = 0;
var clickCount_sya = 0;
var clickCount_pei = 0;

function sumcheck() {
    var sum = point_ton + point_nan + point_sya + point_pei;
    if (sum == 100000) {
        document.getElementById('sumcheck').innerHTML = 'CHECK';
    } else {
        document.getElementById('sumcheck').innerHTML = ' ';
    }
}


function labelreload() { //更新
    document.getElementById('point_ton').innerHTML = point_ton;
    document.getElementById('point_nan').innerHTML = point_nan;
    document.getElementById('point_sya').innerHTML = point_sya;
    document.getElementById('point_pei').innerHTML = point_pei;
    document.getElementById('honba').innerHTML = honba_count + "本場 = +" + (honba_count * 300) + "点  ";
    document.getElementById('overpoint').innerHTML = over_point + "点 持ち越し"
}
function inputreset() {                                             //入力空にする 関数
    document.getElementById('number_input_ton').value = "";
    document.getElementById('number_input_nan').value = "";
    document.getElementById('number_input_sya').value = "";
    document.getElementById('number_input_pei').value = "";

    sumcheck();
}

function house(jikaze) {
    //親表示
}

function honba(status) {                                            //本場表示
    switch (status) {
        case 'plus':
            document.getElementById('honba').innerHTML = honba_count++;
            break;
        case 'minus':
            document.getElementById('honba').innerHTML = honba_count--;
            break;
    }
    labelreload()
}

function overpoint(status) {                                                  //持ち越し計算
    switch (status) {
        case 'plus':
            over_point = over_point + 1000; //IDoverpointを読み込み １タス
            break;
        case 'minus':
            over_point = over_point - 1000;
            break;
    }
    labelreload();
}

function sendpointbutton(jikaze){ //送信ボタン
    switch(jikaze){
        case 'ton':
            document.getElementById("sendbutton_ton").style.display = "inline-block";
            document.getElementById("riichibutton_ton").style.display = "none";
            sendpointinput = document.getElementById('number_input_ton');
            point_ton -= parseInt(sendpointinput.value) * 100;
            break;
    }
}

function sendpoint(jikaze){ //ポイント処理
    switch(jikaze){
        case 'ton':
            //点数処理
            
            break;
        case 'nan':
            document.getElementById("sendbutton_ton").style.display = "none";
            document.getElementById("riichibutton_ton").style.display = "inline-block";
            point_nan += parseInt(sendpointinput.value) * 100;

            labelreload();
            inputreset();
            sumcheck();

            break;
        case 'sya':
            document.getElementById("sendbutton_ton").style.display = "none";
            document.getElementById("riichibutton_ton").style.display = "inline-block";
            labelreload();
            inputreset();
            break;
        case 'pei':
            document.getElementById("sendbutton_ton").style.display = "none";
            document.getElementById("riichibutton_ton").style.display = "inline-block";
            labelreload();
            inputreset();
            break;
    }
}




function setVariableplus(jikaze) {                                   //ここは+ボタンを押したときの処理 入力した値ｘ１００を代入してる
    switch (jikaze) {
        case 'ton':
            numberInput = document.getElementById('number_input_ton');
            point_ton += parseInt(numberInput.value) * 100;
            break;
        case 'nan':
            numberInput = document.getElementById('number_input_nan');
            point_nan += parseInt(numberInput.value) * 100;
            break;
        case 'sya':
            numberInput = document.getElementById('number_input_sya');
            point_sya += parseInt(numberInput.value) * 100;
            break;
        case 'pei':
            numberInput = document.getElementById('number_input_pei');
            point_pei += parseInt(numberInput.value) * 100;
            break;
    }
    labelreload();                                                 //更新
    inputreset();                                                  //テキストボックスをリセット
}


function setVariableminus(jikaze) {                                //ここは-ボタンを押したときの処理
    switch (jikaze) {
        case 'ton':
            numberInput = document.getElementById('number_input_ton');
            point_ton -= parseInt(numberInput.value) * 100;
            break;
        case 'nan':
            numberInput = document.getElementById('number_input_nan');
            point_nan -= parseInt(numberInput.value) * 100;
            break;
        case 'sya':
            numberInput = document.getElementById('number_input_sya');
            point_sya -= parseInt(numberInput.value) * 100;
            break;
        case 'pei':
            numberInput = document.getElementById('number_input_pei');
            point_pei -= parseInt(numberInput.value) * 100;
            break;
    }
    labelreload();                                                      //ラベル表示更新
    inputreset();                                                       //テキストボックスをリセット
}

function riichi(jikaze) {                                               //立直ボタン処理
    riichitext = '立直'
    switch (jikaze) {
        case 'ton':
            point_ton -= 1000;
            document.getElementById('riichi_ton').innerHTML = '立直';
            break;
        case 'nan':
            point_nan -= 1000;
            document.getElementById('riichi_nan').innerHTML = '立直';
            break;
        case 'sya':
            point_sya -= 1000;
            document.getElementById('riichi_sya').innerHTML = '立直';
            break;
        case 'pei':
            point_pei -= 1000;
            document.getElementById('riichi_pei').innerHTML = '立直';
            break;
    }
    labelreload();
    sumcheck();
}

function resetbuttoncolor(){
    tonButton.style.backgroundColor = "";
    tonButton.style.color = "";
    nanButton.style.backgroundColor = "";
    nanButton.style.color = "";
    syaButton.style.backgroundColor = "";
    syaButton.style.color = "";
    peiButton.style.backgroundColor = "";
    peiButton.style.color = "";
}

function riichirecovery() { //リー棒回収 
    resetbuttoncolor();

    document.getElementById('riichi_ton').innerHTML = ''; //立直 消す
    document.getElementById('riichi_nan').innerHTML = '';
    document.getElementById('riichi_sya').innerHTML = '';
    document.getElementById('riichi_pei').innerHTML = '';
}

function select_riichirecovery(jikaze) {
    switch (jikaze) {
        case 'ton':
            clickCount_ton++;
            if (clickCount_ton % 2 == 1) {
                //ぼたん暗くする
                tonButton.style.backgroundColor = "#555";
                tonButton.style.color = "#fff"; //テキスをを白く
                var riichiselect_ton = true;
            } else {
                //ボタン明るく
                tonButton.style.backgroundColor = "";
                tonButton.style.color = "";
                var riichiselect_ton = false;
            }
            break;
        case 'nan':
            clickCount_nan++;
            if (clickCount_nan % 2 == 1) {
                //ぼたん暗くする
                nanButton.style.backgroundColor = "#555";
                nanButton.style.color = "#fff"; //テキスをを白く
                var riichiselect_nan = true;
            } else {
                //ボタン明るく
                nanButton.style.backgroundColor = "";
                nanButton.style.color = "";
                var riichiselect_nan = false;
            }
            break;
        case 'sya':
            clickCount_sya++;
            if (clickCount_sya % 2 == 1) {
                //ぼたん暗くする
                syaButton.style.backgroundColor = "#555";
                syaButton.style.color = "#fff"; //テキスをを白く
                var riichiselect_sya = true;
            } else {
                //ボタン明るく
                syaButton.style.backgroundColor = "";
                syaButton.style.color = "";
                var riichiselect_sya = false;
            }
            break;
        case 'pei':
            clickCount_pei++;
            if (clickCount_pei % 2 == 1) {
                //ぼたん暗くする
                peiButton.style.backgroundColor = "#555";
                peiButton.style.color = "#fff"; //テキスをを白く
                var riichiselect_pei = true;
            } else {
                //ボタン明るく
                peiButton.style.backgroundColor = "";
                peiButton.style.color = "";
                var riichiselect_pei = false;
            }
            break;

    }
}

function riichiover() { //リー棒持ち越し
    resetbuttoncolor();
}






labelreload(); //最初のラベル表示
sumcheck()
