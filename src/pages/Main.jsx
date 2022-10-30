import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Lazy, Autoplay, Pagination, Navigation } from "swiper"
import MobileHeader from "../components/MobileHeader"

const Main = () => {
	return (
		<div className="w-full xl:w-4/5">
			<MobileHeader />
			<main className="w-screen h-[93vh] mt-[7vh] relative overflow-hidden xl:w-full xl:h-full xl:mt-0">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					slidesPerGroup={1}
					loop={true}
					pagination={{
						clickable: true
					}}
					navigation={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false
					}}
					lazy={true}
					modules={[Lazy, Autoplay, Pagination, Navigation]}
				>
					<SwiperSlide>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-2-1-2048x1152.jpg"
							alt="test"
							className="h-full object-cover object-center xl:w-full brightness-75"
						/>
						<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
							<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Wedding Photo</h2>
							<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
								View More <i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</SwiperSlide>
        			<SwiperSlide>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/02/7-1024x576.jpg"
							alt="test"
							className="h-full object-cover object-center xl:w-full brightness-75"
						/>
						<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
							<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Wedding Photo</h2>
							<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
								View More <i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</SwiperSlide>
        			<SwiperSlide>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-3-1024x576.jpg"
							alt="test"
							className="h-full object-cover object-center xl:w-full brightness-75"
						/>
						<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
							<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Wedding Photo</h2>
							<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
								View More <i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</SwiperSlide>
				</Swiper>
			</main>
		</div>
	)
}

export default Main
