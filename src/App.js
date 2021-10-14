
function App() {
  return (
  <div className="wrapper clear">
    <div className="cart">
      <div className="overlay"></div>
      <div className="shopping-cart p-30">
        <h2>Корзина</h2>
        <div className="cart-block" id="cartb">
          <div className="cart-item d-flex align-center mb-20">
            <div 
              style={{
              backgroundImage: 'url(img/sneakers/1.jpg)'
            }} 
              className="cart-item-img"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/shop-cart-closebtn.svg" alt="close-btn" />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <div 
              style={{
              backgroundImage: 'url(img/sneakers/1.jpg)'
            }} 
              className="cart-item-img"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/shop-cart-closebtn.svg" alt="close-btn" />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <div 
              style={{
              backgroundImage: 'url(img/sneakers/1.jpg)'
            }} 
              className="cart-item-img"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/shop-cart-closebtn.svg" alt="close-btn" />
          </div>
        </div>
          <div className="cart-total">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб</b>
              </li>
              <li>
                <span>Налог: 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>оформить заказ</button>
          </div>
      </div>
    </div>
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
    <div className="content p-40 ">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="img/search.svg" alt="search" width={14} height={14} />
          <input type="text" placeholder="Поиск..." /></div>
      </div>
    <div className="sneakers d-flex justify-between">
    <div className="card">
      <div className="favourite">
        <img src="img/fav.svg" alt="favourite" />
      </div>
        
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
