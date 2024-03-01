import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Homepage from "./routes/homepage.jsx";
import ArticlesRoot, { articlesLoader } from "./routes/articles-root.jsx";
import ArticlesPage from "./routes/articles.jsx";
import ArticleDetailPage, {
	articleDetailLoader,
} from "./routes/article-detail.jsx";
import SearchPage, { searchLoader } from "./routes/search.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "articles",
				element: <ArticlesRoot />,
				loader: articlesLoader,
				children: [
					{
						index: true,
						element: <ArticlesPage />,
					},
					{
						path: ":section/:slug",
						loader: articleDetailLoader,
						element: <ArticleDetailPage />,
					},
					{
						path: "search",
						loader: searchLoader,
						element: <SearchPage />,
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
