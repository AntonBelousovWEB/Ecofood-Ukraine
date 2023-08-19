import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="flex">
                <div className="column">
                    <div className="logo_box">
                        <h1 className="logo">Eco Food</h1>
                        <h1 className="desc_logo">Ukraine</h1>
                    </div>
                    <h1 className="text_column">Виробництві органічних продуктів харчування місцевого виробництва.</h1>
                    <button className="button_desc__about_us">ознайомитись з продуктами</button>
                </div>
                <div className="column">
                    <h1 className="title_column">Інформація</h1>
                    <nav>
                        <ul className="column_navigation">
                            <li>Про нас</li>
                            <li>Доставка</li>
                            <li>Оплата</li>
                            <li>Політика конфеденційності</li>
                            <li>Умови повернення</li>
                        </ul>
                    </nav>
                </div>
                <div className="column">
                    <h1 className="title_column">Наша адреса</h1>
                    <nav>
                        <ul className="column_navigation">
                            <li>м. Ужгород, пр. Соборний, 24</li>
                            <li>Email: info@ecofood.in.ua</li>
                        </ul>
                    </nav>
                </div>
                <div className="column">
                    <h1 className="title_column">Контакти</h1>
                    <nav>
                        <ul className="column_navigation numbers">
                            <li>(099) 897 88 89</li>
                            <li>(097) 855 23 90</li>
                        </ul>
                        <ul className="socialmedias">
                            <a href="https://"><i className="fa fa-instagram" style={{"fontSize":"24px"}}></i></a>
                            <a href="https://"><i className="fa fa-facebook" style={{"fontSize":"24px"}}></i></a>
                            <a href="https://"><i className="fa fa-linkedin" style={{"fontSize":"24px"}}></i></a>
                            <a href="https://"><i className="fa fa-twitter" style={{"fontSize":"24px"}}></i></a>
                        </ul>
                    </nav>
                </div>
            </footer>
            <h1 className="copyright">Copyright © 2023 EcoFood Ukraine. All rights reserved.</h1>
        </div>
    )
}