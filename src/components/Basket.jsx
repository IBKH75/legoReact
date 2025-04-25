
import "./basket.css";

function Basket({count, articles}) {
 
  return (
    <div className="basket">
     <h2>Panier</h2>
     <ul>
      {articles.map((articles)=>(
        <li>
          {articles}
        </li>
      
     ))}
     </ul>
     {!count ? <p> le panier est vide</p>:<p>total du panier:{count}</p> }
     
    </div>
   
  );
}

export default Basket;







