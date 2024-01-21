"use client";

import Link from "next/link";
import styles from "./HWLink.module.css";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

function HWLink({ href, children, isOn }) {
	const [isUnderlined, setIsUnderlined] = useState(false);

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
				strokeWidth={2}
				padding={3}
				animationDelay={0}
				animationDuration={250}
				iterations={1}
				type="underline"
				show={isUnderlined}
				animate={true}
			>
				{children}
			</RoughNotation>
		</Link>
	);
}

export default HWLink;
