gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -5%",
        end : "top -70%",
        scrub : 2
    }
})