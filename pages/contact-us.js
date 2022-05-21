import Head from 'next/head';
import ContactHeader from '../components/contact-header';
import ContactContent from '../components/contact-content';
import PageWrapper from '../components/page-wrapper';
import { socialsRef } from '../firebase/firebase';
import { getDocs } from 'firebase/firestore';

export default function ContactUs({ socials }) {
	return (
		<PageWrapper footerProps={{ socials }}>
			<Head>
				<title>Contact Us</title>
			</Head>
			<ContactHeader />
			<main>
				<ContactContent />
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
	};
};
