import React from 'react'
import GrowerDetails from '../components/Grower/GrowerDetails';
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GrowerDetailsPage() {
    const [grower, setGrower] = useState({});
    const [growercart, setGrowerCart] = useState([]);
    const [growerreview, setGrowerReview] = useState([]);
    // const [growerreview, setGrowerReview] = useState([]);
    const {id}=useParams();
    useEffect(() => {
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=growerbyid",{params:{id}})
        .then((response) => {
         
          setGrower(response.data.producteur);
        });
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=growercart",{params:{id}})
        .then((response) => {
          setGrowerCart(response.data.carts);
        });
        axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=growerreview",{params:{id}})
        .then((response) => {
          setGrowerReview(response.data.review);
        });
        // axios
        // .get("http://127.0.0.1/AmapCo-Back/index.php?action=growerreviewbyuserid",{params:{id}})
        // .then((response) => {
        //   console.log(response.data.review);
        //   setGrowerReviewByUserId(response.data.review);
    }, []);
  
    return (
      <>
        <Navbar />
        <GrowerDetails grower={grower} growercart={growercart}  growerreview={growerreview} />
      </>
    );
  }

export default GrowerDetailsPage