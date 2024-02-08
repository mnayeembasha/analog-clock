setInterval(() => {
    let date = new Date();
    let hourTime = date.getHours();
    let minuteTime = date.getMinutes();
    let secondTime = date.getSeconds();

    // console.log(hourTime,minuteTime,secondTime);
    let hourHandRotation = 30*hourTime + minuteTime/2;
    let minuteHandRotation = 6*minuteTime;
    let secondHandRotation = 6*secondTime;

    let hourHand = document.getElementById("hour");
    let minuteHand = document.getElementById("minute");
    let secondHand = document.getElementById("second");

    
    hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
    secondHand.style.transform = `rotate(${secondHandRotation}deg)`;

}, 1000);