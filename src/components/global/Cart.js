import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions";
import { getItemQuantity } from "../../store/selectors";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart);

    const price = (quantity, item) => {
        return quantity * parseFloat(item.price)
    }

    const toPay = () => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += price(getItemQuantity(items, items[i].id), items[i]);
        }
        return sum;
    };

    return (
        <div>
            <div onClick={() => navigate("/")} className="logo_box">
                <h1 className="logo">Eco Food</h1>
                <h1 className="desc_logo">Ukraine</h1>
            </div>
            {items.length === 0 ? (
                <p className='waring'>У вас нема товарів у кошику.</p>
            ) : (
                <div>
                    <div className="to_pay flex">
                        <h1 className="pay">До сплати: <span>{toPay()}</span> грн</h1>
                        <button onClick={() => navigate("/pay")} className="button_pay">Оформити замовлення</button>
                    </div>
                    {items.map((item) => {
                        const quantity = getItemQuantity(items, item.id);

                        return (
                            <div className="product_box__cart flex" key={item.id}>
                                <img className="product_image" src={item.src} alt={item.name} />
                                <h1 className="product_name">{item.name}</h1>
                                <div className="ui_product__cart flex">
                                    <h1 className="price">₴{item.price} / 100г</h1>
                                    <h1 className="quantity">
                                        {quantity}00г - {price(quantity, item)} грн
                                    </h1>
                                    <button 
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="delete_product">
                                        <i className="fa fa-trash" style={{"fontSize":"30px"}}></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}