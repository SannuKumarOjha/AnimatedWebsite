gsap.to(".image-container",{
    width: "100%" ,
    ease: Expo.easeInOut ,
    duration: 2,
    stagger: 2 ,
})
gsap.to(".text h1 " , {
    top:0 ,
    stagger:2,
    ease: Expo.easeInOut 
})
gsap.to(".text h1 " , {
    delay:2 ,
    top:"-100%" ,
    stagger:2,
    ease: Expo.easeInOut 
})
