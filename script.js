function page3(){
var tl=gsap.timeline({
    scrollTrigger:
    {
        scroller:"body",
        trigger:".page3",
        scrub:true,
        start:"top 60%",
        end:"top 0%",
       
    },
    
})
tl.from(".pepsi",{

rotate:"-90deg"
},"animi")
tl.from(".pepsi-org",{

    rotate:"-90deg"
 },"animi")
tl.from(".cocacola",{

        rotate:"90deg"
 },"animi")
tl.from(".coc-org",{

rotate:"90deg"
 },"animi")
 tl.to(".fanta",{
    top:"220%",left:"32%"
 },"animi")
 tl.to(".orange-slice",{
    top:"210%",left:"40%"
 },"animi")

}
function page2(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".page2",
            start:"top 80%",
            end:"top 0%",
           
            scrub:true
        }
    })
    tl2.to(".fanta",{
        top:"120%",
        left:"0%"
    },"animi1")
    tl2.to(".orange-slice",{
        top:"110%",
        left:"5%"
    },"animi1")
    tl2.to(".leaf2",{
        top:"160%",
        right:"0%"
    },"animi1")

}
page3()
page2()