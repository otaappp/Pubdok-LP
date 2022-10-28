import React from "react"

const MobileHeader = () => {
	function toggleNavbar() {
		const navbar = document.querySelector("nav")
		navbar.classList.toggle("translate-x-full")
	}

	return (
		<header className="fixed top-0 w-full flex items-center py-1 px-4 bg-[#c5a47e] text-white z-20 xl:hidden">
			<div onClick={toggleNavbar}>
				<i className="fa-solid fa-bars fa-lg"></i>
			</div>
			<div className="flex-grow text-center">
				<h1 className="text-3xl uppercase font-light">PBDK</h1>
			</div>
		</header>
	)
}

export default MobileHeader
