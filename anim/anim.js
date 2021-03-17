// image and text slide at page load
// gsap.to(".reveal-img", {x: "100%", duration: 1});
//gsap.to(".reveal-text", {x: "100%", duration: 1});

let obraz = document.querySelector(".reveal-img");

const slideTl = gsap.timeline({defaults: {duration: 1, ease: "power2.inOut"}});
slideTl.fromTo(obraz, {x: "0%"}, {x: "100%"});
slideTl.fromTo(obraz, {scale: '2'}, {scale: '1'}, "-=1");
slideTl.fromTo(".reveal-text", {x: "0%"}, {x: "100%"}, "-=1");
slideTl.fromTo(".nav-header", {y: '-100%'}, {y: '0%'}, "-=0.75");

let mouse = document.querySelector(".cursor");

function cursor(e) {

	mouse.style.top = e.pageY + "px";
	mouse.style.left = e.pageX + "px";
}
function cursorActive(event){
	if (event.target.id === 'logo' || event.target.classList.contains('burger')){
		mouse.classList.add('nav-active');
	}
	else {
		mouse.classList.remove('nav-active');
	}
}

window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', cursorActive);





































