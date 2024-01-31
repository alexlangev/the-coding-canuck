import React from "react";
import Image from "next/image";
import styles from "./Polaroid.module.css";

function Polaroid({ caption, src, alt, style, ...delegated }) {
	return (
		<figure className={styles.wrapper} style={style}>
			<Image
				className={styles.image}
				src={src}
				alt={alt}
				fill="responsive"
				{...delegated}
			/>
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}

export default Polaroid;
