import { IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconSquareLetterG,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<section className="max-w-7xl mx-auto px-4 py-4 md:py-8">
			<section
				id="footer-header"
				className="w-full flex flex-wrap items-center justify-between pb-6 border-b border-app-primary gap-2"
			>
				<Link
					to="https://codapayments.com/"
					className="font-type-title text-2xl font-bold text-app-primary"
				>
					Coda Payments
				</Link>
				<div className="flex items-center">
					<Link
						to="https://linkedin.com/company/coda-payments/"
						className="text-app-primary hover:text-white transition-colors"
					>
						<IconBrandLinkedin size={36} />
					</Link>
					<Link
						to="https://glassdoor.sg/Overview/Working-at-Coda-Payments-EI_IE2595921.11,24.htm"
						className="text-app-primary hover:text-white transition-colors ms-2"
					>
						<IconSquareLetterG size={32} />
					</Link>
					<Link
						to="https://global.support.codashop.com/hc/en-us/articles/360001939295-Where-to-contact-Codashop-Customer-Support"
						className="text-app-primary hover:text-app-white ms-2"
					>
						<button className="px-4 py-2 rounded-full bg-app-primary hover:bg-app-primary/90 text-white transition-colors">
							Contact us
						</button>
					</Link>
				</div>
			</section>
			<section
				id="footer-body"
				className="w-full grid grid-cols-1 min-[475px]:grid-cols-2 md:grid-cols-4 gap-4 mt-8"
			>
				<div
					id="footer-links-products"
					className="text-app-primary flex flex-col items-start"
				>
					<h5 className="text-xl font-bold">Products</h5>
					<Link
						to="https://www.codapayments.com/codashop"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-4"
					>
						Codashop
					</Link>
					<Link
						to="https://www.codapayments.com/codapay"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Codapay
					</Link>
					<Link
						to="https://www.codapayments.com/xshop"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						xShop
					</Link>
					<Link
						to="https://www.codapayments.com/customcommerce"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Custom Commerce
					</Link>
				</div>
				<div
					id="footer-links-company"
					className="text-app-primary flex flex-col items-start"
				>
					<h5 className="text-xl font-bold">Company</h5>
					<Link
						to="https://www.codapayments.com/about"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-4"
					>
						About Coda
					</Link>
					<Link
						to="https://www.codapayments.com/culture"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Culture
					</Link>
					<Link
						to="https://www.codapayments.com/careers"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Careers
					</Link>
					<Link
						to="https://www.codapayments.com/press-center"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Press Center
					</Link>
				</div>
				<div
					id="footer-links-resources"
					className="text-app-primary flex flex-col items-start"
				>
					<h5 className="text-xl font-bold">Resources</h5>
					<Link
						to="https://www.codapayments.com/market-guide"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-4"
					>
						Market Guides
					</Link>
					<Link
						to="https://coda-payments.gitbook.io/coda-public-technical-documentation/"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Documentation
					</Link>
					<Link
						to="https://www.codapayments.com/payment-channel-coverage"
						className="font-semibold hover:text-white transition-colors hover:underline underline-offset-1 mt-2"
					>
						Payment Channel Coverage
					</Link>
				</div>
				<div
					id="footer-links-social-media"
					className="text-app-primary flex flex-col items-start"
				>
					<h5 className="text-xl font-bold">Social Media</h5>
					<div className="w-full flex items-center flex-wrap gap-2 mt-4">
						<Link
							to="https://www.instagram.com/codashop.idofficial/"
							target="_blank"
							className="text-app-primary hover:text-white transition-colors"
						>
							<IconBrandInstagram size={28} />
						</Link>
						<Link
							to="https://www.facebook.com/Codashop.IDofficial/"
							target="_blank"
							className="text-app-primary hover:text-white transition-colors"
						>
							<IconBrandFacebook size={28} />
						</Link>
						<Link
							to="https://www.youtube.com/c/CodashopOfficial"
							target="_blank"
							className="text-app-primary hover:text-white transition-colors"
						>
							<IconBrandYoutube size={28} />
						</Link>
						<Link
							to="https://www.tiktok.com/@codashop_global"
							target="_blank"
							className="text-app-primary hover:text-white transition-colors"
						>
							<IconBrandTiktok size={28} />
						</Link>
					</div>
				</div>
			</section>
		</section>
	);
}
