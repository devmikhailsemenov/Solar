import '@helpers/detectBadBrowser';
import WOW from 'wow.js/dist/wow.js';
import { bodyActions } from '@helpers/bodyActions';
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { preloaderAction } from '@components/Preloader/Preloader';
import { mainFormActions } from '@components/MainForm/MainForm';
import { mainSlider } from '@modules/MainScreen/MainScreen';
import { commentsSlider } from '@modules/Comments/Comments';
import { workersSlider } from '@modules/Workers/Workers';
import { Statistic } from '@modules/Statistic/Statistic';
import { HeaderActions } from '@modules/Header/Header';
import '@modules/Contacts/Contacts';

document.addEventListener('DOMContentLoaded', () => {
	const setBodyHidden = bodyActions.hidden();
	const headerActionsInit = new HeaderActions();
	const mobileMenuInit = new MobileMenu();
	const statisticInit = new Statistic();
	const mainFormActionsInit = mainFormActions();
	const wow = new WOW({
		callback: box => {
			if (box.classList.contains('statistic__count')) {
				statisticInit.animate(box);
			}
		},
	});

	window.addEventListener('load', () => {

		const preloaderClose = () => {
			const preloader = document.querySelector('.preloader-page');
			const preloaderCallback = () => {
				document.body.removeChild(preloader);
				bodyActions.scroll();
				wow.init();
			};

			preloaderAction(preloader, 'smoothly-show', preloaderCallback);
		}

		preloaderClose();

	});
});