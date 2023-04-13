import { hide, rotate } from "./animation.js";
function toggleNav(){
    rotate('.nav-menu', 'li', '15deg', .2);
    hide('.nav-menu', 'li');
}
window.toggleNav = toggleNav;