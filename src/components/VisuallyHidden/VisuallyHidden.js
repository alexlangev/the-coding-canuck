import clsx from "clsx";

import styles from "./VisuallyHidden.module.css";

export default function VisuallyHidden({
	as: Element = "span",
	className,
	children,
	...delegated
}) {
	return (
		<Element className={clsx(styles.wrapper, className)} {...delegated}>
			{children}
		</Element>
	);
}
