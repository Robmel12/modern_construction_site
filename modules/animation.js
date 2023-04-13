
function getElements(containerClass, className){
    return document.querySelector(containerClass)?.querySelectorAll(className);
}

export function hide(containerClass = body, className){
    getElements(containerClass, className).forEach(element => {
        element.style.display = 'none'
       });
}

export function rotate(containerClass ='body', className, degree ='', time = 0, delay = 0, transitionFlow =''){
   getElements(containerClass, className).forEach(element => {
    element.style.rotate= degree;
    element.style.transition = time+'s '+transitionFlow 
   });
}