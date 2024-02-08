"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HWMainLogo.module.css";
import { RoughNotation } from "react-rough-notation";
import { BLOG_TITLE } from "@/constants";
import { useTheme } from "@/utils/hooks/useTheme";
import { useHover } from "@/utils/hooks/useHover";

export default function HWMainLogo() {
	const [underlinedColor, setUnderlinedColor] = useState("white");
	const { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur } =
		useHover();
	const theme = useTheme();

	useEffect(() => {
		setUnderlinedColor(theme === "light" ? "black" : "white");
	}, [theme]);

	return (
		<Link
			className={styles.wrapper}
			href="/"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onFocus={onFocus}
			onBlur={onBlur}
		>
			<RoughNotation
				strokeWidth={2.5}
				padding={-2}
				animationDelay={0}
				animationDuration={375}
				iterations={3}
				type="underline"
				show={isHovered}
				animate={true}
				color={underlinedColor}
			>
				{BLOG_TITLE}
			</RoughNotation>
		</Link>
	);
}
