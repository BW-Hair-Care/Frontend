import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";



import { Card } from "../Component/card.component";
import { selectUsers } from "../redux/getUsers/getUsers.selector";
import getAPI from "../redux/getUsers/getUsers.actions";

const SmurfVillage = ({ users, welcome }) => {
	console.log("howdyfromVillage", users);
console.log(welcome)
	useEffect(() => {
		welcome('working');
	 },[welcome]);
	 

	return (
		<div>
			<h3>Meet our Villagers:</h3>
			<div className="village">{users.map(user => (
			
                <Card key={user.id} user={user}/>

			
			))}
		</div></div>
	);
};

const mapStateToProps = createStructuredSelector({
	users: selectUsers
});

const mapDispatchToProps = dispatch => ({
	welcome: () => dispatch(getAPI())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SmurfVillage);
