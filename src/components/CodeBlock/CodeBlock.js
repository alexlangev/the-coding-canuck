import { Code } from "bright";
import ScotchTape from "../ScotchTape";
import styles from "./CodeBlock.module.css";

export default function CodeBlock(props) {
	const theme = "github-dark";
	return (
		<ScotchTape>
			<Code {...props} className={styles.wrapper} theme={theme} />
		</ScotchTape>
	);
}
