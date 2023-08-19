import React from "react";
import axios from 'axios';
import Slider from "../UI/slider/Slider";
import TechnologyCard from "../UI/TechnologyCard/TechnologyCard";
import Inf from "../UI/Info/Inf";
import ReactPlayer from 'react-player'

export default function Main() {
  const [products, setProducts] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const currentUrl = window.location.href;

  React.useEffect(() => {
    axios.get(`${currentUrl}/db.json`)
      .then(response => {
        setProducts(response.data.products);
        setReviews(response.data.reviews)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [currentUrl])

  return (
    <div className="container">
      <div className="inf__block">
        <Inf 
          title="Про нас" 
          desc1="Наша компанія присвячена створенню високоякісних продуктів, які вирощуються та виробляються з дбайливим ставленням до навколишнього середовища."
          button="ознайомитись з продуктами"
          desc2="Ми прагнемо забезпечити споживачів здоровою та натуральною альтернативою у світі харчових продуктів."
        />
      </div>
      <div className="best_sellers_block">
        <Slider isSlide="products" head={"Хіти продажів"} arrPhoto={products.slice(0, 4)} />
      </div>
      <div className="product__cookie flex">
        <img src="../img/products/cookie.png" alt="cookie" />
        <div className="text_block__cookie">
          <h1 className="title_block">Натуральне Веганське Печиво ручної роботи 100 гр</h1>
          <h1 className="description">Склад: фініки, банан, вівсяні пластівці, борошно спельтове, сода харчова, лимонний сік, насіння кунжуту, льон, гарбузове пюре, насіння гарбуза.</h1>
          <button className="button_desc__about_us">купити зараз</button>
        </div>
      </div>
      <div className="best_sellers_block">
        <Slider isSlide="products" head={"Наші новинки"} arrPhoto={products.slice(4, 8)} />
      </div>
      <div className="technology_block flex">
        <TechnologyCard 
          img="../img/icons/briliant1.svg"
          title="Сучасні технології"
          desc="Сучасні технології, такі як гідропоніка, аеропоніка, вертикальне фермерство та інші, дозволяють ефективно вирощувати їжу в умовах обмеженої площі та з використанням мінімальної кількості ресурсів."
        />
        <TechnologyCard 
          img="../img/icons/save-the-world.svg"
          title="100% органічно"
          desc="Сучасні методи переробки еко їжі використовуються з мінімальним використанням хімічних речовин та енергії. "
        />
        <TechnologyCard 
          img="../img/icons/flower.svg"
          title="Якість"
          desc="Ми надаємо споживачам детальну інформацію про методи вирощування та виробництва, сертифікацію, а також про довкілля та соціальну відповідальність компанії"
        />
      </div>
      <div className="player_block">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=Z5XdLJ_j80c&ab_channel=%D0%9C%D0%9E%D0%AF%D0%9A%D0%A0%D0%90%D0%87%D0%9D%D0%90'
          className="player"
        />
      </div>
      <div className="search">
        <Inf 
            title="Пошук та підготовка продуктів" 
            desc1="У Eco Food Ukraine ми покладаємо особливу увагу на процес пошуку та підготовки продуктів екологічного харчування. Наша компанія присвячена наданню найякісніших та екологічно чистих продуктів, і ми прагнемо зробити цей процес легким та зручним для наших клієнтів."
            desc2="Здорова їжа, яка вирощується з дбайливим ставленням до навколишнього середовища, сприяє нашому фізичному та емоційному благополуччю. Тим самим, ми підтримуємо екологічне виробництво, зменшуємо використання шкідливих хімічних речовин та мінімізуємо негативний вплив на природу. "
        />
      </div>
      <div className="reviews_block">
        <Slider isSlide="review" head={"Відгуки"} arrPhoto={reviews} />
      </div>
      <div className="quality_block">
        <div className="quality">
          <Inf 
              title="Сертифікати якості" 
              desc1="Наша продукція сертифікована відповідно до міжнародного стандарту ENplus® ID-No.: UA 012 та DINplus No.: 7А377."
              desc2="Продукція виготовлена ​​з дотриманням технологічних норм та відповідає стандартам якості."
          />
        </div>
        <div className="certificates flex">
          <img src="../img/certificates/1.png" alt="certificate" />
          <img src="../img/certificates/2.png" alt="certificate" />
          <img src="../img/certificates/1.png" alt="certificate" />
        </div>
      </div>
    </div>
  );
}