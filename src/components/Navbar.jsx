import React from "react"

const Navbar = () => {
	function toggleNavbar() {
		const navbar = document.querySelector("nav")
		navbar.classList.toggle("translate-x-full")
	}

	return (
		<nav className="w-4/5 bg-[#272727] h-screen text-[#919191] fixed top-0 left-0 transition ease-in-out duration-300 -ml-[80%] z-50">
			<div className="flex flex-row">
				<div className="py-3 px-4 bg-[#c5a47e] w-fit" onClick={toggleNavbar}>
					<i className="fa-solid fa-xmark fa-xl text-[#ffffff]"></i>
				</div>
			</div>
			<div className="px-10 pt-10 text-base font-light tracking-widest">
				<div className="py-4 border-b-[1px] border-b-[#323232]">
					<span className="uppercase">Home</span>
				</div>
				<div className="py-4 border-b-[1px] border-b-[#323232]">
					<span className="uppercase">Projects</span>
				</div>
				<div className="py-4 border-b-[1px] border-b-[#323232]">
					<span className="uppercase">Price List</span>
				</div>
				<div className="py-4 border-b-[1px] border-b-[#323232]">
					<span className="uppercase">Studio Session</span>
				</div>
				<div className="py-4 border-b-[1px] border-b-[#323232]">
					<span className="uppercase">About Us</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
