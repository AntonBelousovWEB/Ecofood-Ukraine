import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../../../style/custom-pagination.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions";

export default function Slider({ head, arrPhoto, isSlide }) {
    const dispatch = useDispatch()
    const [perPage, setPerPage] = React.useState(3);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setPerPage(1);
            } else {
                setPerPage(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="slider">
            <h1 className="title_block">{head}</h1>
            <div className="products">
                <Splide options={{
                    drag: "free",
                    arrows: true,
                    pagination: false,
                    perPage: perPage,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 1
                    }
                }} extentions={{ AutoScroll }}>
                    
                {arrPhoto && arrPhoto.map(item => {
                    const starColor = getRandomColor();
                    const backgroundColor = getRandomColor();

                    return (
                      <SplideSlide key={item.id}>
                          <div className="Cards">
                              {isSlide === "products" ? (
                                  <div className="productCard">
                                      <img src={item.src} alt={item.alt} />
                                      <h1 className="product_name">{item.name}</h1>
                                      <h1 className="product_desc">{item.desc}</h1>
                                      <div className="price_block flex">
                                          <h1 className="price">₴{item.price} / 100г</h1>
                                          <button 
                                            className="cart" 
                                            onClick={() => dispatch(addToCart(item))}
                                          />
                                      </div>
                                  </div>
                              ) : (
                                  <div 
                                    style={{ "background": backgroundColor }} 
                                    className="reviewCard">
                                      <div className="global_inf__card flex">
                                          <div className="global_photo flex">
                                              <img src={item.src} alt={item.id} />
                                              <div>
                                                  <h1 className="review_name">{item.name}</h1>
                                                  <h1 className="review_role">{item.role}</h1>
                                              </div>
                                          </div>
                                          <h1 
                                              style={{ "color": starColor }} 
                                              className="review_star">{item.stars}</h1>
                                      </div>
                                      <h1 className="description_review">{item.review}</h1>
                                  </div>
                              )}
                          </div>
                      </SplideSlide>
                  )})}
                </Splide>
            </div>
        </div>
    )
}