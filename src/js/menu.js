export const toggleMenu = (closest ,hamburger, navMenu) => {
    document.addEventListener("click", (e) => {
      if (e.target.closest(closest)) {
        document.getElementById(hamburger).classList.toggle("rotated");
        document.getElementById(navMenu).classList.toggle("menu-translate");
      } else {
        document.getElementById(hamburger).classList.remove("rotated");
        document.getElementById(navMenu).classList.remove("menu-translate");
      }
    });
  };
  