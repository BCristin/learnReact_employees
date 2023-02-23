import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
	return (
		<div className="app-info">
			<h1>Raport persoane angajate in firma R</h1>
			<h2>Nr. Total Angajati: {employees}</h2>
			<h2>Premiul va lua: {increased} </h2>
		</div>
	);
};

export default AppInfo;
