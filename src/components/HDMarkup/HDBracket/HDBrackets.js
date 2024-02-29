"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDBrackets.module.css";

export default function HDBrackets({ children, color = "black" }) {
    return (
        <RoughNotation
            className={styles.wrapper}
            type={"bracket"}
            brackets={["left", "right"]}
            color={color}
            show={"true"}
            strokeWidth={3}
            iterations={1}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
