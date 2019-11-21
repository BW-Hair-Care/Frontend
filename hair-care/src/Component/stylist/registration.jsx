import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../FormInput";
import registerCustomer from "../../redux/customers/register/register.actions";
import registerStylist from "../../redux/stylists/register/register.actions";

class StylistRegistration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			username: "",
			password: "",
			specialty: "",
			bio: "",
			email_address: "",
			location: ""
		};
	}

	componentDidUpdate() {
		// this.props.welcome()
	}

	handleSubmit = async e => {
		e.preventDefault();

		console.log("hey from reg-style", this.state);

		this.props.newStylist(this.state);
		this.props.history.push("/login");
		this.setState({
			name: "",
			username: "",
			password: "",
			specialty: "",
			bio: "",
			email_address: "",
			location: ""
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
				<h2>Welcome Stylist</h2>

				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="name"
							type="text"
							handleChange={this.handleChange}
							value={this.state.name}
							label="name"
							required
						/>

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
												<FormInput
							name="specialty"
							type="text"
							handleChange={this.handleChange}
							value={this.state.specialty}
							label="specialty"
							required
						/>
												<FormInput
							name="bio"
							type="textarea"
							handleChange={this.handleChange}
							value={this.state.bio}
							label="bio"
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
	newStylist: stylist => dispatch(registerStylist(stylist))
});

export default connect(null, mapDispatchToProps)(StylistRegistration);
