"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HWMainLogo.module.css";
import { RoughNotation } from "react-rough-notation";
import { BLOG_TITLE } from "@/constants";
// import { useTheme } from "@/utils/hooks/useTheme";

export default function HWMainLogo() {
	const [isUnderlined, setIsUnderlined] = useState(false);
	const [underlinedColor, setUnderlinedColor] = useState("white");
	// const theme = useTheme();

	// useEffect(() => {
	// 	setUnderlinedColor(theme === "light" ? "black" : "white");
	// }, [theme]);

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
				strokeWidth={2.5}
				padding={-2}
				animationDelay={0}
				animationDuration={375}
				iterations={3}
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
