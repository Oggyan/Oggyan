
let currentSlide = 1;
openslide(currentSlide);



//function for next slide 

function next(){
    currentSlide++;
    openslide(currentSlide);
    document.getElementById("slider").style.transition = "0.7s";
    
    if(currentSlide>4){
        setTimeout(function (){

            currentSlide = 1;
            openslide(currentSlide);
            document.getElementById("slider").style.transition = "0s";
        },700)
    }

    resetInterval();
    
}



let move = setInterval(() => {
    next();
}, 1000);

function resetInterval(){
    clearInterval(move)
    move = setInterval(() => {
        next();
    }, 3000);
}


//function for previous slide 

function prev(){
    
    
    currentSlide--;
    openslide(currentSlide);
    document.getElementById("slider").style.transition = "0.7s";
   
    if(currentSlide<1){
        setTimeout(function (){

            currentSlide = 4;
            openslide(currentSlide);
            document.getElementById("slider").style.transition = "0s";
        },700)
    }

    resetInterval()
  
    

    
   
}

//function to open the slide

function openslide (slide){
    let marginleft = (slide)*100; 
    document.getElementById("slider").style.marginLeft = -marginleft +"%";
    let indicators = document.getElementsByClassName("indicator") ;

    document.getElementById("next").classList.add("disabled");
    document.getElementById("prev").classList.add("disabled");
    for(let i  = 0 ; i <indicators.length;i++){
        indicators[i].classList.add("disabled")
    }

    setTimeout(function(){

    document.getElementById("next").classList.remove("disabled");
    document.getElementById("prev").classList.remove("disabled");
    for(let i  = 0 ; i <indicators.length;i++){
        indicators[i].classList.remove("disabled")
    }
         

    },700)


    for(let i = 0;i<indicators.length;i++){
        if(i+1 === slide){
            indicators[i].classList.add("activeindicator")
        }
        else[
            indicators[i].classList.remove("activeindicator")
        ]
    }
    

}


function indicate(indicator){
    if(indicator>=1 && indicator<=4){
        currentSlide  = indicator;
        document.getElementById("slider").style.transition = "0.7s";
        
        openslide(indicator);
        resetInterval();
    }

}







