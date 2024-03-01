import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostHero from "@/components/PostHero";
import { format } from "date-fns";

// import { BLOG_TITLE } from "@/constants";
import { loadPost } from "@/utils/content-helpers";
import COMPONENT_MAP from "@/utils/mdx-components";

import styles from "./posts.module.css";

export async function generateMetadata({ params }) {
    const blogPostData = await loadPost(params.postSlug);

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
    const blogPostData = await loadPost(params.slug);
    // If there is no blog post with the slug taken from the route
    // params, render a 404 page instead.
    if (!blogPostData) {
        notFound();
    }

    const { frontmatter, content } = blogPostData;
    const humanizedDate = format(
        new Date(frontmatter.lastEditedOn),
        "MMMM do, yyyy"
    );

    return (
        <article className={styles.wrapper}>
            <PostHero
                title={frontmatter.title}
                publishedOn={frontmatter.publishedOn}
            />
            <div className={styles.page}>
                <MDXRemote source={content} components={COMPONENT_MAP} />
            </div>
            {/* <div>Last edited on: {humanizedDate}</div> */}
        </article>
    );
}
export default BlogPost;
