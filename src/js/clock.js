export const clock = domElement => {
  const $parentElem = document.getElementById(domElement);
  const fragment = document.createDocumentFragment();
  const $textDate = document.createElement("p");
  const $textHours = document.createElement("p");
  const alarm = document.createElement("audio");
  const btn = document.querySelectorAll(".clock__btn");
  
  let SeeSecondsIncrementing;

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("es-ES", options);

  fragment.appendChild($textDate);
  fragment.appendChild($textHours);
  fragment.appendChild(alarm);
  $parentElem.appendChild(fragment);
  
  /* ********************************* FUNCTIONS  *********************************************** */

  const getHoursMinutesSeconds = () => {
    let theDate = new Date();
    let $hour = theDate.getHours();
    let $minute = theDate.getMinutes();
    let $second = theDate.getSeconds();
    if ($hour < 10) $hour = "0" + $hour;
    if ($minute < 10) $minute = "0" + $minute;
    if ($second < 10) $second = "0" + $second;
    return ` ${$hour} : ${$minute} : ${$second} `;
  };
  
  const enableBTN = (ele) => {
    ele.disabled = false;
    ele.classList.remove("clock__btn--disabled");
  };
  const disableBTN = (ele) => {
    ele.disabled = true;
    ele.classList.add("clock__btn--disabled");
  };

/* ********************************* FUNCTIONS  *********************************************** */

  document.addEventListener("click", e => {

    if (e.target === btn[0]) {
      $textDate.textContent = date;
      SeeSecondsIncrementing = setInterval(() => $textHours.textContent = getHoursMinutesSeconds(), 1000);
      document.getElementById("clockWatch").classList.add("scale1");
      disableBTN(btn[0]);
    }

    if (e.target === btn[1]) {
      clearInterval(SeeSecondsIncrementing);
      document.getElementById("clockWatch").classList.remove("scale1");
      enableBTN(btn[0]);
    }
    /*  ***************ALARM *************** */

    if (e.target === btn[2]) {
      alarm.setAttribute("src", "/src/assets/audio/alarma/Timer-clicking-sound.mp3");
      alarm.play();
      disableBTN(btn[2]);
    }

    if (e.target === btn[3]) {
      alarm.pause();
      enableBTN(btn[2]);
    }
  });
};
