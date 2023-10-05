gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ?
                locoScroll.scrollTo(value, 0, 0) :
                locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ?
            "transform" : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();




  

// preloader on window
const preload = document.querySelector('.preload')
window.addEventListener('load', () => {

// redirect location 
const projectcontainer = document.querySelector('.project-container ')
const path = 'https://sorex.scaleedge.in/'
projectcontainer.addEventListener('click', () => {
    window.open(path)
})
projectcontainer.addEventListener('mousemove', () => {
    gsap.to('.mouse-cursor', {
        scale: 5
    })
})

projectcontainer.addEventListener('mouseleave', () => {
    gsap.to('.mouse-cursor', {
        scale: 1
    })
})







    preload.style.display = 'none'
    preload.style.animation = "ease-in 2s linear"




const oneklick = document.querySelector('.onklick-container')
const path2 = 'https://oneklick.in/'
oneklick.addEventListener('click', () => {
    window.open(path2)
})
oneklick.addEventListener('mousemove', () => {
    gsap.to('.mouse-cursor', {
        scale: 5,
    })
})

oneklick.addEventListener('mouseleave', () => {
    gsap.to('.mouse-cursor', {
        scale: 1
    })
})

const project = document.querySelector('.ims-container ')
const path3 = 'https://oneklick.in/'
project.addEventListener('click', () => {
    window.open(path3)
})
project.addEventListener('mousemove', () => {
    gsap.to('.mouse-cursor', {
        scale: 5,
    })
})

project.addEventListener('mouseleave', () => {
    gsap.to('.mouse-cursor', {
        scale: 1
    })
})

const coding = document.querySelector('.coding-container')
coding.addEventListener('mousemove', () => {
    gsap.to('.mouse-cursor ', {
        scale: 5,
        border:'1px solid white',
        backgroundColor:'transparent',
        cursor: 'zoom-in',

    }
    )
   
})
coding.addEventListener('mouseleave', () => {
    gsap.to('.mouse-cursor', {
        scale: 1,
        border:'none',
        backgroundColor:'white',
    })
})







// typed js
var typed = new Typed('#element', {
    strings: ['<i>Website</i>', '<i>Application</i>', '<i>UX/UI</i>'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 20,
    showCursor: true
});



// round cursor
const boll = document.querySelector('.mouse-cursor')
window.addEventListener('mousemove', (event) => {
    gsap.to(boll, {
        left: event.clientX + 'px',
        top: event.clientY + 'px',
        ease: 'ease',

    })
})

// Scroll navbar 

gsap.from('.shubham-logo-one',{
    y :150,
    opacity:0,
    ease:'ease',
    delay:0

})

gsap.from('.navbar-nav li',{
    x :150,
    opacity:0,
    ease:'ease',
    delay:0,
    stagger:{
        amount:0.3
    }
})






gsap.from('.block h1',{
    y :150,
    opacity:0,
    ease:'ease',
    delay:0.5,
    stagger:{
        amount:0.1
    },
    

})
gsap.from('.sec-pra-one',{
    y :150,
    opacity:0,
    ease:'ease',
    stagger:{
        amount:0.1
    },
})

gsap.from('.sec-pra-one p',{
    y :100,
    opacity:0,
    ease:'ease',
    delay:1
})

gsap.from('.section-sec-title', {
    y: 150,
    opacity: 0,
    ease: 'ease',
    stagger: {
      amount: 0.8
    },
    scrollTrigger: {
      scroller: '#main',
      trigger: '.section-second',
      start: 'top 60%',
      end: '10% 60%',
      
    }
  });

  gsap.from('.section-second-sub , small', {
    y: 150,
    opacity: 0,
    ease: 'ease',
    stagger: {
      amount: 0.8
    },
    scrollTrigger: {
      scroller: '#main',
      trigger: '.section-second',
      start: 'top 60%',
      end: '10% 60%',
      
    }
  });
  

// first image section
gsap.from('.content-type-one img  ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-type-one img',
        start : '-25% 70%',
        end :'-20% 80%',
    }
})

gsap.from('.content-val-one ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-val-one',
        start : '-45% 70%',
        end :'-40% 80%',
    }
})



// img section second

gsap.from('.content-type-second img ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-type-second img',
        start : '-25% 70%',
        end :'-20% 80%',
    }
})

gsap.from('.content-val-second ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-val-second',
        start : '-45% 70%',
        end :'-40% 80%',
    }
})

// img section second
gsap.from('.content-type-third img ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-type-third img',
        start : '-25% 70%',
        end :'-20% 80%',
    }
})

gsap.from('.content-val-third ',{
    x:'-500px',
    ease: 'ease',
    opacity:0,
    stagger: {
      amount: 0.8
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.content-val-third',
        start : '-45% 70%',
        end :'-40% 80%',
    }
})


gsap.from('.data-line-1', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-600% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-2', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-500% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-3', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-400% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-4', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-300% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-5', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-200% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-6', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '-100% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-7', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '0% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-8', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '100% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-9', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '200% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-10', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '300% 80%',
        end: '0% 80%',
        
    }
});


gsap.from('.data-line-11', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '400% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-12', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '500% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-13', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '600% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-14', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '700% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-15', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '800% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-16', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '900% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-17', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1000% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-18', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1100% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-19', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1200% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-20', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1300% 80%',
        end: '0% 80%',
        
    }
});
gsap.from('.data-line-21', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1400% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-22', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1500% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-23', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1600% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-24', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1700% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-25', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1800% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-26', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '1900% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.data-line-27', {
    y: 100,
    ease: 'ease',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.data-line-1',
        start: '2000% 80%',
        end: '0% 80%',
        
    }
});

gsap.from('.contact-subcontainer p ',{
    y :100,
    ease:'ease',
    opacity:0,
    ease:'ease',
    stagger:{
        amount:0.5
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.contact-subcontainer p ',
        start:'-230% 70%',
        end:'-100% 70%',
     
    }
})




gsap.from('.contact-subcontainer .social',{
    y :100,
    ease:'ease',
    opacity:0,
    ease:'ease',
    
    stagger:{
        amount:0.5
    },
    scrollTrigger:{
        scroller:'#main',
        trigger:'.contact-subcontainer .social',
        start:'-230% 90%',
        end:'-100% 90%',
       
    }
})




})


