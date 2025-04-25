import Card from "./Card";
import "./list.css";
import products from "./data/product";





function List({count, onUpdateCount,articles,onUpdateArticles}) {
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
            articles ={articles}
            onUpdateArticles={onUpdateArticles}
          />
        )
        )
      )}
    </div>
  );
}

export default List;





