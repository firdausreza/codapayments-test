import { Link, useLoaderData } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons-react";
import moment from "moment";
import data from "../json/articles.json";
import NotFound from "../assets/img/not-found.svg";

export async function searchLoader({ params }) {
	const searchQuery = new URLSearchParams(window.location.search).get(
		"query"
	);
	const articles = Object.entries(data.data)
		.map(([key, value]) => {
			const tempValue = value.map((val) => {
				val.section = key;
				return val;
			});
			return tempValue;
		})
		.flat()
		.filter((article) =>
			article.contents.toLowerCase().includes(searchQuery.toLowerCase())
		);

	if (articles && articles.length > 0) return { searchQuery, articles };
	else return { searchQuery, articles: null };
}

export default function SearchPage() {
	const data = useLoaderData();

	const mapSearchArticles = () => {
		if (!data.articles) {
			return (
				<figure className="w-full flex justify-center items-center">
					<img src={NotFound} alt="search not found" width={300} />
				</figure>
			);
		}

		return data.articles.map((article) => {
			const date = moment(article.date_posted);
			return (
				<Link
					to={`/articles/${article.section}/${article.slug}`}
					key={article.slug}
				>
					<article className="w-full p-4 rounded-md border border-app-primary hover:bg-app-primary hover:text-white transition-colors cursor-pointer">
						<h5 className="text-xl font-bold">{article.title}</h5>
						<p className="mt-2 line-clamp-1">{article.caption}</p>
						<p className="mt-2 text-sm">
							{article.author} - {date.format("D MMMM YYYY")}
						</p>
					</article>
				</Link>
			);
		});
	};

	return (
		<section className="w-full">
			<Link
				to="/"
				reloadDocument
				className="flex items-center text-sm text-app-primary hover:underline underline-offset-2"
			>
				<IconChevronLeft size={16} />
				Back to Homepage
			</Link>
			<div className="w-full border-b border-app-primary py-4">
				<h4 className="text-xl text-app-primary font-bold">
					{data.articles.length} search results for "
					{data.searchQuery}"
				</h4>
			</div>
			<section className="w-full flex flex-col gap-4 mt-8">
				{mapSearchArticles()}
			</section>
		</section>
	);
}
