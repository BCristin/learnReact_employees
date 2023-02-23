import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Huilo", salary: 800, increase: false, rise: true, id: 11 },
				{ name: "Ion L", salary: 3000, increase: true, rise: false, id: 12 },
				{ name: "Vasile", salary: 5000, increase: false, rise: false, id: 13 },
				{ name: "Gheor", salary: 2400, increase: false, rise: false, id: 14 },
				{ name: "Andrei2", salary: 3800, increase: true, rise: false, id: 15 },
				{ name: "Ishmael", salary: 1638, increase: true, rise: true, id: 245 },
				{ name: "Kiara", salary: 6712, increase: true, rise: false, id: 183 },
				{ name: "Channing", salary: 7538, increase: false, rise: false, id: 179 },
				{ name: "Lavinia", salary: 7939, increase: false, rise: true, id: 61 },
				{ name: "Denise", salary: 5668, increase: true, rise: true, id: 77 },
				{ name: "Geoffrey", salary: 6623, increase: false, rise: false, id: 43 },
				{ name: "Brennan", salary: 9210, increase: false, rise: false, id: 212 },
				{ name: "Josephine", salary: 9315, increase: true, rise: true, id: 33 },
				{ name: "Lester", salary: 4256, increase: false, rise: false, id: 218 },
				{ name: "Olympia", salary: 3330, increase: true, rise: false, id: 182 },
				{ name: "Chaim", salary: 6659, increase: false, rise: true, id: 79 },
				{ name: "Nasim", salary: 9060, increase: true, rise: false, id: 232 },
				{ name: "Shay", salary: 1186, increase: true, rise: false, id: 228 },
				{ name: "Blake", salary: 4909, increase: true, rise: true, id: 118 },
				{ name: "Aileen", salary: 1171, increase: false, rise: false, id: 266 },
				{ name: "Whilemina", salary: 8758, increase: true, rise: true, id: 254 },
				{ name: "Indigo", salary: 8047, increase: true, rise: false, id: 271 },
				{ name: "Hanna", salary: 7128, increase: false, rise: false, id: 143 },
				{ name: "Hillary", salary: 8480, increase: true, rise: true, id: 133 },
				{ name: "Burton", salary: 3222, increase: false, rise: false, id: 235 },
				{ name: "Kim", salary: 5897, increase: false, rise: false, id: 355 },
				{ name: "Zane", salary: 4485, increase: false, rise: true, id: 214 },
				{ name: "Echo", salary: 4998, increase: true, rise: false, id: 248 },
				{ name: "Cole", salary: 6401, increase: false, rise: false, id: 177 },
				{ name: "Dane", salary: 7903, increase: true, rise: true, id: 168 },
				{ name: "Jarrod", salary: 8681, increase: false, rise: true, id: 140 },
				{ name: "Julian", salary: 6777, increase: true, rise: false, id: 84 },
				{ name: "George", salary: 4260, increase: true, rise: true, id: 20 },
				{ name: "Cherokee", salary: 7686, increase: true, rise: false, id: 192 },
				{ name: "Levi", salary: 4584, increase: false, rise: false, id: 91 },
				{ name: "Arsenio", salary: 6216, increase: true, rise: false, id: 164 },
				{ name: "Damon", salary: 4919, increase: true, rise: false, id: 361 },
				{ name: "Prescott", salary: 1530, increase: false, rise: true, id: 231 },
				{ name: "Plato", salary: 1865, increase: true, rise: false, id: 303 },
				{ name: "Noelani", salary: 7729, increase: true, rise: false, id: 191 },
				{ name: "Justin", salary: 9407, increase: true, rise: false, id: 263 },
				{ name: "Barbara", salary: 5863, increase: true, rise: true, id: 257 },
				{ name: "Frances", salary: 8316, increase: true, rise: false, id: 222 },
				{ name: "Sydney", salary: 4533, increase: false, rise: true, id: 92 },
				{ name: "Carolyn", salary: 9026, increase: true, rise: false, id: 244 },
				{ name: "Kristen", salary: 1571, increase: true, rise: true, id: 210 },
				{ name: "Francesca", salary: 4101, increase: false, rise: true, id: 23 },
				{ name: "Upton", salary: 2788, increase: true, rise: false, id: 221 },
				{ name: "Clark", salary: 5644, increase: false, rise: true, id: 223 },
				{ name: "Elton", salary: 7072, increase: true, rise: true, id: 334 },
				{ name: "Ainsley", salary: 2417, increase: true, rise: false, id: 211 },
				{ name: "Yoko", salary: 9742, increase: true, rise: true, id: 85 },
				{ name: "Noah", salary: 5667, increase: true, rise: true, id: 169 },
				{ name: "Germane", salary: 1672, increase: false, rise: false, id: 201 },
				{ name: "Barry", salary: 8614, increase: true, rise: false, id: 149 },
				{ name: "Donna", salary: 8970, increase: false, rise: true, id: 24 },
				{ name: "Lee", salary: 2942, increase: false, rise: true, id: 134 },
				{ name: "Slade", salary: 5083, increase: true, rise: false, id: 45 },
				{ name: "Jennifer", salary: 9276, increase: true, rise: false, id: 215 },
				{ name: "Illiana", salary: 4556, increase: false, rise: false, id: 89 },
				{ name: "Guy", salary: 5102, increase: true, rise: false, id: 31 },
				{ name: "Davis", salary: 8671, increase: true, rise: false, id: 196 },
				{ name: "Ali", salary: 7835, increase: false, rise: false, id: 145 },
				{ name: "Fritz", salary: 7229, increase: false, rise: false, id: 100 },
				{ name: "Madaline", salary: 8272, increase: true, rise: false, id: 155 },
				{ name: "Nicholas", salary: 6288, increase: false, rise: false, id: 213 },
				{ name: "Octavius", salary: 4701, increase: false, rise: false, id: 144 },
				{ name: "Wang", salary: 7693, increase: false, rise: false, id: 190 },
				{ name: "Reagan", salary: 4491, increase: true, rise: false, id: 34 },
				{ name: "Sopoline", salary: 7761, increase: true, rise: true, id: 185 },
				{ name: "Holmes", salary: 3359, increase: true, rise: true, id: 343 },
				{ name: "Ivana", salary: 9041, increase: true, rise: true, id: 217 },
				{ name: "Christine", salary: 1527, increase: false, rise: true, id: 224 },
				{ name: "August", salary: 9713, increase: false, rise: true, id: 136 },
				{ name: "Meredith", salary: 9595, increase: false, rise: true, id: 172 },
				{ name: "Patience", salary: 7489, increase: true, rise: false, id: 170 },
				{ name: "Fulton", salary: 9273, increase: true, rise: false, id: 204 },
				{ name: "Jolie", salary: 9819, increase: true, rise: true, id: 262 },
				{ name: "Sybil", salary: 2345, increase: false, rise: false, id: 97 },
				{ name: "Dora", salary: 3807, increase: false, rise: false, id: 163 },
				{ name: "Shea", salary: 5463, increase: true, rise: false, id: 69 },
				{ name: "Omar", salary: 9938, increase: false, rise: false, id: 219 },
				{ name: "Bevis", salary: 1523, increase: false, rise: false, id: 16 },
				{ name: "Cole", salary: 9251, increase: true, rise: true, id: 70 },
				{ name: "Zephania", salary: 3773, increase: false, rise: false, id: 186 },
				{ name: "Drake", salary: 1698, increase: false, rise: false, id: 199 },
				{ name: "Leonard", salary: 4897, increase: true, rise: true, id: 307 },
				{ name: "Judith", salary: 9755, increase: true, rise: true, id: 335 },
				{ name: "Carl", salary: 5762, increase: true, rise: true, id: 274 },
				{ name: "Ivor", salary: 9756, increase: false, rise: true, id: 18 },
				{ name: "Evangeline", salary: 9184, increase: false, rise: true, id: 131 },
				{ name: "Nero", salary: 3827, increase: true, rise: true, id: 200 },
				{ name: "Valentine", salary: 2284, increase: true, rise: true, id: 189 },
				{ name: "Hall", salary: 5287, increase: false, rise: true, id: 150 },
				{ name: "Ciara", salary: 7498, increase: true, rise: false, id: 316 },
				{ name: "Salvador", salary: 8086, increase: true, rise: true, id: 194 },
				{ name: "Orson", salary: 6466, increase: true, rise: true, id: 55 },
				{ name: "Paki", salary: 9686, increase: false, rise: false, id: 129 },
				{ name: "Denise", salary: 6994, increase: false, rise: false, id: 317 },
				{ name: "Hu", salary: 8490, increase: false, rise: false, id: 36 },
				{ name: "Gary", salary: 6908, increase: false, rise: true, id: 40 },
				{ name: "Evangeline", salary: 5714, increase: true, rise: true, id: 184 },
				{ name: "Adam", salary: 3905, increase: false, rise: false, id: 255 },
				{ name: "Thane", salary: 9671, increase: false, rise: false, id: 236 },
				{ name: "Leslie", salary: 2258, increase: true, rise: false, id: 28 },
			],
			term: "",
			filter: "all",
		};
	}
	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex((elem) => elem.id == id);
			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);
			// const newArr = [...before, ...after];
			// return { data: newArr };
			return { data: data.filter((item) => item.id !== id) };
		});
	};
	addItem = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: Math.max(...this.state.data.map((item) => item.id)) + 1,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return { data: newArr };
		});
	};
	// onToggleIncrease = (id) => {
	// 	// this.setState(({ data }) => {
	// 	// 	const index = data.findIndex((elem) => elem.id == id);
	// 	// 	const old = data[index];
	// 	// 	const newItem = { ...old, increase: !old.increase };
	// 	// 	const newArr = [
	// 	// 		...data.slice(0, index),
	// 	// 		newItem,
	// 	// 		...data.slice(index + 1),
	// 	// 	];
	// 	// 	return { data: newArr };
	// 	// });
	// 	this.setState(({ data }) => ({
	// 		data: data.map((item) => {
	// 			if (item.id === id) {
	// 				return { ...item, increase: !item.increase };
	// 			}
	// 			return item;
	// 		}),
	// 	}));
	// };
	// onToggleRise = (id) => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map((item) => {
	// 			if (item.id === id) {
	// 				return { ...item, rise: !item.rise };
	// 			}
	// 			return item;
	// 		}),
	// 	}));
	// };

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	searchEmp = (items, term) => {
		if (term.length === 0) return items;

		return items.filter((item) => item.name.indexOf(term) > -1);
	};
	onUpdateSearch = (term) => {
		this.setState({ term: term });
	};
	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen1000":
				return items.filter((item) => item.salary > 1000);
			case "moreThen5000":
				return items.filter((item) => item.salary > 5000);
			case "moreThen9000":
				return items.filter((item) => item.salary > 9000);
			default:
				return items;
		}
	};
	onFilterSelect = (filter) => {
		this.setState({ filter });
	};
	render() {
		const { data, term, filter } = this.state;
		const employees = data.length;
		const increased = data.filter((item) => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
