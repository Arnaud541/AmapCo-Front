import { useState } from "react";



function SignUp() {

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        profilePicture: ""
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
                    <input type="text" name="email" placeholder='Email' onChange={handleChange} />
                    <input type="text" name="name" placeholder='Name' onChange={handleChange} />
                    <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} />
                    <input type="file" name='profilePicture' accept="image/*" onChange={handleChange} />
                    <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;