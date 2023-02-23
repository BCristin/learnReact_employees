import { Component } from "react";
import "./ta1.css";
class Ta1 extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: this.props.counter };
	}

	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке
	inc = () => {
		this.setState((state) => {
			if (state.counter < 50) {
				return { counter: state.counter + 1 };
			}
		});
	};
	dec = () => {
		this.setState((state) => {
			if (state.counter > -50) {
				return { counter: state.counter - 1 };
			}
		});
	};
	rnd = () => {
		this.setState({ counter: Math.floor(Math.random() * 100) - 50 });
	};
	reset = () => {
		this.setState({ counter: this.props.counter });
	};
	render() {
		const { counter } = this.state;
		// console.log(this.props.counter);
		return (
			<div>
				<div className="counter">{counter}</div>
				<div className="controls">
					<button onClick={this.inc}>INC</button>
					<button onClick={this.dec}>DEC</button>
					<button onClick={this.rnd}>RND</button>
					<button onClick={this.reset}>RESET</button>
				</div>
			</div>
		);
	}
}
export default Ta1;
// ReactDOM.render(<App counter={0} />, document.getElementById("app"));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
