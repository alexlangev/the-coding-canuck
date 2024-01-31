"use client";

import Link from "next/link";
import styles from "./HWNavLink.module.css";
import { RoughNotation } from "react-rough-notation";
import { useState, useEffect } from "react";
// import { useTheme } from "@/utils/hooks/useTheme";

export default function HWNavLink({ href, children, isOn }) {
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
			href={href}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<RoughNotation
				strokeWidth={2.5}
				padding={1}
				animationDelay={0}
				animationDuration={250}
				iterations={2}
				type="underline"
				show={isUnderlined}
				animate={true}
				color={underlinedColor}
			>
				{children}
			</RoughNotation>
		</Link>
	);
}
