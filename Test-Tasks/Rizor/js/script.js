//Header
gsap.fromTo(".section-header-nav__logo", 0.5, {y: -100, opacity: 0}, {y: 0, opacity: 1})
gsap.fromTo("nav", 0.5, {y: -100, opacity: 0}, {y: 0, opacity: 1})

//Promo
Splitting();
const contentSection = document.querySelectorAll(".scroll-trigger");
const xValues = ["0%", "100%", "100%"];
const yValues = ["0%", "100%", "0%"];
contentSection.forEach((current, index, array) => {
	gsap.from(current.querySelectorAll(".char"), {
		scrollTrigger: {
			trigger: current,
			start: "bottom bottom"
		},
		opacity: 0,
		scale: 0.3,
		x: xValues[index],
		y: yValues[index],
		stagger: {
			amount: 1.2
		}
	});
});
gsap.fromTo(".section-promo__back-video", {autoAlpha: 0.2}, {autoAlpha: 0.6, duration: 2})
let tl = new TimelineLite();
tl
	.to(".section-promo__back-video-play-btn", 0.7, {x: 0, y: 0, rotation: 360, delay: 1.7})
	.fromTo(".section-promo__back-video", {autoAlpha: 0.6}, {autoAlpha: 1, duration: 1})

//Benefits
gsap.fromTo(".section-benefits__back-video", {autoAlpha: 0.2}, {autoAlpha: 0.6, duration: 3})
gsap.fromTo(".section-benefits__all-advantages-wrapper-design", 0.5, {y: 150, opacity: 0}, {y: 0, opacity: 1})
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-promo__hgroup',
        start: "top"
    }
});
tl1
	.fromTo(".section-benefits__all-advantages-wrapper-color", 0.5, {y: -200, opacity: 0}, {y: 0, opacity: 1})
	.to(".section-benefits__back-video-play-btn", 0.7, {x: 0, y: 0, rotation: 360 })
	.fromTo(".section-benefits__back-video", {autoAlpha: 0.6}, {autoAlpha: 1, duration: 1})

//Modes
gsap.fromTo(".section-modes__back-video", {autoAlpha: 0.2}, {autoAlpha: 0.6, duration: 3})
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-benefits__all-advantages',
        start: "top"
    }
});
tl2
    .fromTo(".section-modes__block", 1, {x: -300, opacity: 0}, {x: 0, opacity: 1})
	.to(".section-modes__back-video-play-btn", 0.7, {x: 0, y: 0, rotation: 360 })
	.fromTo(".section-modes__back-video", {autoAlpha: 0.6}, {autoAlpha: 1, duration: 1})

//Match
gsap.fromTo(".section-match__back-photo", {autoAlpha: 0}, {autoAlpha: 1, duration: 3})
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-benefits__all-advantages-wrapper-color-block2',
        start: "center"
    }
});
tl3
	.fromTo(".section-match__block", 1, {x: -300, opacity: 0}, {x: 0, opacity: 1})
	