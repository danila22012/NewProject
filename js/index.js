'use strict'
// <!--   OOP HPMEWORK   -->  SLIDERS

const sliderTopBtnRigth = document.querySelector('.latestPortfolio__buttons--btn2')
const sliderTopBtnleft = document.querySelector('.latestPortfolio__buttons--btn1')
const sliderTopBg = document.querySelector('.slider__Bg')
const sliderTopSlides = document.querySelectorAll('.portfolioItem')
const sliderTopSlideSize = document.querySelector('.portfolioItem')

const sliderBotBtnRigth = document.querySelector('.testimonials__buttons--2')
const sliderBotBtnleft = document.querySelector('.testimonials__buttons--1')
const sliderBotBg = document.querySelector('.testimonials__content--bg')
const sliderBotSlides = document.querySelectorAll('.testimonials__content--container')
const sliderBotSlideSize = document.querySelector('.testimonials__content--container')






const arr2 = [
    {
        cite:'We move at a fast pace. I’m always working on something. I am excited about it!',
        author:'1',
        position:'1'
    },
    {
        cite:'We move at a fast pace. I’m always working on something. I am excited about it!',
        author:'2',
        position:'2'
    },
    {
        cite:'We move at a fast pace. I’m always working on something. I am excited about it!',
        author:'3',
        position:'3'
    },
  

]

const arr1 = [
    {
        h2:'1',
        descr:'lorem'
    },
    {
        h2:'2',
        descr:'morel'
    },
    {
        h2:'3',
        descr:'morel'
    }
]

let range = 0;

class Slider{
    constructor(sliderTopSlides, sliderTopBtnleft, sliderTopBtnRigth, sliderTopBg, sliderTopSlideSize){
        SliderMethods.call(this)
        let _slides = sliderTopSlides
        let _btnLeft = sliderTopBtnleft
        let _btnRight = sliderTopBtnRigth

        
        let _range = 0
        let _sliderBg = sliderTopBg
        let _slideSize = sliderTopSlideSize

        this.setSlides = function(property){
            _slides = property
        }
        this.getSlides = function(){
            return _slides
        }
        this.getBtnLeft = function(){
            return _btnLeft
        }
        this.getBtnRigth = function(){
            return _btnRight
        }
        this.getRange = function(){
            return _range
        }
        this.setRange = function(property){
            _range = property
        }
        this.getSliderBg = function(){
            return _sliderBg
        }
        this.getSlideSize = function(){
            return _slideSize
        }
       

    }
}
const sliderTop = new Slider(sliderTopSlides, sliderTopBtnleft, sliderTopBtnRigth, sliderTopBg, sliderTopSlideSize)
const sliderBot = new Slider(sliderBotSlides, sliderBotBtnleft, sliderBotBtnRigth, sliderBotBg, sliderBotSlideSize)


function  SliderMethods (){


    this.renderTopSlides = function (){ //render top slides
    
        let set = this.setSlides
        let _sliderBg = this.getSliderBg() 
        arr1.forEach(property=>{
            let html = ''
           
            for(let e in property){
                
                html+= `<h2 class="portfolioItem__title--h2">${property[e]}</h2>`
            }
            let cont = document.createElement('div')
            cont.className = `portfolioItem col-xl-4  col-sm-4` 
            cont.innerHTML = `<div class="portfolioItem__title--h2">${html}</div>` 
            
            
            
            _sliderBg.appendChild(cont)
            set(document.querySelectorAll('.portfolioItem'))
            
        })
        
    }
    this.renderBotSlides = function(){ //render bottom slides

        let set = this.setSlides
        let _sliderBg = this.getSliderBg() 
        arr2.forEach(property=>{
            let html = ''
            
            
                
                html+= `
                <p class="blockquote__cite">${property.cite}</p>
                <p class="blockquote__author">${property.author}</p>
                <p class="blockquote__position">${property.position}</p>
                `
            
            let cont = document.createElement('div')
            cont.className = `testimonials__content--container`
            cont.innerHTML = `<div class="blockquote">${html}</div><img src="img/User_img.png" alt="img">`
            
            _sliderBg.appendChild(cont)
            set(document.querySelectorAll('.testimonials__content--container'))
        })
    }
    
    this.right = function(){ //btn rigth

        
        
        let get = this.getRange
        let set = this.setRange
        
        let _slideSize = this.getSlideSize()
        let _sliderBg = this.getSliderBg() 
        let _btnRight =  this.getBtnRigth()
        

        _btnRight.addEventListener('click', function(){
            
            
            let _range = get()
            
           
            _range -= _slideSize.offsetWidth
            // проверка на то, с каким слайдом работает метод 
            if(_slideSize.offsetWidth < 620 && _slideSize.offsetWidth > -620){//для маленький слайдов

                if(_range <= -(_slideSize.offsetWidth * (_sliderBg.children.length - 2))) _range = 0
                 set(_range) 
             }
            else{//для больших слайдов

                if(_range <= -(_slideSize.offsetWidth * _sliderBg.children.length)) _range = 0
                 set(_range) 
             }
            
            
            
           
            set(_range)
             
             _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
        })
        
    },
    this.left = function(){ //btn left

        let set = this.setRange
        let get = this.getRange
        
        let _slideSize = this.getSlideSize()
        let _sliderBg = this.getSliderBg() 
        let _btnLeft = this.getBtnLeft()

        _btnLeft.addEventListener('click', function(){

            let _range = get()
           
            _range += _slideSize.offsetWidth
            // проверка на то, с каким слайдом работает метод
            if(_slideSize.offsetWidth < 620 && _slideSize.offsetWidth > -620){//для маленький слайдов

               if(_range > (_slideSize.offsetWidth * 0)) _range = -_slideSize.offsetWidth * (_sliderBg.children.length - 3) 
                set(_range) 
            }
            else{//для больших слайдов

                if(_range > (_slideSize.offsetWidth * 0)) _range = -_slideSize.offsetWidth * (_sliderBg.children.length - 1)
                set(_range) 
            }

           
            _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
        })

    },


    this.infinitySwipes = function(){ //LOOP
       
        let set = this.setRange
        let get = this.getRange
        let _slideSize = this.getSlideSize()
        let _sliderBg = this.getSliderBg() 

        let timerId = setInterval(() => {

            let _range = get()
            _range -= _slideSize.offsetWidth
            if(_slideSize.offsetWidth < 620 && _slideSize.offsetWidth > -620){

                if(_range <= -(_slideSize.offsetWidth * (_sliderBg.children.length - 2))) _range = 0
                set(_range)
            }
            else{
                if(_range <= -(_slideSize.offsetWidth * _sliderBg.children.length)) _range = 0
                 set(_range) 
            }
            
            
            _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
            
         }, 3000);
         
        _sliderBg.onmouseover = e => {
                 setTimeout(() => { 

                    clearInterval(timerId); 
                        
                       
                    console.log('interval stoped'); 
                        
                 },50);  
        } 
        _sliderBg.onmouseleave = e =>{

                timerId = setInterval(() => {

                    let _range = get()
                    _range -= _slideSize.offsetWidth
                    
                    if(_slideSize.offsetWidth < 620 && _slideSize.offsetWidth > -620){

                        if(_range <= -(_slideSize.offsetWidth * (_sliderBg.children.length - 2))) _range = 0
                        set(_range)
                    }
                    else{
                        if(_range <= -(_slideSize.offsetWidth * _sliderBg.children.length)) _range = 0
                         set(_range) 
                    }
                    
                    
                    _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
                    
                 }, 2000);
        }
        

    },


    this.touches = function(){ //SWIPER

        let _slides = this.getSlides()
        let _range = this.getRange()
        let touchstartX = 0;
        
        let touchendX = 0;
        let _slideSize = this.getSlideSize()
        let _sliderBg = this.getSliderBg() 
        

        _slides.forEach(elem=>{
            
            elem.addEventListener('touchstart', function(event){
                
                touchstartX = event.touches[0].clientX;
                console.log(event.target)
                
                })
                
                elem.addEventListener('touchend', function(event){
                
                touchendX = event.changedTouches[0].clientX;  
                handleTouch(touchstartX,touchendX)
                
                })
            
            
        
        })

        function handleTouch(startX,endX ){
            //calculate the distance on x-axis and o y-axis. Check wheter had the great moving ratio.
            let xDist = endX - startX;
            

            _range -= xDist
            if(_slideSize.offsetWidth < 620 && _slideSize.offsetWidth > -620){
                if(_range <= _slideSize.offsetWidth * 0) _range = 0
                else if (_range >= _slideSize.offsetWidth * 4) _range = _slideSize.offsetWidth * 3
            }
            else{
                if(_range <= _slideSize.offsetWidth * 0) _range = 0
                else if (_range >= _slideSize.offsetWidth * 3) _range = _slideSize.offsetWidth * 3
            }
           
            _sliderBg.style.cssText = `transform: translate(-${_range}px, 0px);`
            
            
        }
    }
}


sliderTop.right()
sliderTop.left()
sliderTop.infinitySwipes() // LOOP
sliderTop.renderTopSlides()
sliderTop.touches()


sliderBot.right()
sliderBot.left()
sliderBot.renderBotSlides()
sliderBot.infinitySwipes() //LOOP
sliderBot.touches()


//////OOP PART 2

