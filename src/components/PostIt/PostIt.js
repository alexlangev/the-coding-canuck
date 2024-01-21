import clsx from "clsx";

import styles from "./PostIt.module.css";

function PostIt({ children, className, ...delegated }) {
	return (
		<div className={clsx(styles.wrapper, className)} {...delegated}>
			{children}
		</div>
	);
}

export default PostIt;
