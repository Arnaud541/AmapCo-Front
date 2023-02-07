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
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=GrowerById",{params:{id}})
        .then((response) => {
          console.log(response.data.producteur)
          console.log(response)
          setGrower(response.data.producteur[0]);
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