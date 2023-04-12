import { animateRotate, animateFade, applyDelay, animateCurtain, animateOverFlow, animateNudge, animateGrow } from "./animation.js";

window.addEventListener('load', (event)=>{
    event.preventDefault();
    animateCurtain('.home');
    setTimeout(()=>{animateOverFlow('.home-content')}, 700);
    setTimeout(()=>{animateNudge('.home-container'); animateNudge('.home-image-main-container');
}, 100);
    setTimeout(()=>{animateRotate('.home-content')}, 200);
    setTimeout(()=>{animateGrow('.home-content')}, 900);    
    setTimeout(()=>{animateFade('.home-content')}, 900);
    setTimeout(()=>{animateNudge('.home-image-main-container')}, 800);
    applyDelay('.home-keywords', 'h1', 'normal', .2);
    
})
