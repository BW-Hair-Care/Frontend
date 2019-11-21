import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../FormInput";
import registerCustomer from "../../redux/customers/register/register.actions";

class CustomerRegistration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			email_address: "",
			location: ""
		};

		// const stylist = 1
		// const client = 2
	}

	stylist = 1;
	customer = 2;

	componentDidUpdate() {
		// this.props.welcome()
	}

	handleSubmit = async e => {
		e.preventDefault();

		console.log("hey from reg", this.state);

		this.props.newUser(this.state);
		this.props.history.push("/explore");
		this.setState({
			username: "",
			password: "",
			// confirmPassword: "",
			email_address: "",
			location: "",
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		name === "userType"
			? this.setState({ [name]: parseFloat(value) })
			: this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Welcome Customer</h2>

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
						{/* <FormInput
							name="confirmPassword"
							type="password"
							value={this.state.confirmPassword}
							handleChange={this.handleChange}
							label="confirmPassword"
							required
						/> */}
						<FormInput
							name="email_address"
							type="email"
							value={this.state.email_address}
							handleChange={this.handleChange}
							label="email"
							required
						/>
						<FormInput
							name="location"
							type="text"
							value={this.state.location}
							handleChange={this.handleChange}
							label="location"
							required
						/>
						</div>
					<div>
						<button className="button" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		);
	}
}



const mapDispatchToProps = dispatch => ({
	newUser: user => dispatch(registerCustomer(user))
});

export default connect(null, mapDispatchToProps)(CustomerRegistration);
