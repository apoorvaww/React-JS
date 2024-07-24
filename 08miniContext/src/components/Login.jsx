import React, {useState, useContext} from "react";
import userContext from "../context/userContext";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')


    const {setUser} = useContext(userContext)


    const handleSubmit = (e) => {
        e.preventDefault() //preventing the default behaviour of the submit button which is to send the data to backend.
        setUser({username, password})
    }


    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}

            />
            {"  "}
            <input type="password"
            value={password} placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login