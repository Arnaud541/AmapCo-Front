import React from 'react'
import GrowerDetails from '../components/Grower/GrowerDetails';
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GrowerDetailsPage() {
    const [grower, setGrower] = useState({});
    const {id}=useParams();
    useEffect(() => {
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=growerbyid",{params:{id}})
        .then((response) => {
          console.log(response);
          console.log("la");
          setGrower(response.data.producteur[2]);
        });
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=getgrowercart",{params:{id}})
        .then((response) => {
          console.log(response);
          console.log("la");
          setGrowerCart(response.data.producteur);
        });
    }, []);
  
    return (
      <>
        <Navbar />
        <GrowerDetails grower={grower} />
      </>
    );
  }

export default GrowerDetailsPage