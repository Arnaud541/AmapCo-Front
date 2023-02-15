import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/signin");
  });
}

export default SignOut;
