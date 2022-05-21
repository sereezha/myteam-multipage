import React from 'react';
import classNames from 'classnames';
import Input from '../input';
import s from './styles.module.scss';

const Textarea = (props) => {
	return <Input {...props} isTextArea />;
};

export default Textarea;
