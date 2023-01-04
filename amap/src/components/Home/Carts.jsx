import { useState } from "react";

function Carts() {
  const [carts, setCarts] = useState({
    carts: ["item1", "item2", "item3"],
  });

  return (
    <ul>
      {carts.carts.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}

export default Carts;
