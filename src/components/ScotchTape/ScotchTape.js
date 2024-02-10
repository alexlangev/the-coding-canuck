import styles from "./ScotchTape.module.css";

export default function ScotchTape({ children }) {
	const variation = Math.floor(Math.random() * 4) + 1;
	return <div className={styles[`tape${variation}`]}>{children}</div>;
}
