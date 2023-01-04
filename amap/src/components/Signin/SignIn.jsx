import { useState } from "react";


function SignIn() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setUser(() => ({
                ...user,
                [event.target.name]: event.target.value,
              }));
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <div className='login'>
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username:</p>
                    <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" name='password' onChange={handleChange} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )



}

export default SignIn;