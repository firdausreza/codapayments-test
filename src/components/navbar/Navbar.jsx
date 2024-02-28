import { Link } from "react-router-dom";
import CodaLogo from "../../assets/img/coda-logo.png";
import { IconSearch, IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

export default function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);

	const toggleNavbarExpand = () => {
		const tempExpandNavbar = !expandNavbar;
		setExpandNavbar(tempExpandNavbar);
	};

	return (
		<nav className="max-w-7xl mx-auto flex flex-col">
			<div
				id="nav-container"
				className="w-full flex justify-between items-center py-2 md:py-4 px-4"
			>
				<div className="md:w-[66%]">
					<Link to="/">
						<figure className="max-w-[150px] md:max-w-[200px]">
							<img
								src={CodaLogo}
								alt="Codashop logo"
								className="w-full"
							/>
						</figure>
					</Link>
				</div>
				<div
					id="search-bar-desktop"
					className="hidden md:block md:w-[33%]"
				>
					<div className="flex border border-app-primary rounded-lg items-center">
						<input
							type="text"
							name="search-article"
							id="search-article"
							className="flex-1 px-2 py-2 rounded-l-lg focus:outline-none text-sm border-r border-app-primary"
							placeholder="Search for article"
						/>
						<button className="bg-transparent rounded-r-lg active:bg-app-primary p-2">
							<IconSearch
								size={20}
								className="text-app-primary active:text-white"
							/>
						</button>
					</div>
				</div>
				<div id="burger-button" className="md:hidden">
					<button
						className="bg-transparent rounded-lg border border-app-primary p-2 active:bg-app-primary"
						onClick={toggleNavbarExpand}
					>
						<IconMenu2
							size={20}
							className="text-app-primary active:text-white"
						/>
					</button>
				</div>
			</div>
			<div
				id="search-bar-mobile"
				className={`${
					expandNavbar ? "block" : "hidden"
				} md:hidden w-full flex flex-col p-4 bg-app-primary`}
			>
				<div className="w-full flex flex-col">
					<label
						htmlFor="search-article-mobile"
						className="text-white text-sm"
					>
						Search
					</label>
					<div className="flex border border-app-primary rounded-lg items-center">
						<input
							type="text"
							name="search-article"
							id="search-article"
							className="flex-1 px-2 py-2 rounded-l-lg focus:outline-none text-sm border-r border-app-primary"
							placeholder="Search for article"
						/>
						<button className="bg-white p-2 rounded-r-lg active:bg-app-primary">
							<IconSearch
								size={20}
								className="text-app-primary active:text-white"
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
