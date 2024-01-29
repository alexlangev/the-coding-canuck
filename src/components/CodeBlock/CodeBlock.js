import { Code } from "bright";
import styles from "./CodeBlock.module.css";

export default function CodeBlock(props) {
	const theme = "github-dark";
	return <Code {...props} className={styles.wrapper} theme={theme} />;
}
