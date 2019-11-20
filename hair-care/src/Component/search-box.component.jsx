import React from "react";
import './components.css'

export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		placeholder={ placeholder }
		onChange={handleChange}
	/>
	/*if you want to console.log search fields you need to do it as the second param of setState like so :
				onChange={e => {
						this.setState({ searchField: e.target.value }, () =>
							console.log(this.state)
						);
					}}*/
);
