"use client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDBrackets.module.css";
import { useHover } from "@/utils/hooks/useHover";

export default function HDBrackets({
    children,
    color = "black",
    onHover = false,
}) {
    const { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur } =
        useHover();
    const show = onHover ? isHovered : true;

    return (
        <RoughNotation
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            className={styles.wrapper}
            type={"bracket"}
            brackets={["left", "right"]}
            color={color}
            show={show}
            strokeWidth={3}
            iterations={1}
            animationDuration={375}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
