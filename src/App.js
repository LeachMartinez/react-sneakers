import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  return (
  <div className="wrapper clear">
    <Cart/>
    <Header/>
    <div className="content p-40 ">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="img/search.svg" alt="search" width={14} height={14} />
          <input type="text" placeholder="Поиск..." /></div>
      </div>
    <div className="sneakers d-flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  </div>  );
}

export default App;
