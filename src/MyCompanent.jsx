import { useState } from "react";
import styles from './MyCom.module.css'

export const MyCompanent = () => {
	const [showRedText, setShowRedText] = useState(false);


	const onClick = () => {
				setShowRedText(!showRedText);

	};

	const text = (
		<div className={showRedText ? styles.red : styles.blue}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor!
		</div>
	);

	return (
		<>
			<button onClick={onClick}>Изменить цвет</button>
			{text}
		</>
	);
};
