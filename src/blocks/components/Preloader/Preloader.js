import { smoothly } from '@helpers/smoothly.js';

export const preloaderAction = (preloader, nameClass, preloaderCallback) => {
	setTimeout(()=> {
		smoothly.transitionNone(preloader, nameClass, preloaderCallback);
	}, 500)
}