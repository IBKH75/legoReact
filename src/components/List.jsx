import Card from "./Card";
import "./list.css";
import products from "./data/product";
console.log(products)




function List({count, onUpdateCount}) {
  return (
    <div className="product-list">
      {products.map(
        (product, index) => (
          product.available && (
          <Card
            key={index}
            name={product.name}
            tag={product.tag}
            price={product.price}
            available={product.available}
            imageSrc={product.imageSrc}
            count={count}
            onUpdateCount={onUpdateCount}
          />
        )
        )
      )}
    </div>
  );
}

export default List;





