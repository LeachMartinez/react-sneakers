function Header(){
  return(
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
  )
}

export default Header;