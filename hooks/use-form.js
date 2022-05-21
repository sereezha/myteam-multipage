import { useState } from 'react';
import isValidEmail from '../helpers/forms/is-valid-email';

const validateEmail = (value) => {
	if (!isValidEmail(value)) {
		return 'Please, enter valid email';
	}

	return '';
};

const getFieldError = (name, value) => {
	if (!value.length) return 'This field is required';
	switch (name) {
		case 'email':
			return validateEmail(value);

		default:
			return '';
	}
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useForm = (inputs = {}, onSubmit = () => {}) => {
	const [status, setStatus] = useState('idle');
	const [errors, setErrors] = useState(inputs);

	const handleSubmit = async (event) => {
		setStatus('idle');
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		const fieldValues = Object.entries(data);
		const errors = fieldValues.reduce((acc, [name, value]) => {
			const val = { [name]: getFieldError(name, value) };
			acc = { ...acc, ...val };
			return acc;
		}, {});

		const isFormValid = Object.values(errors).every((value) => !value.length);

		setErrors((prevState) => ({ ...prevState, ...errors }));

		if (!isFormValid) {
			return;
		}

		setStatus('submitting');
		try {
			await sleep(1000);
			onSubmit(data);
			form.reset();
			setStatus('submitted');

			await sleep(2000);
			setStatus('idle');
		} catch (err) {
			setStatus('error');
		}
	};

	return { status, errors, handleSubmit };
};

export default useForm;
