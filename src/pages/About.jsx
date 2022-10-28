import React from "react"
import MobileHeader from "../components/MobileHeader"

const About = () => {
	return (
		<div className="w-full xl:flex-shrink xl:w-4/5">
			<MobileHeader />
			<main className="mt-10 bg-[#272727]">
				<div className="flex flex-col justify-center items-center py-10 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">About Us</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">About Pubdok</h1>
				</div>
				<div className="px-4 font-light text-[#999] leading-loose">
					<article className="secondary-text">
						<p>We are photographers based in Sumedang, West Java, Indonesia.</p>
						<p>
							We love to capture documentation in which there are many emotions that are described telling of happiness, smiles, tears of
							happiness.
						</p>
						<p>
							We have been established since 2018 until now. PBDK. is an acronym for publication and documentation inspired to capture moments of
							happiness such as engagement, prewedding, siraman, ngaras and weddings. pbdk. also has a studio to capture the moment with family,
							friends or partner.
						</p>
						<p>
							<q>Visual tell stories</q> We try to tell stories by using pictures. of course the pictures that contain deep meaning and full of
							emotion. for all! I hope we meet in your happy moments.
						</p>
					</article>
				</div>
				<div className="py-7 px-4">
					<span className="text-9xl text-[#c5a47e]">4</span>
					<p className="uppercase text-white text-4xl tracking-[8px] leading-tight">Years Of experience</p>
					<p className="uppercase text-[#c5a47e] font-light tracking-[6px]">In Photography</p>
				</div>
				<div className="flex flex-col justify-center items-center py-16 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">Professional</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">Our Team</h1>
				</div>
			</main>
		</div>
	)
}

export default About
