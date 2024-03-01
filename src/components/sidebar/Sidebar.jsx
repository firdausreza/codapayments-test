import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Sidebar({ articles }) {
	const generateAccordions = () => {
		const accordions = [];

		Object.entries(articles).forEach(([key, value]) => {
			const _accordions = {
				title: key,
				items: null,
			};

			_accordions.items = value.map((val) => {
				return {
					title: val.title,
					slug: val.slug,
				};
			});

			accordions.push(_accordions);
		});

		if (accordions && accordions.length > 0) {
			return accordions.map((accord, index) => {
				const generateItems = () => {
					const currentSlug =
						localStorage.getItem("currentSlug") || "";
					return accord.items.map((item, _index) => {
						return (
							<Link
								to={`/articles/${accord.title}/${item.slug}`}
								key={item.slug}
								className={`${
									currentSlug === item.slug
										? "text-app-primary font-bold"
										: "text-gray-500"
								} hover:text-app-primary transition-colors hover:underline underline-offset-2`}
							>
								{item.title}
							</Link>
						);
					});
				};

				return (
					<Accordion.Panel key={index}>
						<Accordion.Title className="text-white bg-app-primary hover:bg-app-primary/95 font-bold capitalize">
							{accord.title.includes("_")
								? accord.title.split("_").join(" ")
								: accord.title}
						</Accordion.Title>
						<Accordion.Content>
							<div className="flex flex-col items-start gap-2">
								{generateItems()}
							</div>
						</Accordion.Content>
					</Accordion.Panel>
				);
			});
		}
	};

	return (
		<>
			<h3 className="text-2xl text-app-primary font-bold mb-2">
				All Articles
			</h3>
			<Accordion alwaysOpen>{generateAccordions()}</Accordion>
		</>
	);
}
