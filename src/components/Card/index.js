import React from 'react';
import CardStyles from './Card.module.scss';

function Card(props){
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFav, setIsFav] = React.useState(false);
  let {title, price, imageUrl} = props;

  const addToFav = () => {
    setIsFav(!isFav);
  } 
  
  const addToCart = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.favourite} onClick={addToFav}>
        <img width={32} height={32} src={isFav ? "img/fav-active.svg" : "img/fav.svg"} alt="favourite" />
      </div>
      <img width={133} height={112}src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex align-center justify-between">
        <div className="d-flex flex-column">
        <span className="opacity-5 text-uppercase">Цена:</span>
        <b>{price} руб.</b>
        </div>
          <img className={CardStyles.plus} onClick={addToCart} src={isAdded ? 'img/add-btn-active.png' : 'img/add-btn.svg'} alt="plus"/>
      </div>
    </div>
  )
}

export default Card;