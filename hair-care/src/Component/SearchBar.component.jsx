import React from 'react'
import {SearchBox} from './search-box.component'
import {CardList} from './card-list.component'

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: "", 
		};
	}

	componentDidMount() {
		fetch("https://hair-care-backend.herokuapp.com/stylists")
			.then(res => res.json())
			.then(users => this.setState({ users: users }))
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { users, searchField } = this.state;
		console.log(users)


		
		let stylists = users.filter(user => {
			if(user.userType === 1 ){
			  return user;
			};
		   })
		
		const filteredUsers = stylists.filter(stylist =>
			stylist.location.toLowerCase().includes(searchField.toLowerCase())
		);

		console.log(filteredUsers)
		
		return (
			<div className="App">
				<SearchBox
					placeholder="Enter a Location"
					handleChange={this.handleChange}
				/>

				<CardList users={filteredUsers} />
			</div>
		);
	}
}


export default SearchBar