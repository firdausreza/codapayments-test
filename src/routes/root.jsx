import { Navbar, Footer } from "../components/index.js";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<header className="border-b border-gray-200">
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer className="bg-app-tertiary">
				<Footer />
			</footer>
		</>
	);
}
