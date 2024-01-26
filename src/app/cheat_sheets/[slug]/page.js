import React from "react";
import MatrixPaper from "@/components/MatrixPaper";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

// import { BLOG_TITLE } from "@/constants";
import { loadCheatSheets } from "@/utils/content-helpers";
import COMPONENT_MAP from "@/utils/mdx-components";

import styles from "./cheat_sheets.module.css";

export async function generateMetadata({ params }) {
	const blogPostData = await loadCheatSheets(params.postSlug);

	// If we can't locate the blog post, this will be a 404. This
	// means that the returned value from this function won't
	// actually be used. We'll return `null` purely to avoid an error.
	if (!blogPostData) {
		return null;
	}

	const { frontmatter } = blogPostData;

	return {
		title: `${frontmatter.title} • ${BLOG_TITLE}`,
		description: frontmatter.abstract,
	};
}

async function BlogPost({ params }) {
	console.log("BAP!", params, params.slug);
	const blogPostData = await loadCheatSheets(params.slug);
	// If there is no blog post with the slug taken from the route
	// params, render a 404 page instead.
	if (!blogPostData) {
		notFound();
	}

	const { frontmatter, content } = blogPostData;

	return (
		<article className={styles.wrapper}>
			<MatrixPaper>
				<MDXRemote source={content} components={COMPONENT_MAP} />
			</MatrixPaper>
		</article>
	);
}
export default BlogPost;
