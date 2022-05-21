import React from 'react';
import s from './styles.module.scss';

const Team = ({ children }) => {
	return <ul className={s.team}>{children}</ul>;
};

export default Team;
