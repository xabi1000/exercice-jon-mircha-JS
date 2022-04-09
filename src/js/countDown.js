export const countDown = () => {

  /* *************************** DOM ELEMENTS ***************************/
  
  const $year = document.getElementById("year");
  const $month = document.getElementById("month");
  const $day = document.getElementById("day");
  const $hour = document.getElementById("hour");
  const $minute = document.getElementById("minute");
  const $second = document.getElementById("second");
  const $btnCountDown = document.getElementById("btnCountDown");
  const $timeRemaining = document.querySelector(".count-down__time-remaining")

  /* *************************** VARIABLES ***************************/
  
  let year,
    month,
    day,
    hour,
    minute,
    second;  
  
  /* *************************** FUNCTIONS ***************************/

  const desiredDateInMilliseconds = date => new Date(date).getTime();

  const setYear = timeRemaining => Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 365));
  const setMonth = timeRemaining => Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const setDay = timeRemaining => Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365))  / (1000 * 60 * 60 * 24));
  const setHour = timeRemaining => Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const setMinute = timeRemaining => Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const setSecond = timeRemaining => Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  /* ***************************EVENT LISTENER***************************/
  
  $btnCountDown.addEventListener("click", e => {
    
    const interval = setInterval(() => {
    const today = new Date().getTime();
    const timeRemaining = desiredDateInMilliseconds(`${$year.value},${$month.value},${$day.value}`) - today;
    year = (`0${setYear(timeRemaining)}`).slice(-2);
    month = (`0${setMonth(timeRemaining)}`).slice(-2);
    day = (`0${setDay(timeRemaining)}`).slice(-2);
    hour = (`0${setHour(timeRemaining)}`).slice(-2);
    minute = (`0${setMinute(timeRemaining)}`).slice(-2);
    second = (`0${setSecond(timeRemaining)}`).slice(-2);
    $timeRemaining.textContent = `${year} : ${month} : ${day} : ${hour} : ${minute} : ${second}`;
    if (timeRemaining < 0) {
      clearInterval(interval);
      $timeRemaining.textContent = "EXPIRED";
    }
     1000 });
  });
}