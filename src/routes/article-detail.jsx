import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IconChevronLeft, IconUserCircle } from "@tabler/icons-react";
import moment from "moment";
import data from "../json/articles.json";

export async function articleDetailLoader({ params }) {
	const section = params.section;
	const slug = params.slug;
	localStorage.setItem("currentSlug", slug);
	localStorage.setItem("currentSection", section);

	const articles = data.data;

	if (articles[section] && articles[section].length > 0) {
		return articles[section].filter((item) => item.slug === slug)[0];
	} else {
		return null;
	}
}

export default function ArticleDetailPage() {
	const article = useLoaderData();

	useEffect(() => {
		const articleContentsElement =
			document.getElementById("article-contents");

		if (articleContentsElement) {
			articleContentsElement.innerHTML = article.contents;
		}
	}, [article]);

	return (
		<article id="articles-container" className="w-full">
			<Link
				to="/"
				reloadDocument
				className="flex items-center text-sm text-app-primary hover:underline underline-offset-2"
			>
				<IconChevronLeft size={16} />
				Back to Homepage
			</Link>
			<h3 className="text-4xl font-bold text-app-primary mt-4">
				{article.title || "Article Title"}
			</h3>
			<div className="flex items-center mt-4">
				<IconUserCircle size={40} className="text-app-primary" />
				<div className="ms-2">
					<h4>{article.author || "Author"}</h4>
					<p className="text-sm">
						{moment(article.date_posted).fromNow()}
					</p>
				</div>
			</div>
			<div
				id="article-contents"
				className="w-full mt-8 text-justify text-lg text-gray-700"
			></div>
		</article>
	);
}
