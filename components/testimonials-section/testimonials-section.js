import React from 'react';
import SectionInner from '../section-inner';
import Heading from '../heading';
import Image from 'next/image';
import s from './styles.module.scss';

const TestimonialsSection = () => {
	return (
		<section className={s.testimonialsSection}>
			<SectionInner className={s.testimonialsSectionInner} containerType="small">
				<div className={s.title}>
					<Heading type="heading-2" as="h2">
						Delivering real results for top companies. Some of our{' '}
						<span className={s.titleSecondary}>success stories.</span>
					</Heading>
				</div>
				<ul className={s.testimonials}>
					<li className={s.testimonialsItem}>
						<figure className={s.testimonialsItemWrapper}>
							<blockquote className={s.testimonialsQuote}>
								<p className={s.testimonialsQuoteText}>
									“The team perfectly fit the specialized skill set required.
									They focused on the most essential features helping us launch
									the platform eight months faster than planned.”
								</p>
							</blockquote>
							<figcaption>
								<p className={s.testimonialsAuthor}>Kady Baker</p>
								<p className={s.testimonialsPosition}>
									Product Manager at Bookmark
								</p>
								<div className={s.testimonialsImageWrapper}>
									<Image
										className={s.testimonialsImage}
										src="/assets/avatar-kady.jpg"
										alt="Kady Baker's Photo"
										width={62}
										height={62}
									/>
								</div>
							</figcaption>
						</figure>
					</li>
					<li className={s.testimonialsItem}>
						<figure className={s.testimonialsItemWrapper}>
							<blockquote className={s.testimonialsQuote}>
								<p className={s.testimonialsQuoteText}>
									“We needed to automate our entire onboarding process. The team
									came in and built out the whole journey. Since going live,
									user retention has gone through the roof!”
								</p>
							</blockquote>
							<figcaption>
								<p className={s.testimonialsAuthor}>Aiysha Reese</p>
								<p className={s.testimonialsPosition}>Founder of Manage</p>
								<div className={s.testimonialsImageWrapper}>
									<Image
										className={s.testimonialsImage}
										src="/assets/avatar-aiysha.jpg"
										alt="Aiysha Reese's Photo"
										width={62}
										height={62}
									/>
								</div>
							</figcaption>
						</figure>
					</li>
					<li className={s.testimonialsItem}>
						<figure className={s.testimonialsItemWrapper}>
							<blockquote className={s.testimonialsQuote}>
								<p className={s.testimonialsQuoteText}>
									“Amazing. Our team helped us build an app that delivered a new
									experience for hiring a physio. The launch was an instant
									success with 100k downloads in the first month.”
								</p>
							</blockquote>
							<figcaption>
								<p className={s.testimonialsAuthor}>Arthur Clarke</p>
								<p className={s.testimonialsPosition}>Co-founder of MyPhysio</p>
								<div className={s.testimonialsImageWrapper}>
									<Image
										className={s.testimonialsImage}
										src="/assets/avatar-arthur.jpg"
										alt="Arthur Clarke's Photo"
										width={62}
										height={62}
									/>
								</div>
							</figcaption>
						</figure>
					</li>
				</ul>
			</SectionInner>
		</section>
	);
};

export default TestimonialsSection;
