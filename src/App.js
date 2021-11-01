import Card from './components/Card';
import React from 'react'
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() =>{
    fetch("https://6176728e03178d00173dac2b.mockapi.io/items")
    .then(res => res.json())
    .then(arr => setItems(arr))
  }, []);

  return (
  <div className="wrapper clear">
    {cartOpened && <Cart clickToOverlay={() => setCartOpened(false)}/>}
    <Header clickToCart={()=> setCartOpened(true)}/>
    
    <div className="content p-40 ">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="img/search.svg" alt="search" width={14} height={14} />
          <input type="text" placeholder="Поиск..." /></div>
      </div>
    <div className="sneakers d-flex flex-wrap">
      {
        items.map((opt) => {
          return ( 
          <Card 
            title={opt.title} 
            price={opt.price} 
            imageUrl={opt.imageUrl}
            addToFav={() => console.log('Add to favorite')}
            addToCart={() => console.log('Add to Cart')}  
          />)
        })
      }
    </div>
    </div>
  </div>  );
}

export default App;
