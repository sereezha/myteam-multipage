import React from 'react';
import Heading from '../heading';
import SectionInner from '../section-inner';
import { TeamMember, Team } from './components';
import s from './styles.module.scss';

const TeamSection = ({ team }) => {
	return (
		<section className={s.teamSection}>
			<SectionInner className={s.teamSectionInner} containerType="small">
				<div className={s.title}>
					<Heading as="h2" type="heading-2">
						Meet the directors
					</Heading>
				</div>
				<Team>
					{team.map((member) => (
						<TeamMember key={member.id} member={member} />
					))}
				</Team>
			</SectionInner>
		</section>
	);
};

export default TeamSection;
