import React, { useState, useEffect } from 'react';
import BarNav from '../components/Bar'
import logo from '../img/logo.svg'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Menu = ({setState, state}) => {

  const menuItems = [
    {
      category: 'Салаты',
      img: '',
      items: [
        {
          name: 'Теплый салат с телятиной',
          price: '250гр / 350с',
          count: 0,
          description: 'жаренная телятина, огурцы, помидоры, шпинат, острый перец, восточная заправка',
        },
        {
          name: 'Острый салат',
          price: '250гр / 300с',
          count: 0,
          description: 'отварная говядина, острый перец, свежая зелень, помидоры, огурцы, лук, соевый соус',
        },
        {
          name: 'Греческий салат',
          price: '250гр / 300с',
          count: 0,
          description: 'сыр "Фетакса", свежие помидоры, огурцы, салатные листья, маслины',
        },
        {
          name: 'Цезарь салат',
          price: '250гр / 350с',
          count: 0,
          description: 'микс из листьев салата, куриное филе, гренки "цезарь", сыр пармезан,соус',
        },   
        {
          name: 'Колибри салат',
          price: '250гр / 300с',
          count: 0,
          description: 'куриное филе, кукуруза, свежие овощи, картофель пай, майонез',
        },
        {
          name: 'Нежный салат',
          price: '250гр / 300с',
          count: 0,
          description: 'огурцы, сыр, помидоры, коп. колбаса, майонез',
        },
        {
          name: 'Фруктовый салат',
          price: '250гр / 300с',
          count: 0,
          description: 'фрукты по сезону , заправляется йогуртом',
        },
        {
          name: 'Фирменный салат "Пит-Стоп"',
          price: '250гр / 350с',
          count: 0,
          description: 'говядина, баклажан, огурцы,помидор, перец полугорький',
        },
        {
          name: 'Баклажан салат',
          price: '250гр / 350с',
          count: 0,
          description: 'помидор, баклажан, кисло-сладкий соус',
        },
        {
          name: 'Свежий салат',
          price: '250гр / 300с',
          count: 0,
          description: 'Свежие огурцы, помидоры, репчатый лук, свежая зелень',
        },
        {
          name: 'Острый язык',
          price: '250гр / 300с',
          count: 0,
          description: 'огурцы,язык,морковь,соус',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Первые блюда',
      items: [
        {
          name: 'Шорпо',
          price: '280с',
          count: 0,
          description: 'мясной бульон с добавлением картофеля, моркови, мясо, посыпанный с зеленью',
        },
        {
          name: 'Солянка',
          price: '300с',
          count: 0,
          description: 'телятина , копчености , соленые огурцы , маслины , лимон',
        },
        {
          name: 'Суп острый',
          price: '280с',
          count: 0,
          description: 'говядина , фунчеза , овощи',
        },
        {
          name: 'Пельмени',
          price: '280с',
          count: 0,
          description: 'говяжий фарш , сметана , зелень',
        },
        {
          name: 'Мампар',
          price: '280с',
          count: 0,
          description: 'суп из говядины с тестом',
        },
        {
          name: 'Кукси Корейский',
          price: '280с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Долма суп',
          price: '350с',
          count: 0,
          description: 'ребра,говяжие тефтели,брокколи,картофель,яйца пер.,зелень',
        },
        {
          name: 'Рамён с яйцом',
          price: '250с',
          count: 0,
          description: ' ',
        },
       
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Вторые блюда',
      items: [
        {
          name: 'Телятина с картофелем под сыром',
          price: '400с',
          count: 0,
          description: 'телятина , обжаренный картофель , сыр , майонез',
        },
        {
          name: 'Фрикассе с гарниром',
          price: '400с',
          count: 0,
          description: 'куриное филе , грибы , лук , кукуруза , сметана',
        },
        {
          name: 'Мясо в горшочке',
          price: '400с',
          count: 0,
          description: 'говядина , грибы , картофель , помидоры , сыр',
        },
        {
          name: 'Куурдак с картошкой',
          price: '470с',
          count: 0,
          description: 'говядина , картофель , лук',
        },
        {
          name: 'Жаровня',
          price: '480с',
          count: 0,
          description: 'говядина с овощами',
        },
        {
          name: 'Фирменное блюдо " Пит-Стоп "',
          price: '1600с',
          count: 0,
          description: 'тибон стейк , кебаб , крылышки , овощи , соус',
        },
        {
          name: 'Тибон стейк',
          price: '1200с',
          count: 0,
          description: 'Сочный стейк  , КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ , соус',
        },
        {
          name: 'Люля Кебаб',
          price: '400с',
          count: 0,
          description: 'говяжий фарш',
        },
        {
          name: 'Кур.грудка с овощами',
          price: '300с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Казан кебаб',
          price: '480с',
          count: 0,
          description: '',
        },
        {
          name: 'Мясо с фри',
          price: '400с',
          count: 0,
          description: '',
        },
        {
          name: 'Курица по Княжески',
          price: '300с',
          count: 0,
          description: '',
        },
        {
          name: 'Мясо по китайски',
          price: '400с',
          count: 0,
          description: '',
        },
        {
          name: 'Босо лагман',
          price: '250с',
          count: 0,
          description: '',
        },
        {
          name: ' Рыба под сливочным соусом                                           ',
          price: '450с',
          count: 0,
          description: '',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Бургеры',
      items: [
        {
          name: 'Бургер с мясом',
          price: '250гр / 300с',
          count: 0,
          description: 'мясная котлета , булочка , овощи , горчичный соус , сыр , картофель фри ',
        },
        {
          name: 'Клаб сендвич',
          price: '250гр / 220с',
          count: 0,
          description: 'Клаб сендвич',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Закуски',
      items: [
        {
          name: 'Разносолы',
          price: '400гр / 450с',
          count: 0,
          description: 'селёдка , маринованные черри , грибочки , корнишоны , отварной картофель ',
        },
        {
          name: 'Мясное ассорти',
          price: '250гр / 480с',
          count: 0,
          description: 'отварная говядина , копчёная телятина , говяжий язык , зелень',
        },
        {
          name: 'Свежие овощи',
          price: '450гр / 400с',
          count: 0,
          description: 'помидоры , огурцы , перец болгарский , зелень , соус',
        },
        {
          name: 'Пивной сет',
          price: '800гр / 1200с',
          count: 0,
          description: 'фри , куриные крылышки , крокеты , луковые кольца , чечел , чипсы , чесночные гренки , соус',
        },
        {
          name: 'Гриль сет',
          price: '400гр / 600с',
          count: 0,
          description: 'острые мясные , нежные куриные домашние колбаски , овощи на гриле',
        },
        {
          name: 'Чикен сет',
          price: '500гр / 500с',
          count: 0,
          description: 'куриные крылышки , куриная грудка , картофель фри , чесночный соус',
        },
        {
          name: 'Куриные крылышки',
          price: '250гр / 350с',
          count: 0,
          description: 'крылышки в кисло-сладком соусе',
        },
        {
          name: 'Хрустящие куриные крылышки',
          price: '300гр / 350с',
          count: 0,
          description: 'хрустящие жаренные крылышки в кляре',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Выпечка',
      items: [
        {
          name: 'Хлеб',
          price: '1шт / 40с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Боорсок',
          price: '1кг / 200с',
          count: 0,
          description: ' ',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Соусы',
      items: [
        {
          name: 'Тартар',
          price: '70с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Чесночный',
          price: '70с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Кисло-сладкий',
          price: '70с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Овощной-сладкий',
          price: '70с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Овощной-острый',
          price: '70с',
          count: 0,
          description: ' ',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Гарниры',
      items: [
        {
          name: 'Рис отварной',
          price: '100с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Картофель по деревенски',
          price: '200с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Овощи гриль',
          price: '150с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Фри',
          price: '150с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Рис с яйцом',
          price: '150с',
          count: 0,
          description: ' ',
        },
        {
          name: 'Рис с овощами',
          price: '150с',
          count: 0,
          description: ' ',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Пицца',
      items: [
        {
          name: 'Пепперони Большая',
          price: '600с',
          count: 0,
          description: 'соус , сыр моцарелла , салями',
        },
        {
          name: 'Пепперони Маленькая',
          price: '450с',
          count: 0,
          description: 'соус , сыр моцарелла , салями',
        },
        {
          name: '4 Сыра Большая',
          price: '600с',
          count: 0,
          description: '( моцарелла , пармезан , голландский , брынза',
        },
        {
          name: '4 Сыра Маленькая',
          price: '500',
          count: 0,
          description: '( моцарелла , пармезан , голландский , брынза',
        },
        {
          name: 'Ассорти Большая',
          price: '650с',
          count: 0,
          description: 'говядина , куриное филе , овощи , кукуруза , салями , помидор , сыр',
        }, 
        {
          name: 'Ассорти Маленькая',
          price: '550с',
          count: 0,
          description: 'говядина , куриное филе , овощи , кукуруза , салями , помидор , сыр',
        },
        {
          name: 'Цезарь Большая',
          price: '650с',
          count: 0,
          description: 'куриное филе , соус цезарь , листья салата , сыр',
        }, 
        {
          name: 'Цезарь Маленькая',
          price: '600с',
          count: 0,
          description: 'куриное филе , соус цезарь , листья салата , сыр',
        },
        {
          name: 'Чили Большая',
          price: '650с',
          count: 0,
          description: 'говяжий фарш',
        }, 
        {
          name: 'Чили Маленькая',
          price: '600с',
          count: 0,
          description: 'говяжий фарш',
        },
        {
          name: 'Хачапури по Аджарски',
          price: '300с',
          count: 0,
          description: '',
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: 'Банкетное меню',
      items: [
        {
          name: 'Плов с шакарапом',
          price: '1кг / 2500с',
          imageSrc: '',
          description: '',
        },
        {
          name: 'Хан Куурдак',
          price: '1кг / 2000с',
          imageSrc: '',
          description: '',
        },
        {
          name: 'Курица',
          price: '900гр / 1200с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Рыба(форель)',
          price: '1кг / 1200с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Манты',
          price: '5шт / 300с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Самсы',
          price: '1шт / 80с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Лазы Джи',
          price: '1кг / 1500с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Дапанджи',
          price: '1кг / 1500с',
          imageSrc: '',
          description: '',
        }, 
        {
          name: 'Долма',
          price: '2кг / 3000с',
          imageSrc: '',
          description: '',
        },
        // Add more lunch items as needed
      ],
    },
    {
      category: 'Барное меню',
      items: [
        {
          title: 'Прохладительные напитки ',
          name: 'Натуральный сок',
          price: '1л / 260с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Coca Cola, Fanta, Sprite',
          price: '250мл - 80с / 1л - 180с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'BonAqua',
          price: '1л / 85с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Red bull',
          price: '250мл / 260с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Nitro',
          price: '500мл / 130с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Schweppes',
          price: '250мл / 140с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },

          // 2
        {
          title: 'Горячие напитки',
          name: 'Ягодный микс',
          price: '250с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Веселый апельсин',
          price: '250с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Облепиховый',
          price: '250с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Имбирный',
          price: '250с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Чай черный',
          price: '80с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
        {
          name: 'Чай зеленый',
          price: '80с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },



        //3
        {
          title: 'Пиво бутылочное',
          name: 'Балтика 0,7,9',
          price: '500мл / 170с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'Stella',
          price: '500мл / 240с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'Bud',
          price: '500мл / 240с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'Corona extra',
          price: '330мл / 295с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'Heineken',
          price: '330мл / 250с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'Арпа',
          price: '500мл / 180с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },{
          name: 'ESSA',
          price: '500мл / 200с',
          imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
          description: ' ',
        },
      ],
    },
  ];
  
 let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(`Saved ${cart.length} items to localstorage`);
}, [cart]); //dependency is items

// Add a new item
const addToCart = (item) => {
    setCart([...cart, item]);
};


  return (
      <div className="py-1 z-10 w-100">
        <Link to="/pitstop/cart">
        <div className='cartIcon' style={{position: 'sticky',
         top: '10px', marginLeft: '80%',}} >
      <div style={{
        width: '70px',
        color: 'white',
        borderRadius: 10,
        background: '#fea116',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '-25px'
        }}>
        
            <div>
              <IoCartOutline />
            </div>
            <div style={{color: 'white'}}>
              <h3 style={{color: 'white'}}>{cart.length}</h3>
            </div>
        </div>
        </div>
        </Link>
        <div className="container">
          <div>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <img className='imgLogo' src={logo} alt="logo" width={300}/>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-4">
              {menuItems.map((category, index) => (
                <li className="nav-item" key={index} onClick={() => setState(index)}>
                  <a
                    className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
                      index === 0 ? 'active' : ''
                    }`}
                    data-bs-toggle="pill"
                    href={`#tab-${index + 1}`}
                  >
                    <i
                      className={`fa fa-${category.icon} fa-1x text-primary`}
                    />
                    <div className="ps-3">
                      <text className="text-body">{category.category}</text>
                      <h6 className="mt-n1 mb-0">{category.name}</h6>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            {state === 10 ? <BarNav cart={cart} setCart={setCart}/> : <></>}
            <div className="tab-content">
              {state !== 10 ? menuItems.map((category, index) => (
                <div
                  id={`tab-${index + 1}`}
                  className={`tab-pane fade show p-0 ${
                    index === 0 ? 'active' : ''
                  }`}
                  key={index}
                >
                  <div className="row g-4">
                    {category.items.map((item, itemIndex) => (
                      <div className="col-lg-6" key={itemIndex}>
                        <h1 className='pb-4 mt-4'>{item?.title}</h1>
                        <div className="d-flex align-items-center">
                          <div className="w-100 d-flex flex-column text-start ps-1">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <div className='d-flex' style={{marginBottom: '15px'}}>
                              <span className="text-primary text-slate-950">{item.price}</span>
                              <IoAddCircleOutline size={30} style={{marginLeft: '15px', marginTop: '-5px'}} onClick={() => addToCart({...item, id:itemIndex + 1123})}/> 
                            </div>
                            </h5>
                            <small className="fst-italic">
                              {item.description}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )) : <></>}
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Menu;
