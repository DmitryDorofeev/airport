// Vanilla JS  <3

window.addEventListener('load', onLoad);

function onLoad () {
	initScrollActions();
}

function initScrollActions() {

	var header = document.getElementsByClassName('board__header')[0];

	var stickyHeader = header.cloneNode(true);
	stickyHeader.className += ' board__header_stick';
	header.parentNode.insertBefore(stickyHeader, header.nextSibling);

	window.addEventListener('scroll', function (event) {
		if (header.getBoundingClientRect().top <= 0) {
			stickyHeader.style.display = 'table';
		} else {
			stickyHeader.style.display = 'none';
		}
	});
}
