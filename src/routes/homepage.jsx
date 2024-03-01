import { Link } from "react-router-dom";
import Codashop1 from "../assets/img/codashop-1.webp";
import Codashop2 from "../assets/img/codashop-2.webp";

import {
	IconMessageShare,
	IconBrandFacebookFilled,
	IconChevronRight,
} from "@tabler/icons-react";

export default function Homepage() {
	return (
		<>
			<section
				id="coda-jumbotron"
				className="min-h-[60vh] md:min-h-[80vh] bg-app-secondary flex"
			>
				<article
					id="jumbotron-container"
					className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-8"
				>
					<section id="jumbotron-title" className="w-full md:w-[50%]">
						<h1 className="font-type-title text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase">
							Your trusted gaming marketplace
						</h1>
					</section>
					<section
						id="jumbotron-images"
						className="w-full md:w-[50%] flex justify-center items-center mt-8 md:mt-0"
					>
						<div className="w-[300px] h-[300px] relative">
							<img
								src={Codashop1}
								alt="Coda 1"
								className="w-[175px] md:w-[250px] absolute top-0 left-0 md:top-[-50px] md:left-[-50px] z-0"
							/>
							<img
								src={Codashop2}
								alt="Coda 2"
								className="w-[175px] md:w-[250px] absolute bottom-0 right-0 md:bottom-[-25px] md:right-[-50px] z-10"
							/>
						</div>
					</section>
				</article>
			</section>
			<section id="transition-product">
				<img
					src="https://assets-global.website-files.com/6233b1211fd8d8b118920de1/626b26e7a3bda46802b93955_main-solution-codashop.svg"
					alt=""
					className="w-full object-cover"
				/>
			</section>
			<section id="products" className="min-h-[50vh] flex">
				<article className="max-w-7xl mx-auto px-4 py-8 md:py-16">
					<h3 className="font-type-title text-3xl md:text-4xl text-center font-bold uppercase text-app-primary">
						Our products
					</h3>
					<div className="w-full md:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-12">
						<div
							id="codashop-card"
							className="w-full sm:basis-[45%] md:basis-[33%] bg-app-primary rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<h3 className="font-type-title text-2xl font-medium text-app-quartiary leading-tight flex items-center">
								Codashop
							</h3>
							<p className="text-md text-white leading-tight mt-2">
								Trusted game marketplace by gamers across
								worldwide.
							</p>
							<Link
								to="https://www.codapayments.com/codashop"
								target="_blank"
								className="flex items-center text-app-tertiary hover:underline underline-offset-1 mt-2"
							>
								Learn more
								<span className="ms-1">
									<IconChevronRight size={16} />
								</span>
							</Link>
						</div>
						<div
							id="codapay-card"
							className="w-full min-[475px]:basis-[45%] md:basis-[33%] bg-app-primary rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<h3 className="font-type-title text-2xl font-medium text-app-quartiary leading-tight flex items-center">
								Codapay
							</h3>
							<p className="text-md text-white leading-tight mt-2">
								Integrate your apps with Coda Payments with
								ease.
							</p>
							<Link
								to="https://www.codapayments.com/codapay"
								target="_blank"
								className="flex items-center text-app-tertiary hover:underline underline-offset-1 mt-2"
							>
								Learn more
								<span className="ms-1">
									<IconChevronRight size={16} />
								</span>
							</Link>
						</div>
						<div
							id="xshop-card"
							className="w-full min-[475px]:basis-[45%] md:basis-[33%] bg-app-primary rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<h3 className="font-type-title text-2xl font-medium text-app-quartiary leading-tight flex items-center">
								XShop
							</h3>
							<p className="text-md text-white leading-tight mt-2">
								Integrate Codashop to popular e-commerce and
								super apps with less effort.
							</p>
							<Link
								to="https://www.codapayments.com/xshop"
								target="_blank"
								className="flex items-center text-app-tertiary hover:underline underline-offset-1 mt-2"
							>
								Learn more
								<span className="ms-1">
									<IconChevronRight size={16} />
								</span>
							</Link>
						</div>
						<div
							id="customCommerce-card"
							className="w-full min-[475px]:basis-[45%] md:basis-[33%] bg-app-primary rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<h3 className="font-type-title text-2xl font-medium text-app-quartiary leading-tight flex items-center">
								Custom Commerce
							</h3>
							<p className="text-md text-white leading-tight mt-2">
								Build and deliver your Direct-to-Consumer
								strategy with our Custom Commerce solutions.
							</p>
							<Link
								to="https://www.codapayments.com/customcommerce"
								target="_blank"
								className="flex items-center text-app-tertiary hover:underline underline-offset-1 mt-2"
							>
								Learn more
								<span className="ms-1">
									<IconChevronRight size={16} />
								</span>
							</Link>
						</div>
					</div>
				</article>
			</section>
			<section id="transition-contacts">
				<img
					src="https://assets-global.website-files.com/6233b1211fd8d8b118920de1/6233ba2021f2ef516ebf4716_horisontal-tears-deep.svg"
					alt="transition2"
					className="w-full"
				/>
			</section>
			<section
				id="contacts"
				className="min-h-[300px] bg-app-primary flex"
			>
				<article className="max-w-7xl mx-auto px-4 py-8 md:py-16">
					<h3 className="font-type-title text-3xl md:text-4xl text-center font-bold uppercase text-app-quartiary">
						Contact our customer support
					</h3>
					<div className="w-full flex flex-wrap items-center justify-center mt-8 md:mt-12 gap-4">
						<div
							id="send-message-card"
							className="w-full min-[475px]:basis-[45%] md:basis-[33%] bg-white rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<IconMessageShare
								size={32}
								className="text-app-primary"
							/>
							<h5 className="text-lg font-bold text-app-primary leading-tight mt-2">
								Send us a message
							</h5>
							<p className="text-md text-gray-600 leading-tight mt-2">
								We will get back to you in 24 hours or less
							</p>
						</div>
						<div
							id="send-message-card"
							className="w-full min-[475px]:basis-[45%] md:basis-[33%] bg-white rounded-lg flex flex-col self-stretch items-start p-4"
						>
							<IconBrandFacebookFilled
								size={32}
								className="text-app-primary"
							/>
							<h5 className="text-lg font-bold text-app-primary leading-tight mt-2">
								Send direct facebook message
							</h5>
							<p className="text-md text-gray-600 leading-tight mt-2">
								To get quick response from the customer services
							</p>
						</div>
					</div>
				</article>
			</section>
			<section id="transition-faq">
				<img
					src="https://assets-global.website-files.com/6233b1211fd8d8b118920de1/6233ba2021f2ef516ebf4716_horisontal-tears-deep.svg"
					alt="transition2"
					className="w-full rotate-180 -mt-2"
				/>
			</section>
			<section id="faq">
				<article
					id="faq-container"
					className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col items-center"
				>
					<h3 className="font-type-title text-3xl md:text-4xl text-center font-bold uppercase text-app-secondary">
						Frequently Asked Questions
					</h3>
					<p className="text-lg font-semibold mt-8 text-center">
						Getting lost in our products? Check these FAQs to answer
						your current problem!
					</p>
					<Link to="/articles" reloadDocument>
						<button className="w-max mt-8 px-4 py-2 rounded-full bg-app-secondary hover:bg-app-secondary/95 text-white transition-colors">
							See Articles
						</button>
					</Link>
				</article>
			</section>
		</>
	);
}
