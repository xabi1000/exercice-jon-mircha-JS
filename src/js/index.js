import { toggleMenu } from "./menu.js";
import { clock } from "./clock.js";
import { keyEvents } from "./keysEvent.js";
import {countDown} from "./countDown.js";
import {scrollTop} from "./scroll.js";

window.addEventListener("DOMContentLoaded", (e) => {
  toggleMenu(".icon-menu", "hamburger", "navMenu");
  clock('clockWatchItem');
  keyEvents();
  countDown()
  scrollTop();
});
