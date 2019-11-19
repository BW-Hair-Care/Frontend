import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "./FormInput";
import registerUser from "../redux/register/register.actions";
import { selectUser } from "../redux/register/register.selectors";

class Registration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			email: "",
			location: "",
			userType: null
		};
	}

	componentDidUpdate() {
		// this.props.welcome()
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { username, email, password, confirmPassword } = this.state;
		console.log(this.state);
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		 this.props.newUser(this.state);
        
        
		this.setState({
			username: "",
            password: "",
            confirmPassword: "",
			email: "",
			location: "",
			userType: ""
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Welcome New User</h2>

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
						<FormInput
							name="confirmPassword"
							type="password"
							value={this.state.confirmPassword}
							handleChange={this.handleChange}
							label="confirmPassword"
							required
						/>
						<FormInput
							name="email"
							type="email"
							value={this.state.email}
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
						<div>
							<FormInput
								name="userType"
								type="radio"
								id="1"
								value={this.state.userType}
								handleChange={this.handleChange}
								label="Stylist"
							/>
							<FormInput
								name="userType"
								type="radio"
								id="2"
								value={this.state.userType}
								handleChange={this.handleChange}
								label="Customer"
							/>
						</div>
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

const mapStateToProps = createStructuredSelector({
	user: selectUser
});

const mapDispatchToProps = dispatch => ({
	newUser: user => dispatch(registerUser(user))
});

export default connect( mapStateToProps,mapDispatchToProps)(Registration);
