import React from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput";

import loginCustomer from "../../redux/customers/login/login.actions";

class LogInCustomer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		console.log(this.state);
		console.log("props", this.props);
		// console.log(this.props.history);
		this.props.loginCustomer(this.state, this.props.history);

		// 	await localStorage.getItem("token")
		// 		? this.props.history.push("/explore")
		// 		: this.props.history.push("/login");
		//
	};
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Welcome Back Customer</h2>

				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="username"
							type="text"
							handleChange={this.handleChange}
							value={this.state.username}
							label="username"
							required
						/>
						<FormInput
							name="password"
							type="password"
							value={this.state.password}
							handleChange={this.handleChange}
							label="password"
							required
						/>
					</div>
					<div>
						<button className="button" type="submit">
							Sign In
						</button>
					</div>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = { loginCustomer };

export default connect(null, mapDispatchToProps)(LogInCustomer);
