// Vanilla JS

window.addEventListener('load', onLoad);

function onLoad () {
	initScrollActions();
}

function initScrollActions() {

	var header = document.getElementsByClassName('js-header')[0],
		stickyHeader = document.getElementsByClassName('js-stick')[0];

	window.addEventListener('scroll', function (event) {
		if (header.getBoundingClientRect().top <= 0) {
			stickyHeader.style.display = 'table';
			stick = true;
		} else {
			stickyHeader.style.display = 'none';
		}
	});
}
