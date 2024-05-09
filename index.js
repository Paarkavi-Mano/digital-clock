let hours = document.getElementById("hours");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

setInterval(()=>{
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours() ;
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0": "") + currentTime.getSeconds();

},1000);

