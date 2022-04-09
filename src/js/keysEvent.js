//@ts-check

export const keyEvents = () => {
  const $html = document.documentElement;
  const $container = document.getElementById("section2");
  const $fragment = document.createDocumentFragment();
  const $containerGame = document.createElement("div");
  const $ballGame = document.createElement("div");
  const $titleGame = document.createElement("h1");

  /* class css */
  $container.classList.add("key-event");
  $containerGame.classList.add("key-event__game");
  $ballGame.classList.add("key-event__ball");
  $titleGame.classList.add("key-event__title");
  /* class css */

  /* text */
  $titleGame.textContent = "Key Events";
  /* text */

  /* append */
  $container.append($titleGame);
  $containerGame.appendChild($ballGame);
  $fragment.appendChild($containerGame);
  $container.appendChild($fragment);
  /* append */

  /* Styles Property */
  const colorDark = getComputedStyle($html).getPropertyValue("--color-dark");
  const colorDarkLight =
    getComputedStyle($html).getPropertyValue("--color-dark-light");
  const colorPurple =
    getComputedStyle($html).getPropertyValue("--color-purple");
  const colorBrown = getComputedStyle($html).getPropertyValue("--color-brown");
  const colorYellow =
    getComputedStyle($html).getPropertyValue("--color-yellow");
  /* Styles Property */

  /* styles */
  $container.style.display = "flex";
  $container.style.flexDirection = "column";
  $container.style.justifyContent = "center";
  $container.style.alignItems = "center";
  $container.style.height = "100vh";
  $container.style.width = "100%";
  $container.style.backgroundColor = colorDark;

  $containerGame.style.display = "flex";
  $containerGame.style.flexDirection = "column";
  $containerGame.style.justifyContent = "center";
  $containerGame.style.alignItems = "center";
  $containerGame.style.width = "80vw";
  $containerGame.style.height = "50vh";
  $containerGame.style.background = colorBrown;
  $containerGame.style.color = "#fff";

  $ballGame.style.width = "10vw";
  $ballGame.style.height = "10vw";
  $ballGame.style.background = colorYellow;
  $ballGame.style.borderRadius = "50%";

  $titleGame.style.fontSize = "2rem";
  $titleGame.style.color = colorYellow;

  $ballGame.style.transition = "all 0.5s";
  /*   
   $ballGame.style.transform = 'translateY(10px)';
   $ballGame.style.transform = 'translateY(-10px)';
   $ballGame.style.transform = 'translateX(10px)';
   $ballGame.style.transform = 'translateX(-10px)'; */

  /* styles */

  /* Variables */

  let x = 1;
  let y = 1;

  /* Variables */

  let ball = $ballGame.getBoundingClientRect();

  let containerBall = $containerGame.getBoundingClientRect();

  /* Events */

  document.addEventListener("keydown", e => {
    const keyValue = e.keyCode;

    if (
      keyValue === 37 &&
      Math.floor($ballGame.getBoundingClientRect().left) >
        Math.floor($containerGame.getBoundingClientRect().left)
    ) {
      e.preventDefault();
      x--;
    }
    if (
      keyValue === 39 &&
      Math.floor($ballGame.getBoundingClientRect().right) <
        Math.floor($containerGame.getBoundingClientRect().right)
    ) {
      e.preventDefault();
      x++;
    }
    if (
      keyValue === 38 &&
      Math.floor($ballGame.getBoundingClientRect().top) >
        Math.floor($containerGame.getBoundingClientRect().top)
    ) {
      e.preventDefault();
      y--;
    }
    if (
      keyValue === 40 &&
      Math.floor($ballGame.getBoundingClientRect().bottom) <
        Math.floor($containerGame.getBoundingClientRect().bottom)
    ) {
      e.preventDefault();
      y++;
    }

    $ballGame.style.transform = `translate(${x * 7}px, ${y * 5}px)`;

  });

  /* Events */
};
