// Vanilla JS  <3
var Main = (function () {
	/**
	 * @namespace
	 * @name Main
	 */

	/**
	 * @class Main
	 * @constructor
	 */
	var Main = function () {
		this.init();
	};

	/**
	 * @type {{init: Function, prepareSticky: Function, isStickyAvailable: Function, initScrollAction: Function, _onScroll: Function, initModalActions: Function, _showModal: Function, _closeModal: Function}}
	 */
	Main.prototype = {

		/**
		 * Run tasks on page load
		 */
		init: function () {
			this.prepareSticky();
		},

		/**
		 * Initialize polyfill if sticky not supported in browser
		 */
		prepareSticky: function () {

			if (this.stickyHeader) {
				return;
			}

			this.header = document.getElementsByClassName('board__header')[0];

			if (!this.isStickyAvailable()) {
				this.stickyHeader = this.header.cloneNode(true);
				this.stickyHeader.className += ' board__header_stick';
				this.header.parentNode.insertBefore(this.stickyHeader, this.header.nextSibling);

				this.initScrollAction();
			}
		},

		/**
		 * Returns true if 'position: sticky' is available in browser
		 * @returns {boolean}
		 */
		isStickyAvailable: function () {
			return ['', '-webkit-'].reduce(function (prev, value) {
				return prev || this.isStickyAvailableWithPrefix(value);
			}.bind(this), false);
		},

		/**
		 * Returns true if 'position: sticky' is available in browser with prefix
		 * @param {String} prefix
		 * @returns {boolean}
		 */
		isStickyAvailableWithPrefix: function (prefix) {
			var testElement = document.createElement('div');

			try {
				testElement.style.position = prefix + 'sticky';
			} catch (e) {
				return false;
			}

			return testElement.style.position === prefix + 'sticky';
		},

		/**
		 * Add listener on scroll
		 */
		initScrollAction: function () {
			window.addEventListener('scroll', this._onScroll.bind(this));
		},


		/**
		 * Configure header style on scroll
		 * @private
		 */
		_onScroll: function () {
			if (this.header.getBoundingClientRect().top <= 0) {
				this.stickyHeader.style.display = 'table';
			} else {
				this.stickyHeader.style.display = 'none';
			}
		}

	};

	return Main;

})();


window.addEventListener('load', function () {
	new Main();
});
