const url = 'https://api.open-meteo.com/v1/forecast?latitude=34.62&longitude=136.08&daily=weathercode&timezone=Asia%2FTokyo' //constとは変数の中身の書き換えが禁止されている変数 絶対中身は動かない
fetch(url)
.then(Response => Response.json())
.then(jsonDeta =>{
    weathercode = jsonDeta.daily.weathercode[0];//jsondetaのdailyのwethercodeの０行目を変数に代入
    weathercodetomorrow = jsonDeta.daily.weathercode[2];
     
    //console.log(jsonDeta.); jsondetaをコンソールに表示するだけ
    
    //ここにweathercondeが○だったとき■と表示するコード書く
    if (weathercode == 0){
        document.getElementById("weather").innerHTML = "晴天";
    } else if (weathercode >= 1 && weathercode <= 3){
        document.getElementById("weather").innerHTML = "晴";
    } else if (weathercode >= 61 && weathercode <= 65){
        document.getElementById("weather").innerHTML = "雨";
    } else {
        document.getElementById("weather").innerHTML = "不明なコードです";
    }
    if (weathercodetomorrow == 0){
        document.getElementById("weathertomorrow").innerHTML = "晴天";
    } else if (weathercodetomorrow >= 1 && weathercodetomorrow <= 3){
        document.getElementById("weathertomorrow").innerHTML = "晴";
    } else if (weathercodetomorrow >= 61 && weathercodetomorrow <= 65){
        document.getElementById("weathertomorrow").innerHTML = "雨";
    } else if (weathercodetomorrow >= 51 && weathercodetomorrow <= 55){
        document.getElementById("weathertomorrow").innerHTML = "小雨";
    }   else {
        document.getElementById("weathertomorrow").innerHTML = "不明なコードです";
    }

    console.log(weathercode);
    console.log(weathercodetomorrow);
})
.catch(error => {
    console.error(error);
 })