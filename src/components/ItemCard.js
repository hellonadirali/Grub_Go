import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import {React , useEffect, useState} from 'react';
import { Items } from './Data';
import {actionType} from './reducer';
import {useStateValue} from "./StateProvider";
let cartData = [];

function ItemCard({imgSrc, name, ratings, price, itemId}) {
    const [isFavourite, setFavourite] = useState(false);
    const [ratingvalue , setRatingValue] = useState(Math.floor(ratings));

    const [isCart, setCart] = useState(null);
    const [{}, dispatch] = useStateValue();
    
    useEffect(() =>{
        if(isCart){
            cartData.push(isCart);
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            });
        }
    },[isCart]);

    const handleClick = (value) => {
        setRatingValue(value);
        
    }
    
  return (
    <div className="itemCard" id={itemId}>
        <div className={`isfavourite ${isFavourite ? "active" : ""}`}
        onClick={()=> setFavourite(!isFavourite)}>
            <Favorite/>
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt="" className='itemImg'/>
        </div>
        <div className="itemContent">
            <h3 className='itemName'>{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null, {length:5}).map((e,i)=>(
                        <i key={i}  className={`rating ${ratingvalue > i ? "orange" : "grey"}`}
                        onClick={()=> handleClick(i + 1)}>
                    
                            <StarRounded/>
                        </i>
                    ))}
                    <h3 className="price"><span>$ </span>{price}</h3>
                </div>
                <i className="addtoCard"   
                onClick= {() => setCart(Items.find(n => n.id === itemId))}>
                    <AddRounded/>
                </i>
            </div>
        </div>
    </div>
  )
}

export default ItemCard