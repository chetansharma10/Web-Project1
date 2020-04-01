var p=document.querySelector('.photo');
var h=document.querySelector('.firstheading');
var para=document.querySelector('.para');
var h2=document.querySelector('.secondheading');
var i=document.querySelector('.in');
var but=document.querySelector('.button');
var na=document.querySelector('.item');
var p2=document.querySelector('.i');
var tween=gsap.timeline();
tween.to(na,{
opacity:1,
duration:2,
ease:"slow",


});


tween.to(p,{

height:"100%",
width:"50%",
duration:2,
opacity:1,
});
tween.to(h,{
    ease:"slow",
    duration:1,
    y:-10,
    opacity:1,
});
tween.to(h2,{
    ease:"back",
    duration:1,
    y:-10,
    opacity:1,

},"=-0.4");
tween.to(para,{
    ease:"slow",
    duration:1,
    y:-10,
    opacity:1,



},"=-0.3");
tween.to(i,{
    ease:"slow",
    duration:1,
    y:-10,
    opacity:1,



});tween.to(but,{
    ease:"slow",
    duration:1,
    y:-10,
    opacity:1,



});

tween.to(p2,{

ease:"slow",
duration:1,
opacity:1,
y:"20%",
},"=-4");