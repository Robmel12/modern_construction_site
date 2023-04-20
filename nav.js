import { createToggle, delayElements, applyTransition } from "./modules/animation.js";

function toggleNav(containerClass, className, subClass){
        let clicked = false;
        this.toggle = function(event){
            event.preventDefault();
            clicked = !clicked;
            if(clicked){
                delayElements(className, subClass, .2, .5);
                delayElements(containerClass, className, 0)
                
            }else{
                delayElements(containerClass, className, 1, 1)
                delayElements(className, subClass, .2,'reverse');
                
            }
            createToggle(containerClass, className, 'active');
            createToggle(className, subClass, 'active');
          
        }  ; 
            
    }

    const toggleNavMenu = new toggleNav('.nav-menu-container', '.nav-menu', 'li');
    
    window.addEventListener('load', function(event){
        event.preventDefault();
        const imageContainerClass = '.home-image-container'
        const curtain = '.curtain';
        const backgroundImage = '.home-background-image';
        const wordsContainerClass = '.home-words-container';
        const imageClass = 'img';
        const lettersClass = ' h1';
        const toggleClass = 'active';
        
        //Home words toggle delay
        delayElements(wordsContainerClass, lettersClass, .2, 2);
        createToggle(wordsContainerClass, lettersClass, toggleClass);
        
        //image toggle delay
        delayElements(imageClass, 2)
        this.setTimeout(()=>{delayElements(imageClass,0)}, 2)
        createToggle(backgroundImage, toggleClass)
        createToggle(imageClass, toggleClass);
        createToggle(curtain, toggleClass);
        createToggle(imageContainerClass, toggleClass);
        delayElements(imageContainerClass, 2);
        delayElements(curtain, 1);
        delayElements(backgroundImage, 1);
        this.setTimeout(()=>{delayElements(backgroundImage,0)}, 1)
        this.setTimeout(()=>{delayElements(backgroundImage,0)}, 1   )
        
    })
    window.toggleNav = toggleNavMenu.toggle;

