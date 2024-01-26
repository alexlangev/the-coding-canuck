import { Code } from "bright";
import styles from "./CodeBlock.module.css";
import ScotchTape from "../ScotchTape";

export default function CodeBlock(props) {
	const theme = "github-dark";
	return (
		<ScotchTape>
			<Code {...props} className={styles.wrapper} theme={theme} />;
		</ScotchTape>
	);
}
