var cursor = document.querySelector("#cursor")
function cursorEffect() {
    var page1Content = document.querySelector("#page1");

page1Content.addEventListener('mousemove',(det)=>{
    gsap.to(cursor,{
        x: det.x,
        y: det.y
    })
})
page1Content.addEventListener("mouseenter", ()=>{
    gsap.to(cursor,{
        scale: 1,
        opactiy: 1
    })
})

page1Content.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        scale: 0,
        opactiy: 0
    })
})
}
cursorEffect()

var menu = document.querySelector(".menu");

menu.addEventListener("mouseover", ()=>{
    cursor.innerText = "";
})
menu.addEventListener("mouseout", ()=>{
    cursor.innerText = "Book Now";
})

var quote = document.querySelector(".quote")

quote.addEventListener("mouseover", ()=>{
    cursor.innerText = "";
})
quote.addEventListener("mouseout", ()=>{
    cursor.innerText = "Book Now";
})

var tl = gsap.timeline()

tl.from(".loader h3", {
    x:40,
    opacity : 0,
    duration: 1,
    stagger: 0.3
})

tl.to(".loader h3", {
    opacity: 0,
    x: -40,
    duration:1,
    stagger:0.3

})
tl.to(".loader", {
    opacity: 0
})
tl.to(".loader", {
    display: "none"
})
var navbar = document.querySelector(".navbar");
var navitems = document.querySelector(".navitems");
var about= document.getElementById("about");
var About = document.querySelector(".About");


about.addEventListener("click", function () {
    navitems.classList.toggle("hidden");
    About.classList.toggle("visible");

});



menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    About.classList.toggle("hidden");
    
});

var cross = document.querySelector(".cross")

cross.addEventListener("click", function () {
    About.classList.toggle("hidden");
   navbar.classList.toggle("active");
  
});

