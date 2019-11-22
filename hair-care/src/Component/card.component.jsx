import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

import Reviews from './review/viewReviews'
import ReviewForm from "./review/reviewForm";


const Card = ({user}) => (
	<div className="card-container">
		<div>
			{" "}
			<Link to={`/stylist/${user.id}`}><img
				alt="user"
				src={`https://robohash.org/${user.id}?set=set5&size=140x140`}
			/></Link>
		</div>{" "}
		<div>
			<h3>{user.username}</h3>
			<h6>{user.location}</h6>
			{/* <Reviews  id={user.id} /> */}
			<ReviewForm  id={user.id}/>
		</div>
	</div>
);

export default Card