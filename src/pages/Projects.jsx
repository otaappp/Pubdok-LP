import React from "react"
import MobileHeader from "../components/MobileHeader"

const Projects = () => {
	return (
		<div className="w-full xl:flex-shrink xl:w-4/5">
			<MobileHeader />
			<main className="mt-10 bg-[#272727]">
				<div className="flex flex-col justify-center items-center py-10 px-5">
					<h3 className="uppercase text-[#c5a47e] font-light tracking-[6px]">Portfolio</h3>
					<h1 className="uppercase text-4xl tracking-[8px] text-white text-center leading-tight">Our Projects</h1>
				</div>
				<div></div>
			</main>
		</div>
	)
}

export default Projects
