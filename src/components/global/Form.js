import React from 'react';
import { useForm } from '../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getItemQuantity } from '../../store/selectors';

export default function Form() {
    const navigate = useNavigate()
    const items = useSelector(state => state.cart);
    const [message, setMessage] = React.useState("");
    const initialValues = { 
        name: '',
        email: '',
        phone: '',
    };

    const { values, handleChange, resetForm } = useForm(initialValues);

    const toPay = () => {
        return items.reduce((sum, item) => {
            const quantity = getItemQuantity(items, item.id);
            const itemPrice = parseFloat(item.price);
            return sum + quantity * itemPrice;
        }, 0);
    };    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            `Замовлення +${values.phone}, ${values.name}, ${values.email}\n\n- Продукти: ${JSON.stringify(items)}\n\nВсього до сплати: ${toPay()}`
        );
        setMessage("Заявка успішно відправлена, чекайте зворотнього зв'язку")
        resetForm();
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
                    <h1
                        style={{"display": message ? "block": "none"}} 
                        className='message'>
                            {message && message}
                    </h1>
                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="form-group">
                            <label htmlFor="name">Ім'я:</label>
                            <input
                                className='pay_input'
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                className='pay_input'
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Номер телефону:</label>
                            <input
                                className='pay_input'
                                type="number"
                                id="phone"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-button">Надіслати</button>
                    </form>
                </div>
            )}
        </div>
    );
}