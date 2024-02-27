"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDUnderline.module.css";

export default function HDUnderline({ children }) {
    return (
        <RoughNotation
            type={"underline"}
            color="red"
            show={"true"}
            strokeWidth={3}
            iterations={1}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
