"use client";

import styles from "./HWAnchor.module.css";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { useHover } from "@/utils/hooks/useHover";

export default function HWAnchor({ children, href, internal = false }) {
	const { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur } =
		useHover();

	return (
		<RoughNotation
			className={styles.wrapper}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onFocus={onFocus}
			onBlur={onBlur}
			type="underline"
			show={isHovered}
			color="blue"
			strokeWidth={2}
			animationDuration={250}
			padding={-3}
		>
			{internal && (
				<Link className={styles.anchor} href={href}>
					{children}
				</Link>
			)}
			{!internal && (
				<a
					className={styles.anchor}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			)}
		</RoughNotation>
	);
}
