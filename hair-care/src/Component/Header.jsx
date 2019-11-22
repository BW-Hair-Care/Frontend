import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{


    return(<div>HairCare App

        <Link to={"/explore"}>Explore</Link>
        <Link to={"/edit"}>Edit Profile</Link>


    </div>)
}

export default Header