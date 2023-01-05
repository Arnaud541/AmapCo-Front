import { useState } from "react";

function Growers() {

    const [growers, setGrowers] = useState({
      growers: ["grower1", "grower2", "grower3"],
    });
  
    return (
      <ul>
        {growers.growers.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    );
  }
  
  export default Growers