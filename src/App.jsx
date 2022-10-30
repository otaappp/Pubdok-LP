import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import { useState } from "react"

function App() {
	const [menu, setMenu] = useState("Home")

	let activeMenu
	switch (menu) {
		case "About Us":
			activeMenu = <About />
			break
		case "Projects":
			activeMenu = <Projects />
			break
		case "Services":
			activeMenu = <Services />
			break
		default:
			activeMenu = <Main />
	}

	return (
		<div className="xl:flex bg-[#272727]">
			<Navbar currentMenu={menu} changeMenu={setMenu} />
			{activeMenu}
		</div>
	)
}

export default App
