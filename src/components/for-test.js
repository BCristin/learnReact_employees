import { Component } from "react";

export default function ForTest() {
	const test = (
		<div>
			<WhoAmI name="ion" surname="Smith" link="test.com" />
			<WhoAmI name="Huilo" surname="Blea" link="idi nahui suca zaibal .com" />
		</div>
	);
	return test;
}

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: "+++",
			position: "",
		};
	}
	nextYear = () => {
		this.setState((state) => {
			return { years: state.years + 1 };
		});
	};

	comitInputChange = (e) => {
		this.setState({ position: e.target.value });
	};
	render() {
		console.log(this);
		const { name, surname, link } = this.props;
		const { position, years } = this.state;
		return (
			<div>
				<h1>
					My name is {name}, surname- {surname}, age = {years}, position -{" "}
					{position}
				</h1>
				<a href={link}>My profile</a>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<form>
					<span>Introdu denumirea</span>
					<input type="text" onInput={this.comitInputChange} />
				</form>
			</div>
		);
	}
}
