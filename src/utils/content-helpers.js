import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

function readFile(localPath) {
	return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath) {
	return fs.readdir(path.join(process.cwd(), localPath));
}

const getCheatSheets = async () => {
	const fileNames = await readDirectory("./content/cheat_sheets");
	const cheatSheets = [];
	for (const fileName of fileNames) {
		const rawContent = await readFile(`./content/cheat_sheets/${fileName}`);
		const { data: frontmatter } = matter(rawContent);
		cheatSheets.push({
			slug: fileName.replace(".mdx", ""),
			...frontmatter,
		});
	}
	return cheatSheets.sort((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));
};

const getBlogPosts = async () => {
	const fileNames = await readDirectory("./content/posts");
	const posts = [];
	for (const fileName of fileNames) {
		const rawContent = await readFile(`./content/posts/${fileName}`);
		const { data: frontmatter } = matter(rawContent);
		posts.push({
			slug: fileName.replace(".mdx", ""),
			...frontmatter,
		});
	}
	return posts.sort((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));
};

const getLatestContent = async () => {
	const content = [];
	const contentTypes = await readDirectory("./content");
	for (const contentType of contentTypes) {
		const fileNames = await readDirectory(`./content/${contentType}`);
		for (const fileName of fileNames) {
			const rawContent = await readFile(
				`content/${contentType}/${fileName}`
			);
			const { data: frontmatter } = matter(rawContent);
			content.push({
				slug: `${contentType}/${fileName.replace(".mdx", "")}`,
				...frontmatter,
			});
		}
	}
	return content.sort((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));
};

const loadPost = cache(async function loadPost(slug) {
	let rawContent;

	// Wrapping this operation in a try/catch so that it stops
	// throwing an error if the file can't be found. Instead,
	// we'll return `null`, and the caller can figure out how
	// to handle this situation.
	try {
		rawContent = await readFile(`/content/posts/${slug}.mdx`);
	} catch (err) {
		return null;
	}

	const { data: frontmatter, content } = matter(rawContent);
	return { frontmatter, content };
});

const loadCheatSheets = cache(async function loadCheatSheets(slug) {
	let rawContent;

	// Wrapping this operation in a try/catch so that it stops
	// throwing an error if the file can't be found. Instead,
	// we'll return `null`, and the caller can figure out how
	// to handle this situation.
	try {
		rawContent = await readFile(`/content/cheat_sheets/${slug}.mdx`);
	} catch (err) {
		return null;
	}

	const { data: frontmatter, content } = matter(rawContent);
	return { frontmatter, content };
});

export {
	getCheatSheets,
	getBlogPosts,
	getLatestContent,
	loadPost,
	loadCheatSheets,
};
