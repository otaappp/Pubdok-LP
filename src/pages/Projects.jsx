import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Lazy, Autoplay, Pagination, Navigation } from "swiper"
import MobileHeader from "../components/MobileHeader"
import Footer from "../components/Footer"

const Projects = () => {
	return (
		<div className="w-screen xl:flex-shrink xl:w-full overflow-hidden">
			<MobileHeader />
			<main className="h-auto mt-10 bg-[#272727] pb-10 lg:mt-0">
				<div className="flex flex-col justify-center items-center py-10 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">Portfolio</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">Our Projects</h1>
				</div>
				<div className="h-[70vh] px-4 sm:px-10 lg:px-14 xl:px-10 xxl:pr-14 xxl:pl-0">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						slidesPerGroup={1}
						loop={true}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
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
						className="mySwiper"
					>
						<SwiperSlide>
							<div className="relative h-full w-full group">
								<img
									src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-2-1-2048x1152.jpg"
									alt="test"
									className="h-full object-cover object-center xl:w-full brightness-75 group-hover:brightness-50 transition-all ease-in-out duration-200"
								/>
								<div className="absolute -bottom-7 w-full flex flex-col items-center justify-center z-20 group-hover:-translate-y-10 transition-all ease-in-out duration-200">
									<h1 className="uppercase text-[#c5a47e] text-sm font-light tracking-[6px]">Wedding Photo</h1>
									<h2 className="mt-2 px-3 leading-tight font-light tracking-widest text-2xl text-center text-white uppercase">Farhan & Ami</h2>
									<button className="mt-4 text-white bg-transparent">
										<i className="fa-solid fa-arrow-right fa-xl"></i>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative h-full w-full group">
								<img
									src="https://pubdok.id/wp-content/uploads/2022/02/7-1024x576.jpg"
									alt="test"
									className="h-full object-cover object-center xl:w-full brightness-75 group-hover:brightness-50 transition-all ease-in-out duration-200"
								/>
									<div className="absolute -bottom-7 w-full flex flex-col items-center justify-center z-20 group-hover:-translate-y-10 transition-all ease-in-out duration-200">
										<h1 className="uppercase text-[#c5a47e] text-sm font-light tracking-[6px]">Wedding Photo</h1>
										<h2 className="mt-2 px-3 leading-tight font-light tracking-widest text-2xl text-center text-white uppercase">Farhan & Ami</h2>
										<button className="mt-4 text-white bg-transparent">
											<i className="fa-solid fa-arrow-right fa-xl"></i>
										</button>
									</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative h-full w-full group">
								<img
									src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-3-1024x576.jpg"
									alt="test"
									className="h-full object-cover object-center xl:w-full brightness-75 group-hover:brightness-50 transition-all ease-in-out duration-200"
								/>
									<div className="absolute -bottom-7 w-full flex flex-col items-center justify-center z-20 group-hover:-translate-y-10 transition-all ease-in-out duration-200">
										<h1 className="uppercase text-[#c5a47e] text-sm font-light tracking-[6px]">Wedding Photo</h1>
										<h2 className="mt-2 px-3 leading-tight font-light tracking-widest text-2xl text-center text-white uppercase">Farhan & Ami</h2>
										<button className="mt-4 text-white bg-transparent">
											<i className="fa-solid fa-arrow-right fa-xl"></i>
										</button>
									</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mt-10 mx-4 py-12 px-5 border-8 border-solid border-[#c5a47e] text-center sm:mx-10 lg:mx-14 xl:mx-36 xl:mt-24 xxl:mx-80">
					<p className="uppercase text-[#c5a47e] text-sm font-light tracking-[6px]">Pinpin Cahyadi</p>
					<p className="secondary-text mt-1 font-light text-white tracking-widest">Owner</p>
					<p className="mt-5 text-white font-thin tracking-widest italic">
						<q>
							We love to capture documentation in which there are many emotions that are described telling of happiness, smiles, tears of
							happiness.
						</q>
					</p>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Projects
