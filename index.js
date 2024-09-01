var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page1",
    start: "70% 55%",
    end: "70% 40%",
    scrub: 2,
    pin:true
}})
tl.to(".whole-2",{
    y:"-40%"
},'a')
tl.to(".navbar",{
    y:"-100%"
},'a')


