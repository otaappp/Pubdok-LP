import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Lazy, Autoplay, Pagination, Navigation } from "swiper"
import MobileHeader from "../components/MobileHeader"
import Footer from "../components/Footer"

const About = () => {
	return (
		<div className="w-screen xl:flex-shrink xl:w-full overflow-hidden">
			<MobileHeader />
			<main className="mt-10 bg-[#272727] pb-10 lg:mt-0">
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
				<div className="py-7 px-6">
					<span className="text-9xl text-[#c5a47e]">4</span>
					<p className="uppercase text-white text-4xl tracking-[8px] leading-tight">Years Of experience</p>
					<p className="uppercase text-[#c5a47e] font-light tracking-[6px]">In Photography</p>
				</div>
				<div className="flex flex-col justify-center items-center py-16 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">Professional</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">Our Team</h1>
					<div className="w-screen xl:w-full">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							slidesPerGroup={1}
							loop={true}
							navigation={true}
							// autoplay={{
							// 	delay: 2500,
							// 	disableOnInteraction: false
							// }}
							lazy={true}
							modules={[Lazy, Autoplay, Pagination, Navigation]}
							breakpoints={{
								640: {
									slidesPerView: 2,
									slidesPerGroup: 2
								},
								1024: {
									slidesPerView: 3,
									slidesPerGroup: 3
								}
							}}
							className="px-4"
						>
							<SwiperSlide>
								<div className="h-full w-full bg-[#272727] pt-10 group">
									<div className="relative overflow-hidden">
										<img
											src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
											alt="test"
											className="h-full object-cover object-center brightness-75"
										/>
										<div className="absolute -bottom-full w-full h-full flex items-center justify-center z-20 bg-[#c5a47ecc] group-hover:-translate-y-full transition-all ease-in-out duration-200">
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-facebook-f"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-instagram"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-linkedin-in"></i>
											</div>
										</div>
									</div>
									<div className="h-20 flex flex-col justify-end">
										<p className="text-white font-light tracking-widest text-lg uppercase">Team Member 1</p>
										<p className="secondary-text text-base text-[#999] group-hover:text-[#c5a47e]">Member Position</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="h-full w-full bg-[#272727] pt-10 group">
									<div className="relative overflow-hidden">
										<img
											src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
											alt="test"
											className="h-full object-cover object-center brightness-75"
										/>
										<div className="absolute -bottom-full w-full h-full flex items-center justify-center z-20 bg-[#c5a47ecc] group-hover:-translate-y-full transition-all ease-in-out duration-200">
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-facebook-f"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-instagram"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-linkedin-in"></i>
											</div>
										</div>
									</div>
									<div className="h-20 flex flex-col justify-end">
										<p className="text-white font-light tracking-widest text-lg uppercase">Team Member 2</p>
										<p className="secondary-text text-base text-[#999] group-hover:text-[#c5a47e]">Member Position</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="h-full w-full bg-[#272727] pt-10 group">
									<div className="relative overflow-hidden">
										<img
											src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
											alt="test"
											className="h-full object-cover object-center brightness-75"
										/>
										<div className="absolute -bottom-full w-full h-full flex items-center justify-center z-20 bg-[#c5a47ecc] group-hover:-translate-y-full transition-all ease-in-out duration-200">
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-facebook-f"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-instagram"></i>
											</div>
											<div className="w-8 h-8 mx-3 border-solid border-[1px] border-white rounded-full text-white hover:cursor-pointer">
												<i className="fa-brands fa-linkedin-in"></i>
											</div>
										</div>
									</div>
									<div className="h-20 flex flex-col justify-end">
										<p className="text-white font-light tracking-widest text-lg uppercase">Team Member 3</p>
										<p className="secondary-text text-base text-[#999] group-hover:text-[#c5a47e]">Member Position</p>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default About
