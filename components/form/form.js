import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Input from '../input';
import Field from '../field';
import Button from '../button';
import TextArea from '../textarea';
import s from './styles.module.scss';
import useForm from '../../hooks/use-form';
import { db } from '../../firebase/firebase';
import ErrorMessage from '../error-message/error-message';

const contactFormRef = collection(db, 'contact-form');

const Form = () => {
	const { status, errors, handleSubmit } = useForm(
		{
			name: '',
			email: '',
			['company-name']: '',
			title: '',
			message: '',
		},
		(data) => {
			addDoc(contactFormRef, data);
		}
	);

	const isSubmitting = status === 'submitting';

	return (
		<form className={s.form} method="post" noValidate onSubmit={handleSubmit}>
			<Field name="name" errorMessage={errors.name}>
				<Input invalid={!!errors.name} name="name" placeholder="Name" />
			</Field>
			<Field name="email" errorMessage={errors.email}>
				<Input
					invalid={!!errors.email}
					name="email"
					placeholder="Email Address"
					type="email"
				/>
			</Field>
			<Field name="company-name" errorMessage={errors['company-name']}>
				<Input
					invalid={!!errors['company-name']}
					name="company-name"
					placeholder="Company Name"
				/>
			</Field>
			<Field name="title" errorMessage={errors.title}>
				<Input invalid={errors.title} name="title" placeholder="Title" />
			</Field>
			<Field name="message" errorMessage={errors.message}>
				<TextArea
					invalid={errors.message}
					name="message"
					placeholder="Message"
				/>
			</Field>
			{status === 'submitted' && (
				<div className={s.submittedText}>
					Thank you, the form is submitted! We will text you soon!
				</div>
			)}
			{status === 'error' && (
				<ErrorMessage size="medium">
					Something wrong happened, please try again later...
				</ErrorMessage>
			)}
			<div className={s.submitButton}>
				<Button isLoading={isSubmitting} appearance="secondary" type="submit">
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</Button>
			</div>
		</form>
	);
};

export default Form;
