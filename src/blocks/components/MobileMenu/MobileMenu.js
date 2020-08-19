import { smoothly } from '@helpers/smoothly.js';
import { bodyActions } from '@helpers/bodyActions.js';
import { Navbar } from '@components/Navbar/Navbar.js';
import { modal } from '@components/Modal/Modal.js';

/**
 * Действия открытия/закрытия мобильного меню, инициализация Navbar в мобильном меню.
 */
class MobileMenu {
	constructor() {
		this.overlayMobile = null;
		this.mobileMenu = document.querySelector('.mobile-menu');

		this.init();
	}

	show(e) {
		if (!e.target.closest('.header__btn-mob-menu')) return;

		bodyActions.hidden();
		modal.show(this.mobileMenu);
	}

	close(e) {
		bodyActions.scroll();
		modal.hide(this.mobileMenu);
	}

	showMenuEvents() {
		document.addEventListener('click', e => {
			this.show(e);
		});
	}

	closeMenuEvents() {
		document.addEventListener('click', e => {
			if (this.overlayMobile === null) return;
			if (e.target !== this.overlayMobile) return;
			
			this.close(e);
		});
	}

	init() {
		this.showMenuEvents();
		this.closeMenuEvents();

		const navbarMobile = new Navbar({
			elements: {
				parrent: this.mobileMenu
			},
			type: 'vertical',
			duration: 700,
			border: false,
			animateEvents: e => {
				this.mobileMenu.addEventListener('click', e => {
					if (!e.target.closest('.mobile-menu')) return;
					if (!e.target.classList.contains('navbar__link')) return;

					this.close(e);
					navbarMobile.initAnimation(e);
				});
			}
		});

		navbarMobile.init();
	}
}

export { MobileMenu };