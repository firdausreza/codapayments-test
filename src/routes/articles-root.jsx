import { Outlet, useLoaderData } from "react-router-dom";
import { Sidebar } from "../components/index.js";
import data from "../json/articles.json";

export async function articlesLoader() {
	const articles = data.data;
	return articles;
}

export default function ArticlesRoot() {
	const articles = useLoaderData();

	return (
		<section id="articles-faq-parent" className="min-h-[80vh] flex">
			<section
				id="faq-container"
				className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16"
			>
				<article className="w-full grid grid-cols-12 gap-8">
					<aside className="order-2 md:order-1 col-span-12 md:col-span-3">
						<Sidebar articles={articles} />
					</aside>
					<section
						id="articles-outlet"
						className="order-1 md:order-2 col-span-12 md:col-span-9"
					>
						<Outlet />
					</section>
				</article>
			</section>
		</section>
	);
}
