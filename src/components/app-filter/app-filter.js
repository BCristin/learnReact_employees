import "./app-filter.css";

const AppFilter = (props) => {
	const buttonsData = [
		{ name: "all", label: "Toți angajații" },
		{ name: "rise", label: "Pentru promovare" },
		{ name: "moreThen1000", label: "Salariu peste 1000$" },
		{ name: "moreThen5000", label: "Salariu peste 5000$" },
		{ name: "moreThen9000", label: "Salariu peste 9000$" },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light";
		return (
			<button
				type="button"
				className={`btn ${clazz}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
