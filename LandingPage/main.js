ScrollReveal().reveal('.description', {
	distance: '30px',
	delay: 600,
	duration: 1000,
	origin: 'top'
});

ScrollReveal().reveal('#img', {
	distance: '30px',
	delay: 400,
	duration: 1000,
	origin: 'right'
});

for (let x = 1; x <= 4; x++) {
	let dis = 400 * x;
	let dur = 1000 * x;
	ScrollReveal().reveal('#stat' + x.toString(), {
		distance: '30px',
		delay: dis,
		duration: dur,
		origin: 'top'
	});
}