import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../Component/FormInput";
import editUsers from "../redux/editUser/editUsers.actions";

const initialState = { id: 1, username: "", email: "", location: "", description: "" };

const UpdateProfile = props => {
	const [user, setUser] = useState(initialState);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
		props.editUsers(user);
		setUser(initialState);
	};

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<FormInput
						name="username"
						type="text"
						handleChange={handleChange}
						value={user.username}
						label="username"
						required
					/>
					<FormInput
						name="email"
						type="email"
						handleChange={handleChange}
						value={user.email}
						label="enter new email"
						required
					/>
					<FormInput
						name="location"
						type="text"
						handleChange={handleChange}
						value={user.location}
						label="enter new location"
						required
					/>
					<FormInput
						name="description"
						type="textarea"
						handleChange={handleChange}
						value={user.description}
						label="enter new bio"
						required
					/>
				</div>
				<div>
					<button className="button" type="submit">
						Update Profile
					</button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = { editUsers };

export default connect(null, mapDispatchToProps)(UpdateProfile);
