"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./MainLogo.module.css";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";
import { BLOG_TITLE } from "@/constants";

function MainLogo() {
	const [isUnderlined, setIsUnderlined] = useState(false);
	const [underlinedColor, setUnderlinedColor] = useState("white");

	useEffect(() => {
		const root = document.documentElement;
		const theme = root.getAttribute("data-color-theme");
		setUnderlinedColor(theme === "light" ? "black" : "white");
	});

	const handleMouseEnter = () => {
		setIsUnderlined(true);
	};

	const handleMouseLeave = () => {
		setIsUnderlined(false);
	};

	const handleFocus = () => {
		setIsUnderlined(true);
	};

	const handleBlur = () => {
		setIsUnderlined(false);
	};

	return (
		<Link
			className={styles.wrapper}
			href="/"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<RoughNotation
				strokeWidth={2}
				padding={0}
				animationDelay={0}
				animationDuration={250}
				iterations={1}
				type="underline"
				show={isUnderlined}
				animate={true}
				color={underlinedColor}
			>
				{BLOG_TITLE}
			</RoughNotation>
		</Link>
	);
}

export default MainLogo;
