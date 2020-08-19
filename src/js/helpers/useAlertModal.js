/**
 * Генерирует шаблон модального окна и открывает его.
 * @param  {String} options.id          - id модального окна
 * @param  {String} options.title       - текст заголовока
 * @param  {String} options.description - текст описания
 * @param  {String} options.btn         - текст кнопки
 * @param  {String} options.classes     - наименования классов
 * @return {Object} popup               - созданное модальное окно(DOM-элемент)
 */
const useAlertModal = ({ id = 'alert-modal', title, description, btn, classes }) => {
	const popup = document.createElement('div');

	popup.id = id;
	popup.className = classes ? classes + ' popup box-hidden shadow-block' : 'popup box-hidden shadow-block';
	popup.insertAdjacentHTML('beforeend', `
		<span class='popup__close-btn popup-close'></span>
		${ title ? 
			`<div class='popup__title-wrap section-title-wrap'> 
				<h2 class='popup__title'>${ title }</h2>
			</div>`
			: '' 
		}
		${ description ? `<p class='section-descr'>${ description }</p>` : '' }
		${ btn ?
			`<div class='popup__btn-wrap'>
				<button class='btn btn--blue popup-close'>${ btn }</div>
			</div>`
			: ''
		}
	`);

	document.body.append(popup);

	popup.addEventListener('afterHide', event => popup.remove());

	return popup;
}

export { useAlertModal };
