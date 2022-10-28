import React from "react"
import MobileHeader from "../components/MobileHeader"

const Services = () => {
	return (
		<div className="w-full xl:flex-shrink xl:w-4/5">
			<MobileHeader />
			<main className="mt-10 bg-[#272727]">
				<div className="flex flex-col justify-center items-center py-10 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">What we do</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">our services</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 px-4">
					<div className="group relative flex flex-col justify-center py-9 px-5 overflow-hidden">
						<span className="text-[#999] text-6xl z-10 group-hover:text-white transition-all ease-in-out duration-300">01</span>
						<h1 className="uppercase mt-5 text-[#c5a47e] font-light tracking-[6px] z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Prewedding Photo
						</h1>
						<p className="secondary-text mt-5 font-light text-[#999] leading leading-loose z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Architecture bibendum eros eget lacus the vulputate, sit amet vehicula nibh placerat in lectus vitae justo pulvinar cursus.
						</p>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/02/GIG_4664-1-1024x576.jpg"
							alt="..."
							className="absolute top-0 left-0 h-full object-cover opacity-0 group-hover:opacity-60 transition-all ease-in-out duration-300"
						/>
					</div>
					<div className="group relative flex flex-col justify-center py-9 px-5 overflow-hidden">
						<span className="text-[#999] text-6xl z-10 group-hover:text-white transition-all ease-in-out duration-300">01</span>
						<h1 className="uppercase mt-5 text-[#c5a47e] font-light tracking-[6px] z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Prewedding Photo
						</h1>
						<p className="secondary-text mt-5 font-light text-[#999] leading leading-loose z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Architecture bibendum eros eget lacus the vulputate, sit amet vehicula nibh placerat in lectus vitae justo pulvinar cursus.
						</p>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/02/GIG_4664-1-1024x576.jpg"
							alt="..."
							className="absolute top-0 left-0 h-full object-cover opacity-0 group-hover:opacity-60 transition-all ease-in-out duration-300"
						/>
					</div>
					<div className="group relative flex flex-col justify-center py-9 px-5 overflow-hidden">
						<span className="text-[#999] text-6xl z-10 group-hover:text-white transition-all ease-in-out duration-300">01</span>
						<h1 className="uppercase mt-5 text-[#c5a47e] font-light tracking-[6px] z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Prewedding Photo
						</h1>
						<p className="secondary-text mt-5 font-light text-[#999] leading leading-loose z-10 group-hover:text-white transition-all ease-in-out duration-300">
							Architecture bibendum eros eget lacus the vulputate, sit amet vehicula nibh placerat in lectus vitae justo pulvinar cursus.
						</p>
						<img
							src="https://pubdok.id/wp-content/uploads/2022/02/GIG_4664-1-1024x576.jpg"
							alt="..."
							className="absolute top-0 left-0 h-full object-cover opacity-0 group-hover:opacity-60 transition-all ease-in-out duration-300"
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Services
