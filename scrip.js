const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  
  
  
  
  var page = gsap.timeline()
  
  page.from("nav", {
    y: -300,
    duration: 1,
  })
  
  page.from(".center", {
    opacity: 0,
    duration: 1,
  })
  
  page.from(".img", {
    y: 650,
    duration: 1,
  
  })
  
  
  
  var page3=gsap.timeline({
    scrollTrigger: {
      trigger: ".container-3",
      scroller: "body",
      start: "top 50%",
  
    },
  })
  
  page3.from(".left-container-3",{
    opacity:0,
    duration:1,
  })
  
  page3.from(".right-container-3-text", {
    opacity: 0,
    duration: 2,
  })
  
  var page4=gsap.timeline({
    scrollTrigger: {
      trigger: ".container-4",
      scroller: "body",
      start: "top 50%",
    }
  })
  
  page4.from(".container-4-top", {
    
    y: -250,
    duration: 2,
  })
  page4.from(".swiper-slide",{
    opacity:0,
    duration:2
  })
  
  
  
  
  var page4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      scroller: "body",
      start: "top 50%"
  
    }
  })
  
  page4.from(".top-footer .insta", {
    opacity: 0,
  
  })
  
  page4.from(".top-footer h3", {
    opacity: 0,
  
  })
  
  page4.from(".left-bottom .news", {
    opacity: 0,
  
  })
  
  page4.from(".left-bottom .release", {
    opacity: 0,
  
  })
  page4.from(".input-data", {
    opacity: 0,
  
  })
  page4.from(".social-media", {
    opacity: 0,
  
  })
  page4.from(".cont",{
    x:800,
    durtion:2
  })
  page4.from(".thing",{
    opacity:0,
    durtion:2
  })
  
  page4.from(".lower-footer",{
    opacity:0,
    durtion:2
  })
  
  
  
  const ham=document.querySelector(".box")
  const slide=document.querySelector(".nav2")
  const close=document.querySelector(".close")
  
  ham.addEventListener("click",function(){
    slide.style.transform="translate(0)";
    gsap.from(".leftnav2",{
    
      opacity:0,
      duration:2,
      delay:1
    })
  })
  close.addEventListener("click",function(){
    slide.style.transform="translate(100%)"
  })
  
  
  
  