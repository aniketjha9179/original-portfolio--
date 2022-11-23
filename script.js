function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        
        // create two spans 
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        // parents and child both sets thier respective classes
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
        // span parents gets child and childs gets elems  details
        spanChild.innerHTML=elem.innerHTML;
        spanParent.appendChild(spanChild);
        // elem gets replaces its value with parents span
       elem.innerHTML="";
       elem.appendChild(spanParent)
    
        
    
    });
}
function valueSetters(){
    gsap.set("#nav a", {y: "-100%", opacity: 0});
    gsap.set("#home span .child",{y:"100%"})
    gsap.set("#home .row img", {opacity:0})


    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character =  e.childNodes[1].childNodes[1];

      character.style.strokeDasharray=character.getTotalLength() + 'px';
      character.style.strokeDashoffset=character.getTotalLength() + 'px';

    })

}

function loaderAnimation(){
    var tl=gsap.timeline();

tl
.from("#loader .child span", {
    x:100, 
    duration: 1.4,
    // delay: 1,
    stagger: .3,
    ease: Power3.easeInOut
})
.to("#loader .parent .child", {
    y:"-110%", 
    duration: 1,
    ease: Expo.easeInOut
})

.to("#loader", {
    height:0, 
    duration: 1,
    ease: Expo.easeInOut
})
.to("#green", {
    height:"100%",
    delay: -.5,
    top: 0, 
    duration: 1,
    ease: Expo.easeInOut
})
.to("#green", {
    height:"0%",
    duration: 1,
    delay:-.5,
    ease: Expo.easeInOut,
    onComplete:function(){
        animateHomepage();


    }

})
}

function animateSvg(){

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset :0,
        duration: 2,
        ease:Expo.easeInOut,
        // delay:5
    })

}

function animateHomepage(){
   


    var tl =gsap.timeline();

    tl
    .to("#nav a",{
        y: 0,
        opacity:1,
        stagger: .05,
        ease:Expo.easeInOut

    }) 
    .to("#home .parent .child ",{
        y: 0,
        stagger: .1,
        duration:1.5,
        ease:Expo.easeInOut

    }) 
    .to("#home .row img ",{
        opacity:1,
        delay:-.5,
    
        // duration:2,
        ease:Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }

    }) 
   
}

revealToSpan();
valueSetters();
loaderAnimation();

