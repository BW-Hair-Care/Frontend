import React, { useState } from "react";
import { SearchBox } from "./search-box.component";
import { CardList } from "./card-list.component";
import { connect } from "react-redux";
import { selectUsers } from "../redux/getUsers/getUsers.selector";
import { createStructuredSelector } from "reselect";


const SearchBar = ({allUsers}) => {
	const [searchField, setSearchField] = useState("");

	let users = allUsers

	console.log("usersfdhd", users);
	
	const handleChange = e => {
		setSearchField(e.target.value);
	};

	let stylists = users.filter(user => {
		if (user.userType === 1) {
			return user;
		}
	});

	const filteredUsers = stylists.filter(stylist =>
		stylist.location.toLowerCase().includes(searchField.toLowerCase())
	);

	console.log(filteredUsers);

	return (
		<div className="App">
			<SearchBox placeholder="Enter a Location" handleChange={handleChange} />

			<CardList users={filteredUsers} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	allUsers: selectUsers
});


export default connect(mapStateToProps)(SearchBar);
