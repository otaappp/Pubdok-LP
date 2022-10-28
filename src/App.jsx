import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Services from "./pages/Services"

function App() {
	return (
		<div className="xl:flex">
			<Navbar />
			{/* <Home /> */}
			{/* <Projects /> */}
			{/* <About /> */}
			<Services />
		</div>
	)
}

export default App
