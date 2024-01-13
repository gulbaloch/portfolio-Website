class PageAnimation {
  static animatePageOne() {
    gsap.to([".heroText", ".heading-text1", ".heading-text2"], {
      y: 10,
      duration: 1,
      stagger: 1,
      ease: "Power2.easeOut",
    });

    gsap.to(".heroimage #img", {
      x: 1800,
      duration: 1,
      ease: "power1.easeinout",
    });
  }
}

class ScrollTriggers {
  static animateBoxes() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".boxes",
        start: "10% 50%",
        end: "bottom center",
        scrub: 2,
      },
    });

    tl.to(".boxes", {
      borderBottom: "0.2px solid #a99e9e",
      duration: 1,
      stagger: 1,
      ease: "power2.out",
    });

    tl.to([".h1", ".h2"], {
      opacity: 1,
      duration: 2,
      stagger: 1,
      ease: "power2.out",
    });

    tl.from([".rigth", "leftboxe"], {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.from([".aboutText", "paragraphtext"], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }

  static animateSocialMedia() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tosocialmedia",
        start: "10% 50%",
        end: "bottom center",
        scrub: 1,
        ease: "Power2.easeOut",
      },
    });

    tl.to(".tosocialmedia", {
      opacity: 1,
      duration: 1,
      ease: "Power2.easeOut",
    });
  }

  static animateHeroTextDesignBox() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroText-Design-box",
        start: "10% 50%",
        end: "bottom center",
        scrub: 1,
        ease: "Power2.easeInOut",
      },
    });

    tl.to([".heading-Think", ".heading-Design"], {
      opacity: 1,
      duration: 1,
      ease: "Power2.easeOut",
    });
  }
}

class SmoothScroll {
  static enableSmoothScroll() {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }
}

class ProjectPageAnimation {
  static animateProjectPage() {
    gsap.to(".project_Page .img", {
      transform: "translateX(-200%)",
      scrollTrigger: {
        trigger: ".project_Page",
        scroller: "body",
        start: "top 0",
        end: "bottom -600%",
        scrub: 1,
        markers: true,
        pin: true,
      },
    });
  }
}

class ButtonEvents {
  static buttonEvents() {
    const mouseHover = document.getElementById("btn");
const firstMouseHoverButton=document.getElementById('contactButton')
    const tl = gsap.timeline({
      paused: true, // pause the timeline initially
    });

    tl.to(mouseHover, {
      y: 3,
      backgroundColor: "#9fa3a4",
      duration: 0.3,
      ease: "Power2.easeOut",
    });

    mouseHover.addEventListener("mouseenter", function (e) {
      tl.play(); // play the timeline on mouseenter
    });

    mouseHover.addEventListener("mouseleave", function (e) {
      this.style.backgroundColor = "#b8c2c4";
      this.style.color = "#000";
      this.style.transition = "0.3s ease";
      tl.reverse(); // reverse the timeline on mouseleave
    });


    tl.to(firstMouseHoverButton,{
      y:4,
      backgroundColor: "#9fa3a4",
      duration:0.5,
      ease: "Power2.easeOut",
    
    });

    firstMouseHoverButton.addEventListener('mouseenter',function(e){
      tl.play()
    });
     
    firstMouseHoverButton.addEventListener('mouseleave',(e)=>{
tl.reverse()
    })



   
  }
}

// Call the method to set up button events
ButtonEvents.buttonEvents();

ProjectPageAnimation.animateProjectPage();
ScrollTriggers.animateBoxes();
ScrollTriggers.animateSocialMedia();
ScrollTriggers.animateHeroTextDesignBox();
PageAnimation.animatePageOne();
SmoothScroll.enableSmoothScroll();
