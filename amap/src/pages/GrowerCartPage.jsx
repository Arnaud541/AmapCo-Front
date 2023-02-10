import React from "react";
import { useEffect,useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import GrowerCart from "../components/Grower/GrowerCart"
import axios from 'axios';
import { useParams } from "react-router-dom";
  
  function GrowerCartPage() {
    const {id} = useParams();
    const [cartDetails, setCart] = useState([]);
    useEffect(() => {
    axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=cartDetails",{
          params:{
            id
          }
        }).then((response) => {
          console.log(response)
          setCart(response.data.detail);
        });







      },[]);
  return (
    <>
    <Navbar />
      <GrowerCart cartDetails={cartDetails}/>
    </>
      

  );
}

export default GrowerCartPage;
