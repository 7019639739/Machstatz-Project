import React from 'react'
import { Link,Route } from 'react-router-dom'
import AddUser from './addUser'
import UserDetails from './userDeatils'




const MainRouter=()=>{


    return(
        <div className="container">
            <h1>Machstatz project : User Management</h1>        <br/><br/>

            <Link to="/addUser"> <button>Add User   </button></Link>      
            <Link to="/userDetails"> click here for All Users Details</Link>     <br/><br/>

            <Route  path="/addUser" component={AddUser} />
            <Route path="/userDetails" component={UserDetails} />
        </div>
    )
}

export default MainRouter