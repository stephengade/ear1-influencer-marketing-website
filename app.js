let tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.animated-ear',
  }
});

tl.from(".hero-images", {y: 400, opacity: 0, duration: 1} )

// popup 

let yl = gsap.timeline({
  scrollTrigger: {
      trigger: '.filter-section',
  }
});

yl.from(".filter-popup", {y: 500, opacity: 0, duration: 2.5, ease: "bounce"} )

// earn money

let  el = gsap.timeline({
  scrollTrigger: {
      trigger: '.earn-money-section',
  }
});

el.from(".earn-money-image", {x: -500, opacity: 0, duration: 1.2} )

// features

let  pl = gsap.timeline({
  scrollTrigger: {
      trigger: '.faq-section',
  }
});

pl.from(".faq-image", {x: 500, opacity: 0, duration: 2.4} )

// App download footer

let  dl = gsap.timeline({
  scrollTrigger: {
      trigger: '.app-download',
  }
});

dl.from(".footer-img", {y: 500, opacity: 0, duration: 1.5} )

// chat

let  cll = gsap.timeline({
  scrollTrigger: {
      trigger: '.chat-body',
  }
});

cll.from(".chat-left", {x: -200, opacity: 0, duration: 1.5} )

// right chat

let  rll = gsap.timeline({
  scrollTrigger: {
      trigger: '.chat-body',
  }
});

rll.from(".chat-right", {x: 100, opacity: 0, duration: 1.5} )

// footer 

let  fl = gsap.timeline({
  scrollTrigger: {
      trigger: '.chat-footer',
  }
});

fl.from(".sorry", {x: 100, opacity: 0, duration: 1.5} )

// Hamburger

const menuBtn = document.querySelector('.hamburger');
const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.mobileMenu');
const menuNav = document.querySelector('.navList');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
   if (!showMenu) {
     trigger.classList.add('open');
     nav.classList.add('open');
     menuNav.classList.add('open');


     showMenu = true;
   } else {
     trigger.classList.remove('open');
      nav.classList.remove('open');
     menuNav.classList.remove('open');

     showMenu = false;
   }
}

// onclick remove

function removeAll(){
    document.querySelector(".mobileMenu").innerHTML = "";
}
