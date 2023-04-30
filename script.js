var point_ton = 25000;
var point_nan = 25000;
var point_sya = 25000;
var point_pei = 25000;
var people = 4;
var honba_count = 0;

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
}
function inputreset() {                                             //入力空にする 関数
    document.getElementById('number_input_ton').value = "";
    document.getElementById('number_input_nan').value = "";
    document.getElementById('number_input_sya').value = "";
    document.getElementById('number_input_pei').value = "";

    sumcheck();
}

function honba(status) {
    switch(status){
        case 'plus':
            document.getElementById('honba').innerHTML = honba_count++;
            break;
        case 'minus':
            document.getElementById('honba').innerHTML = honba_count--;
            break;
    }
    labelreload() 
}


function setVariableplus(jikaze) {                                   //ここは+ボタンを押したときの処理
    switch (jikaze) {
        case 'ton':
            numberInput = document.getElementById('number_input_ton');
            point_ton += parseInt(numberInput.value);
            break;
        case 'nan':
            numberInput = document.getElementById('number_input_nan');
            point_nan += parseInt(numberInput.value);
            break;
        case 'sya':
            numberInput = document.getElementById('number_input_sya');
            point_sya += parseInt(numberInput.value);
            break;
        case 'pei':
            numberInput = document.getElementById('number_input_pei');
            point_pei += parseInt(numberInput.value);
            break;
    }
    labelreload();                                                 //更新
    inputreset();                                                  //テキストボックスをリセット
}

function setVariableminus(jikaze) {                                //ここは-ボタンを押したときの処理
    switch (jikaze) {
        case 'ton':
            numberInput = document.getElementById('number_input_ton');
            point_ton -= parseInt(numberInput.value);
            break;
        case 'nan':
            numberInput = document.getElementById('number_input_nan');
            point_nan -= parseInt(numberInput.value);
            break;
        case 'sya':
            numberInput = document.getElementById('number_input_sya');
            point_sya -= parseInt(numberInput.value);
            break;
        case 'pei':
            numberInput = document.getElementById('number_input_pei');
            point_pei -= parseInt(numberInput.value);
            break;
    }
    labelreload();                                                      //ラベル表示更新
    inputreset();                                                       //テキストボックスをリセット
}

function riichi(jikaze) {
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
}

function riichirecovery() { //リー棒回収 
    document.getElementById('riichi_ton').innerHTML = '';
    document.getElementById('riichi_nan').innerHTML = '';
    document.getElementById('riichi_sya').innerHTML = '';
    document.getElementById('riichi_pei').innerHTML = ''; 
}

function riichiover(){ //リー棒持ち越し

}



labelreload(); //最初のラベル表示
sumcheck()