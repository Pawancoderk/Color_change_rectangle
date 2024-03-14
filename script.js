var rect = document.querySelector("#centre");
rect.addEventListener("mousemove", function(dets){
 var rposition = rect.getBoundingClientRect();
 var insiderectanfle = dets.clientX - rposition.left;
 if(insiderectanfle<rposition.width/2){
    var redcolor = gsap.utils.mapRange(0,rposition.width/2,255,0,insiderectanfle);
    gsap.to(rect,{
    backgroundColor:`rgb(${redcolor},0,0)`,
    ease:Power4,
    });
}
else{
var greencolor = gsap.utils.mapRange(rposition.width/2,rposition.width,0,255,insiderectanfle);
gsap.to(rect,{
    backgroundColor:`rgb(0,0, ${greencolor})`,
    ease:Power4,
    });
}
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
        ease:Power4,
    })
})

