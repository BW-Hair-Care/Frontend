import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "./FormInput";

import postToAPI from '../redux/post-Review/post.actions'

import "./components.css";

class Review extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			customerReview: "howdy",
			CustomerId: 1,
			username: 4
		};
	}

	componentDidUpdate() {
		// this.props.welcome()
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		this.props.postToAPI(this.state)

		this.setState({
			customerReview: "",
			CustomerId: "",
			username: ""
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="customerReview"
							type="textarea"
							handleChange={this.handleChange}
							value={this.state.name}
							label="Please Leave Your Review"
							required
						/>
					</div>
					<div>
						<button className="button" type="submit">
							Submit Review{" "}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {postToAPI}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
