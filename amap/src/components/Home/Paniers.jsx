import { useState } from "react";

function Paniers() {
  const [paniers, setPaniers] = useState({
    paniers: ["item1", "item2", "item3"],
  });

  return (
    <ul>
      {paniers.paniers.map((p) => (
        <li>{p}</li>
      ))}
    </ul>
  );
}

export default Paniers;
