import { useState } from "react";

function Paniers(){

const [paniers, setPaniers] = useState({
    paniers: ['item1', 'item2', 'item3']
})

console.log(paniers);

const listItems = paniers.paniers.map((panier) =>
    {console.log(panier), <li>{panier}</li>});

return (<ul>{listItems}</ul>)

}



export default Paniers;