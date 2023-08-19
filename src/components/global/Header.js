import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const navigate = useNavigate()
    const items = useSelector(state => state.cart);

    return (
        <div>
            <header className="header flex">
                <div className="logo_box">
                    <h1 className="logo">Eco Food</h1>
                    <h1 className="desc_logo">Ukraine</h1>
                </div>
                <nav>
                    <ul className="ul__header flex">
                        <li>Крамниця</li>
                        <li>Про нас</li>
                        <li>Відгуки</li>
                        <li>Зв'язатися з нами</li>
                    </ul>
                </nav>
                <div className="right_bar__header flex">
                    <h1 className="language flex">Укр</h1>
                    <button data-cart-count={items.length} onClick={() => navigate("/cart")} className="cart"></button>
                </div>
            </header>
            <div className="header__block flex">
                <div className="images_header flex">
                    <img src="../img/header/plant.png" alt="" />
                    <img src="../img/header/leaves.png" alt="" />
                </div>
                <div className="description__header_block">
                    <h1 className="title_header">Eco Food Ukraine</h1>
                    <h1 className="description">Ми спеціалізуємось на виробництві органічних продуктів харчування місцевого виробництва.</h1>
                    <button className="button__store" href="#store">Крамниця</button>
                </div>
            </div>
      </div>
    )
}