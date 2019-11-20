import React from "react";
import './components.css'

const getProfile = () => {};

export const Card = props => (
	<div className="card-container">
		<div>
			{" "}
			<img
				alt="user"
				src={`https://robohash.org/${props.user.id}?set=set5&size=140x140`}
			/>
		</div>{" "}<div>
		<h3>{props.user.username}</h3>
		<h6>{props.user.location}</h6>
		<button onClick={getProfile}>Veiw Profile</button></div>
	</div>
);
