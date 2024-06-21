function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingAnimantion(){
    var tl=gsap.timeline();
    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
    })
    
    tl.from("#line1-part1",{ //isse line1 ke part 1 ko acces kr liya and .line ke saare h2s ko
        opacity:0,
        onStart: function(){ //onStart ek method hai gsap ka start se koi function run kra skte hain
            let h5timer= document.querySelector("#line1-part1 h5");
            let grow=0; 
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML=grow++; //isse grow badhta rhega
                }
                else{
                    h5timer.innerHTML=grow;// isse 100 ke baad aake ruk jayega
                }
            },33)
        },
    });
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:2.6 // 2.6 sec ke baad jo loader hai wo disappear ho jaayega
    })
    tl.from("#page1",{
         delay:0.2,
         y:1600,
         opacity:0,
         duration:0.5,
         ease: Power4, //ye animation ke graph ko manage krta hai
    });
    tl.to("#loader",{
        display:"none",
    
    });
    tl.from("#nav",{ //it will make the hero segment appear more smoothly
       opacity:0,
    });
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{ //it will make the hero segment appear more smoothly
        y:140,
        stagger:0.2,
    })
}
 
// function crsrAnimation(){ // function for circle cursor
//     document.addEventListener("mousemove",function(dets){
//         gsap.to("#crsr",{
//             left:dets.x,
//             top:dets.y
//         });
//         });

function crsrAnimation(){
    Shery.mouseFollower({
        skew:true,
        ease:"cubic-bezier(0.23,1,0.320,1)",
        duration:1,
    });
    Shery.makeMagnet("#nav-part2 h4");

var videoContainer=document.querySelector("#video-container");
var videoPlay=document.querySelector("#video-container video"); 
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0
             })
            gsap.to("#video-cursor", {
            left: dets.x-500 ,
            y: dets.y-210 ,
        });
        })
    })


    var flag=0;
    videoContainer.addEventListener("click", function(){
       if(flag==0){
        videoPlay.play();
        videoPlay.style.opacity=1;
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-mini-fill"></i>`;
        gsap.to("#video-cursor",{
            scale:0.5,
        })
        
        flag=1
       } else{
        videoPlay.pause();
        videoPlay.style.opacity=0;
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-play-mini-fill"></i>`;
        gsap.to("#video-cursor",{
            scale:1,
        })
        
        flag=0
       }
       
    })
    
    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
           opacity:1,
        });
        gsap.to("#video-cursor",{
            top:"-15%",
            left:"70%"
        })
    })
}

// // https://www.npmjs.com/package/sheryjs imported from here
// Shery.makeMagnet("#nav-part2 h4" );

function sheryAnimation() {
    
Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    debug: false,
    config: 
    {"a":{"value":2.52,"range":[0,30]},"b":{"value":-0.59,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7586106934170648},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":4.58,"range":[0,100]}}
});
}
function page4Animation(){
    var tl2= gsap.timeline();
    function aboutObys(){
        var texts="";
        document
        .querySelector("#about-obys")
        .textContent.split("")
        .forEach(function(elem){
            texts+=`<span>${elem}</span>`;
        });
        document
        .querySelector("#about-obys").innerHTML=texts;
        console.log(texts);
        tl2.from("#about-obys span",{
            bottom: 200, // Adjust this value if needed to make letters come from below
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
            trigger: "#about-obys span",
            scroller: "#main",
            markers: false,
            start: "top 80%",
            end: "top 45%",
            scrub: 2,
            
        }
    
        });
    }
    function aboutObysText(){
        
        let allh2=document.querySelectorAll("#intro h2");
        allh2.forEach(function(elem){
            var garbage=""
            var alltexts=elem.textContent;
            var splittedTexts=alltexts.split("");
            //console.log(splittedTexts);
            splittedTexts.forEach(function(e){
                garbage+=`<span>${e}</span>`
            });
            elem.innerHTML=garbage;
            //console.log(garbage);
        });
        tl2.to("#page4-content #intro h2 span",{
            color:"#Ffdb58",
            // color:"#fff",
            stagger:0.1,
            scrollTrigger:{
                trigger:"#intro",
                scroller:"#main",
                markers:false,
                start:"top 50%",
                end:"top 10%",
                scrub:1.25
            }

        })
        
    }
    aboutObys();
    aboutObysText();
}

function flagAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x: dets.clientX,
            y: dets.clientY
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1,
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0,
        })
    })
}

function footerAnimation() {
    var clutter = "";
    var clutter2 = "";
    document
      .querySelector("#footer h1")
      .textContent.split("")
      .forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
      });
    document.querySelector("#footer h1").innerHTML = clutter;
    document
      .querySelector("#footer h2")
      .textContent.split("")
      .forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`;
      });
    document.querySelector("#footer h2").innerHTML = clutter2;
  
    document
    .querySelector("#footer-text")
    .addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        duration: 0.3, // Increase speed by reducing duration
        stagger: 0.05,
      });
      gsap.to("#footer h2 span", {
        delay: 0.15, // Adjust delay to match increased speed
        opacity: 1,
        duration: 0.3, // Increase speed by reducing duration
        stagger: 0.05,
      });
    });

  document
    .querySelector("#footer-text")
    .addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        duration: 0.3, // Increase speed by reducing duration
        stagger: 0.05,
        delay: 0.15, // Adjust delay to match increased speed
      });
      gsap.to("#footer h2 span", {
        opacity: 0,
        duration: 0.3, // Increase speed by reducing duration
        stagger: 0.05,
      });
    });
}
function imageAnimation(){

}
  


loadingAnimantion();
locomotiveAnimation();
flagAnimation();
crsrAnimation(); 
page4Animation()
sheryAnimation();
footerAnimation();
