import React,{useState} from 'react'
import axios from 'axios'



const AddUser=(props)=>{
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [profile, setProfile] = useState('')
    const [userName, setUserName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')


    const handleChange=(e)=>{
        if(e.target.name === "fname"){
            setFname(e.target.value)
        }else if(e.target.name === "lname"){
            setLname(e.target.value)
        }else if(e.target.name === "profile"){
            setProfile(e.target.value)
        }else if(e.target.name === "userName"){
            setUserName(e.target.value)
        }else if(e.target.name === "emailId"){
            setEmailId(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       // console.log(fname,lname,profile,userName,emailId,password)
        const addUserDetails={
            fist_name:fname,
            last_name:lname,
           // profile:profile,
            username:userName,
            email:emailId,
            pwd:password
        }
        console.log("addUserDetails",addUserDetails)

        axios.post("http://15.207.229.231:8000/machstatz/add_new_user",addUserDetails)
            .then((res)=>{
                const newUserDetails=res.data

                
               if(newUserDetails.status === 'Error'){
                alert(newUserDetails.message)
                console.log("In addUserAxios",newUserDetails)
               }else if(newUserDetails.status === 'Success'){

                props.history.push('/userDetails')
                alert(newUserDetails.message)

               }
               
               
            })
            .catch((err)=>{
               
                alert(err.message)
            })
    }


    return(
        <div>
            <h2>Add User Details</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name :</label>     
                <input type="text" placeholder="Enter Your First Name" value={fname} onChange={handleChange} name="fname"/>    <br />  <br />
                <label>Last Name :</label>      
                <input type="text" placeholder="Enter Your Last Name" value={lname} onChange={handleChange} name="lname" />    <br />  <br />
                <label>Profiles :</label>  
                <select value={profile} onChange={handleChange} name="profile">
                    <option value="">Select</option>
                    <option value="good">Good</option>
                    <option value="better">Better</option>
                    <option value="best">Best</option>
                </select>                                           <br/><br/>
                <label>UserName :</label>      
                <input type="text" placeholder="Enter UserName" value={userName} onChange={handleChange} name="userName"/>    <br />  <br />
                <label>Email Address :</label>     
                <input type="email" placeholder="Enter Your Email Id" value={emailId} onChange={handleChange} name="emailId" />    <br />  <br />
                <label>password :</label>      
                <input type="password" placeholder="Enter Password" value={password} onChange={handleChange} name="password"/>    <br />  <br />

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddUser