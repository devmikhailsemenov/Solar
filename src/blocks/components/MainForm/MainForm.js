import { useValidateForm } from '@helpers/useValidateForm';
import { useAlertModal } from '@helpers/useAlertModal';
import { modal } from '@components/Modal/Modal';
import { fieldText } from '@components/FieldText/FieldText';

/**
 * Обработка форм.
 */
const mainFormActions = () => {
	const mainForm = document.querySelectorAll('.form');

	if (mainForm.length === 0) return;

	mainForm.forEach(form => {
		const fields = form.querySelectorAll('.field-wrap__input');

		const fieldsRequired = [...fields].filter(field => field.classList.contains('field-wrap__input--req'));
		const validateArr = [...fieldsRequired].map(field => ({ field, error: true }));

		const validatemainForm = useValidateForm(validateArr);

		const successSubmitForm = target => {
			target.reset();

			const successModal = useAlertModal({
				title: 'Заявка успешно отправлена!',
				description: `Наш менеджер свяжется с Вами в течение 15 минут.`,
				classes: 'popup-success'
			});

			if (target.closest('.popup')) {
				modal.nextModal({
					current: event.target.closest('.popup'),
					next: successModal,
					nameClasses: {
						enter: 'popup_enter-to',
						leave: 'popup_leave-to'
					},
					type: 'next-delay'
				});
			} else {
				modal.show(successModal);
			}

			fields.forEach(field => fieldText.clear(field));
		}

		const mainFormSubmit = event => {
			const { target } = event;

			event.preventDefault();

			if (validatemainForm() === false) return;

			const formData = new FormData(target);

			successSubmitForm(target);
		}

		form.addEventListener('submit', mainFormSubmit);
	});
}

export { mainFormActions };