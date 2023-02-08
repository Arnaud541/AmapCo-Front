import React, { useEffect } from "react";
import SignUp from '../components/Signup/SignUp';


function SignUpPage() {

    useEffect(() => {
        axios
          .post("http://127.0.0.1/AmapCo-Back/index.php?action=signUp")
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <>
            <SignUp />
        </>
    )
}

export default SignUpPage;