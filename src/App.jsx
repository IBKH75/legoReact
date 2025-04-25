import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import React, { useState } from 'react';

import "./App.css";

function App() {
  const [count, setCount,] = useState(0);
  const [articles, setArticles]=useState([]);

  return (
    <>
    
      <Header />
      <div className="NameContainer">
      <List 
      count={count} 
      onUpdateCount={setCount}
      articles={articles}
      onUpdateArticles={setArticles}
      />
      <Basket
       count={count}
       articles ={articles}
      />
      </div>
      <Footer />
    </>
  );
}

export default App;








