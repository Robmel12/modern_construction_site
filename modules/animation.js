function getElements(){
  switch (arguments.length){
    case 1:
        return document.querySelector(arguments[0])
    case 2:
        if(arguments[1] == true){
            return document.querySelectorAll(arguments[0]);
        }else{
            return document.querySelector(arguments[0]).querySelectorAll(arguments[1]);
        }   
        
    default: return []
    }
  }

export function createToggle(){
    let elements;
    let toggleClass;
    const forEachFunc = (element)=>{
        element.classList.toggle(toggleClass)
    }
    switch(arguments.length){
        case 2:
            toggleClass = arguments[1]
           elements = getElements(arguments[0]).classList.toggle(toggleClass);
        case 3:
            if(arguments[2] === true){
                toggleClass = arguments[1];
                elements = getElements(arguments[0], arguments[2]).forEach(forEachFunc)
            }
            toggleClass = arguments[2]
            elements = getElements(arguments[0], arguments[1]).forEach(forEachFunc)
            break
            default: console.error('must have 2-3 arguments for createToggle function.')
        }


}
function createDelayTime(elmObj, ratio = 0, hold = 0){
   return elmObj.length !== undefined ? elmObj.forEach((element, index) =>    element.style.transitionDelay = index*ratio + hold + 's'): elmObj.style.transitionDelay = 1 *ratio + hold + 's';

   
}
function createDelayTimeReverse(elmObj, ratio = 0, hold= 0){
   return elmObj.length !== undefined ? elmObj.forEach((element, index) => element.style.transitionDelay = (elmObj.length - index)*ratio + hold +'s'): elmObj.style.transitionDelay = 1*ratio + hold +'s';
   
}
export function delayElements(){
    

    if(Object.values(arguments).includes('reverse')){
    switch(arguments.length){
        case 3:
            createDelayTimeReverse(getElements(arguments[0], true), arguments[1]); 
            break
        case 4:
            if(typeof arguments[1] === 'string'){
                createDelayTimeReverse(getElements(arguments[0], arguments[1]), arguments[2]);
            break
            }
            createDelayTimeReverse(getElements(arguments[0], true), arguments[1], arguments[2]);
            break
        case 5:createDelayTimeReverse(getElements(arguments[0], arguments[1]), arguments[2], arguments[3]);
            break
    }    
}else{
   switch(arguments.length){
    case 2:
        createDelayTime(getElements(arguments[0]), arguments[1]);
        break
    case 3:if(arguments[2] === true){
        createDelayTime(getElements(arguments[0], true), arguments[1]);
        break
    }else if(typeof arguments[1] === 'string'){
        console.log('called it!')
        createDelayTime(getElements(arguments[0], arguments[1]), arguments[2])
        break
    }else{
        createDelayTime(getElements(arguments[0]), arguments[1], arguments[2]);
        break
    }
    case 4:
        if(arguments[3] === true){
            createDelayTime(getElements(arguments[0]), arguments[1], arguments[2])
        }else{
            createDelayTime(getElements(arguments[0], arguments[1]), arguments[2], arguments[3]);
        }
   }
}



}
export function applyTransition(){
let elements;
    switch(arguments.length){
    case 3:
        elements = getElements(arguments[0]);
        elements.length !== undefined? elements.forEach(element=> element.style[arguments[1]] = arguments[2]):elements.style[arguments[1]] = arguments[2];
        break
    case 4:
        if(arguments[1] === true){
            elements =  getElements(arguments[0], true);
            elements.forEach(element => element.style[arguments[2]] = arguments[3] )
            break
        }
        elements = getElements(arguments[0], arguments[1]);
        elements.forEach(element => element.style[arguments[2]] = arguments[3])

}
}