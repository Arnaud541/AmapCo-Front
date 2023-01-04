
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

    return (
        <div class='login'>
            <h1>LOG IN</h1>
            <form>
                <label>
                    <p>Username:</p>
                    <input type="text" onChange={handleChange} />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={handleChange} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;