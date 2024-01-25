`use client`;
import { RoughSVG } from "react-rough-fiber";
import { RoughNotation } from "react-rough-notation";
import { Sun, Moon } from "react-feather";
import { useEffect, useState } from "react";
import { useTheme } from "@/utils/hooks/useTheme";

const VALID_ICONS = ["Sun", "Moon"];

export default function HWIcon({ icon, ...delegated }) {
	if (!VALID_ICONS.includes(icon)) {
		throw new Error(
			`Invalid icon: ${icon}. Expecting one of ${VALID_ICONS}`
		);
	}

	const [isUnderlined, setIsUnderlined] = useState(false);
	const [underlinedColor, setUnderlinedColor] = useState("white");
	const theme = useTheme();

	useEffect(() => {
		setUnderlinedColor(theme === "light" ? "black" : "white");
	}, [theme]);

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

	if (icon === "Sun") {
		return (
			<RoughNotation
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
				strokeWidth={2.5}
				padding={10}
				animationDelay={0}
				animationDuration={300}
				iterations={1.2}
				type="circle"
				show={isUnderlined}
				animate={true}
				color={underlinedColor}
			>
				<RoughSVG options={{ roughness: 0.4, bowing: 15 }}>
					<Sun {...delegated} />
				</RoughSVG>
			</RoughNotation>
		);
	} else {
		return (
			<RoughNotation
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
				strokeWidth={2.5}
				padding={3}
				animationDelay={0}
				animationDuration={300}
				iterations={1.5}
				type="circle"
				show={isUnderlined}
				animate={true}
				color={underlinedColor}
			>
				<RoughSVG options={{ roughness: 0.4, bowing: 15 }}>
					<Moon {...delegated} />
				</RoughSVG>
			</RoughNotation>
		);
	}
}