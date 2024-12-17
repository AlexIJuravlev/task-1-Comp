import { useState } from "react";
import styles from "./App.module.css";



function App() {
	const [value, setValue] = useState("");
	const [list, setlist] = useState([]);
	const [error, setError] = useState("");
	const [isValueVaild, setIsValueVaild] = useState(false);

	console.log(list)

	//Функция ввода значения
	const onInputButtonClick = () => {
		const promptValue = prompt().trim();
		if (promptValue.length < 3) {
			const errorText = "Введенное значение должно содержать минимум 3 символа";
			setError(errorText);
			setIsValueVaild(false);
		} else {
			setIsValueVaild(true);
			setError("");
			setValue(promptValue);
		}
	};
	//Функция добавления в массив
	function onAddButtonClick(){
		const id = Date.now();
		const data = new Date().toLocaleString();
		const updatedList = [...list, { id, value, data }];
		setlist(updatedList);
		setValue('');
		setError('');
		setIsValueVaild(false);

	}

	const blankLine = (
		<p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
	);

	const addToList = list.map(({ id, value, data }) => (
		<li key={id} className={styles["list-item"]}>
			{value + '	' + data}
		</li>
	));



	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>:
					<output className={styles["current-value"]}>{value}</output>
				</p>
				{error !== "" ? <div className={styles.error}>{error}</div> : ""}
				<div className={styles["buttons-container"]}>
					<button onClick={onInputButtonClick} className={styles.button}>
						Ввести новое
					</button>
					<button
						onClick={onAddButtonClick}
						className={styles.button}
						disabled={!isValueVaild}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>
					<ul className={styles.list}>
						{list.length === 0 ? blankLine : addToList}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
