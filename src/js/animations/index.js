export function animationHero(){
	const tl = gsap.timeline();
	tl
		.from('.hero__smartphone', { delay: 1, duration: 2, opacity: 0, x: -80 })
		.from('.hero__title', { duration: 1, opacity: 0, x: 80 }, "-=1.5")
		.from('.hero__action', { duration: .5, opacity: 0, y: -20 }, "-=1")
}

export function animationAbout(){
	const controller = new ScrollMagic.Controller();
	const tl = gsap.timeline();
	tl
		.from('.workflow__title', { duration: 5, opacity: 0, y: 200 })
		.from('.workflow__wrapper', { duration: 2, opacity: 0, y: 100, stagger: .8 }, "-=2")

	new ScrollMagic.Scene({
	  triggerElement: ".workflow__content",
	  duration: "90%",
	  triggerHook: .9,
	  reverse: false,
	}).setTween(tl).addTo(controller);
}

export function animationOffer(){
	const controller = new ScrollMagic.Controller();
	const tl = gsap.timeline();
	tl
		.from('.offer__body', { duration: 1, opacity: 0, y: -200 })

	new ScrollMagic.Scene({
	  triggerElement: ".offer__content",
	  duration: "100%",
	  triggerHook: .9,
	  reverse: false,
	}).setTween(tl).addTo(controller);
}

export function animationFeedback(){
	const controller = new ScrollMagic.Controller();
	const tl = gsap.timeline();
	tl
		.from('.feedback__title', { duration: 1, opacity: 0, y: 200 })
		.from('.feedback__description', { duration: 1, opacity: 0, y: 200 }, "-=.4")

	new ScrollMagic.Scene({
	  triggerElement: ".feedback__content",
	  duration: "70%",
	  triggerHook: 1,
	  reverse: false,
	}).setTween(tl).addTo(controller);
}