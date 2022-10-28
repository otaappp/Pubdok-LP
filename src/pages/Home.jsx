import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import MobileHeader from "../components/MobileHeader"

const Home = () => {
	let counter = 0
	const carouselElements = document.getElementsByClassName("carousel")
	function changeImg() {
		setInterval(function () {
			if (counter !== carouselElements.length - 1) {
				carouselElements[counter + 1].classList.toggle("opacity-1")
				carouselElements[counter + 1].classList.toggle("opacity-0")
				carouselElements[counter].classList.toggle("opacity-1")
				carouselElements[counter].classList.toggle("opacity-0")
				counter = counter + 1
			} else {
				carouselElements[0].classList.toggle("opacity-1")
				carouselElements[0].classList.toggle("opacity-0")
				carouselElements[carouselElements.length - 1].classList.toggle("opacity-1")
				carouselElements[carouselElements.length - 1].classList.toggle("opacity-0")
				counter = 0
			}
		}, 3000)
	}

	// useEffect(() => {
	// 	let mounted = true

	// 	changeImg()

	// 	return () => (mounted = false)
	// }, [])

	return (
		<div className="w-full xl:flex-shrink xl:w-4/5">
			<MobileHeader />
			<main className="w-full h-screen relative overflow-hidden">
				<div className="h-full w-screen transition-all ease-in-out duration-1000 absolute top-0 carousel">
					<img
						src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-2-1-2048x1152.jpg"
						alt="test"
						className="h-full object-cover object-center xl:w-4/5"
					/>
					<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
						<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Wedding Photo</h2>
						<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
							View More <i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
				<div className="h-full w-screen transition-all ease-in-out duration-1000 absolute top-0 carousel opacity-0">
					<img
						src="https://pubdok.id/wp-content/uploads/2022/02/7-1024x576.jpg"
						alt="test"
						className="h-full object-cover object-center xl:w-4/5"
					/>
					<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
						<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Prewedding Photo</h2>
						<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
							View More <i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
				<div className="h-full w-screen transition-all ease-in-out duration-1000 absolute top-0 carousel opacity-0">
					<img
						src="https://pubdok.id/wp-content/uploads/2022/01/Cover-Web-3-1024x576.jpg"
						alt="test"
						className="h-full object-cover object-center xl:w-4/5"
					/>
					<div className="fixed top-10 w-full h-screen flex flex-col items-center justify-center z-20 xl:w-4/5">
						<h2 className="px-3 leading-tight font-normal tracking-wide text-5xl text-center text-white uppercase">Photo Studio</h2>
						<button className="mt-6 text-white font-light p-4 tracking-widest bg-[#c5a47e] uppercase">
							View More <i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
