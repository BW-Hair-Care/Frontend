import React from "react";
import {SearchBox} from "../search-box.component";
import axiosWithAuth from "../../utils/axiosWithAuth";

class SearchStylists extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: ""
		};
	}


	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

    handleSubmit = e =>{
        e.preventDefault();
		console.log(this.state.searchField);
		// console.log('props', this.props)
		// console.log(this.props.history);
         axiosWithAuth()
         .get(`/api/stylists/location/${this.state.searchField}`)
         .then(res=> console.log("HI FROMRES",res))
    }

	render() {
		const { users, searchField } = this.state;
		console.log(users);

		// const filteredUsers = stylists.filter(stylist =>
		// 	stylist.location.toLowerCase().includes(searchField.toLowerCase())
		// );

		// console.log(filteredUsers);

		return (
			<div className="App">
				<SearchBox
					placeholder="Enter a Location"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
				/>
{/* 
				<CardList users={filteredUsers} /> */}
			</div>
		);
	}
}

export default SearchStylists;
