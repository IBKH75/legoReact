
import "./basket.css";

function Basket({count}) {
 
  return (

    <div className="basket">
     <h2>Panier</h2>
     {!count ? <p> le panier est vide</p>:<p>total du panier:{count}</p> }
     
    </div>
  );
}

export default Basket;







