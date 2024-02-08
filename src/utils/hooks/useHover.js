import { useState } from "react";

function useHover() {
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	const handleFocus = () => {
		setHover(true);
	};

	const handleBlur = () => {
		setHover(false);
	};

	return {
		isHovered: hover,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onFocus: handleFocus,
		onBlur: handleBlur,
	};
}

export { useHover };
