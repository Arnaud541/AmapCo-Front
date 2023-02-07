import React from 'react'
import GrowerDetails from '../components/Grower/GrowerDetails';
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

function GrowerDetailsPage() {
    const [grower, setGrower] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=GrowerById")
        .then((response) => {
          setGrower(response.data.producteurs);
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