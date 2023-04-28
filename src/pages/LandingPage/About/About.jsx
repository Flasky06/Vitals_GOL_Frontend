import React from "react";
import TitleElement from "../TitleElement/TitleElement";
import { LinkFilled, LinkTransparent } from "../Links/Links";
import img6 from "../../../assets/images/home-image-6.jpg";

const About = () => {
	return (
		<section className='mt-24 p-8' id='about'>
			<div className='flex items-center w-full'>
				<div className='about__images'>
					{/* images */}
					<img src={img6} alt='vitals' />
				</div>
				<div className='about__text'>
					<TitleElement
						mainTitle='we are happy to serve you'
						subTitle='about us'
					/>
					<p className='mt-5 mb-5 text-justify'>
						From storing patient files online, easily enabling you to make
						appointments with a doctor, maternal systems,to features that enable
						our system to remind patients of their dosage, vitals provides a
						rich set of features that make living a healthy life as easy as ABC.
					</p>
					<div className='about__ctas'>
						<LinkFilled label='get started' />
						<LinkTransparent label='maternal system' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
