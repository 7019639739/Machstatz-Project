import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';


const UserDetails = (props) => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get("http://15.207.229.231:8000/machstatz/get_all_users")
            .then((res) => {
                const allUserDetails = res.data

                console.log(allUserDetails)

                setUsers(allUserDetails)
            })

            .catch((err) => {
                alert(err.message)
            })
    }, [users])


    const handleDelete = (email) => {
        axios.delete(`http://15.207.229.231:8000/machstatz/delete_existing_user?email=${email}`)
            .then((res) => {
                const delItem = res.data
                console.log("delItem", delItem)
               
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div>
            <h2>All User Details</h2>

            <div className="container">
          

                {users.map((user) => {
                    return (
                        <div>
                            {/* <li className="list-group-item">{user.username}</li>  <button>edit</button> <button onClick={()=>{
                            handleDelete(user.email)
                        }}>delete</button> */}
                            <Card style={{ width: '20rem',backgroundColor:"silver" }}>
                                <Card.Body>
                                    <Card.Title> {user.username}</Card.Title>
                                    <Card.Link href="#"> <button>edit</button>  </Card.Link>
                                    <Card.Link href="#"><button onClick={() => {
                                        handleDelete(user.email)
                                    }}>delete</button></Card.Link>
                                </Card.Body>
                            </Card>     <br/>

                        </div>
                    )
                })}


            
            </div>

        </div>
    )
}

export default UserDetails