function clock() {
  const second = document.getElementById("sec");
  const minute = document.getElementById("min");
  const hour = document.getElementById("hr");
  const hourAlarm = document.getElementById("hour-alarm");
  const minuteAlarm = document.getElementById("minute-alarm");
  const secondAlarm = document.getElementById("second-alarm");
  // let day = new Date();
  let secondNow = new Date().getSeconds() * 6;
  let minuteNow = new Date().getMinutes() * 6;
  let hourNow = new Date().getHours() * 30;
  let miliSecond = new Date().getMilliseconds();
  let secondNowAlarm = new Date().getSeconds();
  let minuteNowAlarm = new Date().getMinutes();
  let hourNowAlarm = new Date().getHours();
  secondAlarm.innerHTML = secondNowAlarm;
  minuteAlarm.innerHTML = minuteNowAlarm + ":";
  hourAlarm.innerHTML = hourNowAlarm + ":";
  // let countTime = setInterval(clock, 1000);
  hour.style.transform = `rotateZ(${
    hourNow + minuteNow / 12 + secondNow / 720 + miliSecond / 120000
  }deg)`;
  minute.style.transform = `rotateZ(${
    minuteNow + secondNow / 60 + miliSecond / 10000
  }deg)`;
  second.style.transform = `rotateZ(${secondNow + (6 * miliSecond) / 1000}deg)`;

  hourAlarm.innerHTML = addZero(hourNowAlarm) + ":";
  minuteAlarm.innerHTML = addZero(minuteNowAlarm) + ":";
  secondAlarm.innerHTML = addZero(secondNowAlarm);
}
setInterval(clock, 1);

function addZero(inputNumber) {
  if (inputNumber < 10) {
    return "0" + inputNumber;
  } else {
    return inputNumber;
  }
}
