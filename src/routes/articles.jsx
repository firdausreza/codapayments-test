import { Link } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons-react";
import CodashopLogo from "../assets/img/coda-logo.png";

export default function ArticlesPage() {
	return (
		<section id="articles-container" className="w-full">
			<Link
				to="/"
				reloadDocument
				className="flex items-center text-sm text-app-primary hover:underline underline-offset-2"
			>
				<IconChevronLeft size={16} />
				Back to Homepage
			</Link>
			<h3 className="text-4xl font-bold text-app-primary mt-4">
				Getting Started
			</h3>
			<figure className="max-w-[300px] mt-8">
				<img src={CodashopLogo} alt="Codashop" className="w-full" />
			</figure>
			<p className="mt-8 text-justify text-lg text-gray-700">
				Welcome to Codashop. With Codashop, you can make apps and games
				purchase with no registration or login required. Purchases made
				are added to your game account instantly. We are now trusted by
				millions of gamers and digital consumers in over 6 markets
				worldwide.
				<br />
				<br />
				Check out these helpful articles on the left panel to get
				started with Codashop and our other products!
			</p>
		</section>
	);
}
