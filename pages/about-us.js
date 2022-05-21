import Head from 'next/head';
import TeamSection from '../components/team-section';
import CtaSection from '../components/cta-section';
import ClientsSection from '../components/clients-section';
import AboutHeader from '../components/about-header';
import PageWrapper from '../components/page-wrapper';
import { db, socialsRef } from '../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';
import sortByOrder from '../helpers/sort-by-order';

const teamRef = collection(db, 'team');

export default function AboutUs({ team, socials }) {
	return (
		<PageWrapper footerProps={{ socials }}>
			<Head>
				<title>About Us</title>
			</Head>
			<AboutHeader />
			<main>
				<TeamSection team={team} />
				<ClientsSection />
				<CtaSection />
			</main>
		</PageWrapper>
	);
}

export const getStaticProps = async () => {
	const [teamData, socialsData] = await Promise.all([
		await getDocs(teamRef),
		await getDocs(socialsRef),
	]);
	const team = teamData.docs
		.map((item) => ({ ...item.data(), id: item.id }))
		.sort(sortByOrder);
	const socials = socialsData.docs.map((item) => item.data());

	return {
		props: {
			team,
			socials,
		},
	};
};
