import { useEffect, useState } from "react";
import axios from "axios";

import "./Growers.css";

function Growers() {

    const [growers, setGrowers] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=grower")
        .then((response) => {
          console.log(response)
          setGrowers(response.data.producteur)
        });
    }, [])

    return (
      <div className="Items">
        {growers.map((grower) => (
          <div className="Item">
            <img src="https://media.discordapp.net/attachments/1003826430574071899/1060927379989614682/Profile_avatar_placeholder_large.png"/>
            <h1>{grower.nom}  {grower.prenom}</h1>
            <p>{grower.region}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Growers