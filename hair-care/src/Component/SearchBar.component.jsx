import React from 'react'
import {SearchBox} from './search-box.component'

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "", 
		};
	}

	componentDidMount() {
		fetch("https://hair-care-backend.herokuapp.com/stylists")
			.then(res => res.json())
			.then(users => this.setState({ users: users }));
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { users, searchField } = this.state;
		const filteredUsers = users.filter(user =>
			user.location.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monster's Rolodex</h1>
				<SearchBox
					placeholder="search users"
					handleChange={this.handleChange}
				/>

				<CardList monsters={filteredUsers} />
			</div>
		);
	}
}


export default SearchBar