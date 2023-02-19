import "./app-filter.css";
const AppFiltre = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-light" type="button">
				Toti angajati
			</button>
			<button className="btn btn-outline-light" type="button">
				Angajati la avansare
			</button>
			<button className="btn btn-outline-light" type="button">
				Salariu mai mare de 1000$
			</button>
		</div>
	);
};

export default AppFiltre;
