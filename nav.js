
import {applyDelay, animateFade, animateMoveIn, animateMoveOut, animateRotate} from './animation.js';

function imgBackgroundChange(event){
    event.preventDefault();
    const image = document.getElementById('featured-image');
    const imageBackground = document.getElementById('featured-image-background');
    imageBackground.classList.toggle('hover');
    image.classList.toggle('shrink');
}
function toggleMainNav(event){
    event.preventDefault();

    const hamburger = document.getElementById('hamburger');
   
    const mainNav = document.querySelector('#main-nav');
    const callToAction = document.querySelectorAll('.call-to-action.phone, .call-to-action.message');
    const featuredImageOverflow = document.getElementById('featured-image-overflow');
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
    animateMoveIn('#main-nav');
    animateRotate('.nav-menu')
    if(hamburger.classList.contains('active')){
        applyDelay('.nav-menu', '.nav-link', 'normal', .2)
    }else{
        applyDelay('.nav-menu', '.nav-link', 'reverse', .2)
    }
    featuredImageOverflow.classList.toggle('active');
    callToAction.forEach(element => {
        element.classList.toggle('active');          
    });
    
    
}
// window.addEventListener('onload')
window.toggleMainNav = toggleMainNav;
window.imgBackgroundChange = imgBackgroundChange;
