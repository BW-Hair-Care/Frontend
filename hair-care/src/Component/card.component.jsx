import React from "react";
import './components.css'
import axiosWithAuth from "../utils/axiosWithAuth";

const getProfile = (props) => {
	axiosWithAuth(`stylists/${props}`)
	.then(res=>(console.log(res)))
};

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
		{/* <button onClick={getProfile} id={props.user.id}>Veiw Profile</button> */}
		</div>
	</div>
);
