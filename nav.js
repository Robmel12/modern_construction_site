
function setDelay( classname, entry, ratio, hold = ''){
    const obj = document.querySelectorAll(classname);
    let direct;
    if(entry === 'enter' | entry === 'exit') {
    for(entry == 'exit'? i = obj.length-1 : i = 0; entry == 'enter'?  i < obj.length : i >= 0; entry == 'exit'? i-- : i ++ ){
        entry == 'enter' ? direct = i*ratio:  direct = (obj.length - i-1)*ratio;
        obj[i].style.transitionDelay = direct + hold +'s';
        console.log(i)
    }
    }else{return}
    
}
function imgBackgroundChange(event){
    event.preventDefault();
    const image = document.getElementById('featured-image');
    const imageBackground = document.getElementById('featured-image-background');
    imageBackground.classList.toggle('hover');
    image.classList.toggle('shrink');
}
function toggleMainNav(event){
    this.click = !this.click;
    if(this.click){
        setDelay('.nav-link', 'enter', .25);
    
    }else{
        setDelay('.nav-link', 'exit', .25);
    }
    event.preventDefault();
    const body =  document.querySelector('body');
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.querySelector('#main-nav');
    const callToAction = document.querySelectorAll('.call-to-action.phone, .call-to-action.message');
    const featuredImageOverflow = document.getElementById('featured-image-overflow');
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
    featuredImageOverflow.classList.toggle('active');
    callToAction.forEach(element => {
        element.classList.toggle('active');          
    });
    body.classList.toggle('stopscroll')
    console.dir(body);
    
    
}