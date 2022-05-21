import Head from 'next/head';
import CtaSection from '../components/cta-section';
import TestimonialsSection from '../components/testimonials-section';
import BenefitsSection from '../components/benefits-section';
import HomeHeader from '../components/home-header';
import PageWrapper from '../components/page-wrapper';
import { socialsRef } from '../firebase/firebase';
import { getDocs } from 'firebase/firestore';

export default function Home({ socials }) {
	return (
		<PageWrapper footerProps={{ socials }}>
			<Head>
				<title>Home</title>
			</Head>
			<HomeHeader />
			<main>
				<BenefitsSection />
				<TestimonialsSection />
				<CtaSection />
			</main>
		</PageWrapper>
	);
}

export const getStaticProps = async () => {
	const socialsData = await getDocs(socialsRef);
	const socials = socialsData.docs.map((item) => item.data());

	return {
		props: {
			socials,
		},
    revalidate: parseInt(process.env.REVALIDATE_TIME)
	};
};
