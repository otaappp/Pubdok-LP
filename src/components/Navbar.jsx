import React from "react"

const Navbar = ({currentMenu, changeMenu}) => {
	const staticMenu = ["Home", "Services", "Projects", "About Us"]
	const menuList = staticMenu.map((menu, index) => {
		return(
			<div
				className={`py-4 border-b-[1px] ${currentMenu === menu && "text-[#c5a47e]"} border-b-[#323232] xl:hover:text-[#c5a47e] xl:hover:cursor-pointer`}
				key={index.toString()}
				onClick={() => clickMenu(menu)}
			>
				<span className="uppercase">{menu}</span>
			</div>
		)
	})

	function clickMenu(menu) {
		changeMenu(menu)
		toggleNavbar()
	}

	function toggleNavbar() {
		const navbar = document.querySelector("nav")
		if (window.innerWidth < 1280) {
			return navbar.classList.toggle("translate-x-full")
		}

		return
	}

	return (
		<nav className="w-4/5 bg-[#272727] h-screen text-[#919191] fixed top-0 left-0 transition ease-in-out duration-300 -ml-[80%] z-50 xl:static xl:w-1/4 xl:ml-0">
			<div className="flex flex-row xl:block">
				<div className="py-3 px-4 bg-[#c5a47e] w-fit xl:hidden" onClick={toggleNavbar}>
					<i className="fa-solid fa-xmark fa-xl text-[#ffffff]"></i>
				</div>
				<div className="hidden xl:block xl:text-center xl:py-16 xl:px-4">
					<h1 className="uppercase font-normal text-[#c5a47e] tracking-widest text-5xl">Pubdok</h1>
					<span className="mt-2 uppercase text-sm font-light tracking-[6px]">Photograph</span>
				</div>
			</div>
			<div className="px-8 pt-10 text-base font-light tracking-widest xl:pt-0 xxl:px-14">
				{menuList}
			</div>
		</nav>
	)
}

export default Navbar
