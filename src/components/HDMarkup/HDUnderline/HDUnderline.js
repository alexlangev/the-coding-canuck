"use client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDUnderline.module.css";
import { useHover } from "@/utils/hooks/useHover";

export default function HDUnderline({
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
            type={"underline"}
            color={color}
            show={show}
            strokeWidth={3}
            iterations={1}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
