
function App() {
  return (
  <div className="wrapper clear">
    <header className="d-flex justify-between align-center">
      <div className="headerLeft d-flex">        
        <img with={40} height={40} src="img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

    <ul className="headerRight d-flex">

      <li className="mr-30 d-flex align-center">
        <img width={20} height={20} src="img/cart.svg" alt="cart" />
        <span>1205 руб.</span>
      </li>

      <li className="mr-30">
        <img width={20} height={20} src="img/favorite.svg" alt="favorite" />
      </li>

      <li>
        <img width={20} height={20} src="img/user.svg" alt="user" />
      </li>
    </ul>

    </header>
    <div className="content p-40">

      <h1 className="mb-40">Все кроссовки</h1>
      
    <div className="sneakers d-flex justify-between">
    <div className="card">
        <img width={133} height={112}src="img/sneakers/1.jpg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex align-center justify-between">
          <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
          </div>
          <button className="button"><img width={11} height={11} src="img/plus.svg" alt="plus" /></button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112}src="img/sneakers/2.jpg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex align-center justify-between">
          <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
          </div>
          <button className="button"><img width={11} height={11} src="img/plus.svg" alt="plus" /></button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112}src="img/sneakers/3.jpg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex align-center justify-between">
          <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
          </div>
          <button className="button"><img width={11} height={11} src="img/plus.svg" alt="plus" /></button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112}src="img/sneakers/4.jpg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex align-center justify-between">
          <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
          </div>
          <button className="button"><img width={11} height={11} src="img/plus.svg" alt="plus" /></button>
        </div>
      </div>
    </div>
    </div>
  </div>  );
}

export default App;
