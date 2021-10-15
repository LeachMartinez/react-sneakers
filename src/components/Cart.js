function Cart(){
  return(
    <div style={{display: 'none'}} className="cart">
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
  )
}

export default Cart;