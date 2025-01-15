import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";


const BarNav = ({cart, setCart}) => {
    const barItem = [
        {
            category: 'Напитки',
            items: [
              { 
                title: 'Прохладительные напитки',
                name: 'Натуральный сок',
                price: '1л / 260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Coca Cola, Fanta, Sprite',
                price: '1л / 180с',
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

              // 

              {
                title: 'Лимонады',
                name: 'Ягодный',
                price: '290с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Киви Яблоко',
                price: '290с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Цитрусовый',
                price: '290с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Арбуз Маракуя',
                price: '290с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Дынно Клубничный',
                price: '290с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
             
            ],
          },
          {
            category: 'Пиво', 
            items: [
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
              {
                title: 'Пиво разливное',
                name: 'Живое',
                price: '500мл / 150с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Urban',
                price: '500мл / 160с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Бархатное',
                price: '500мл / 160с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
                  
            ]
          },
          {
            category: 'Снеки', 
            items: [
              {
                name: 'Чечел',
                price: '100с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
              {
                name: 'Арахис',
                price: '100с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
              {
                name: 'Фисташки',
                price: '150с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
              {
                name: 'Чипсы',
                price: '95с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
              {
                name: 'Сухари',
                price: '80с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
            ]
          },
          {
            category: 'Водка', 
            items: [
              {
                name: 'Absolut  (50мл)',
                price: '210с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'Finlandia  (50мл)',
                price: '210с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'КЫРГЫЗ АРАГЫ  (50мл)',
                price: '140с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'Настроение V  (50мл)',
                price: '110с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'Level  (50мл)',
                price: '95с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'С серебром  (50мл)',
                price: '95с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'Organic  (50мл)',
                price: '95с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, {
                name: 'Королевский  (50мл)',
                price: '95с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },    
            ]
          },

          {
            category: 'Виски', 
            items: [
              {
                name: 'Jack Daniels  (50мл)',
                price: '370с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Jameson  (50мл)',
                price: '360с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Chivas Regal  (50мл)',
                price: '440с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Ballantines (50мл)',
                price: '350с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'William Lawson (50мл)',
                price: '240с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Jim Beam (50мл)',
                price: '350с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },   
            ]
          },
          {
            category: 'Коньяк', 
            items: [
              {
                name: 'Кыргызстан Коньяк (50мл)',
                price: '160с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Бишкек Коньяк (50мл)',
                price: '140с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Hennecy Коньяк (50мл)',
                price: '450с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }, 
            ]
          },
          {
            category: 'Текила', 
            items: [
              {
                name: 'Sierra (Gold, Silver)',
                price: '50мл / 250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },{
                name: 'Sauza (Gold, Silver)',
                price: '50мл / 270с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },{
                name: 'Olmeca (Gold, Silver)',
                price: '50мл / 280c',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                title: 'Шоты на компанию ( 7 шотов )',
                name: 'Текила',
                price: '1300с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Северный экспресс',
                price: '1200с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }
                  
            ]
          },
          {
            category: 'Джин', 
            items: [
              {
                name: 'Gordons (50мл)',
                price: '310с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Glens (50мл)',
                price: '230с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }  
            ]
          },
          {
            category: 'Ром', 
            items: [
              ,
              {
                name: 'Bacardi  (50мл)',
                price: '320с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Captain Morgan  (50мл)',
                price: '330с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Glens  (50мл)',
                price: '230с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }  
            ]
          },
          {
            category: 'Мартини', 
            items: [
              ,
              {
                name: 'Bianco  (100мл)',
                price: '260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Extra dry  (100мл)',
                price: '260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Rosso  (100мл)',
                price: '260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Rosato  (100мл)',
                price: '260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }   
            ]
          },
          {
            category: 'Ликер', 
            items: [
              ,
              {
                name: 'Jagermeister (50мл)',
                price: '230с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Baileys (50мл)',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Kahlua (50мл)',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Sambuca (50мл)',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Absinthe (50мл)',
                price: '270с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }  
            ]
          },
          
          {
            category: 'Вино', 
            items: [
              ,
              {
                name: 'Vartely  (0,75)',
                price: '750с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Marani  (0,75)',
                price: '1500с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Tentador  (0,75)',
                price: '900с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Chile',
                price: '950с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              },
              {
                name: 'Baron Du Val  (0,75',
                price: '900с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }   
            ]
          },
         
          {
            category: 'Шампанское', 
            items: [
              ,
              {
                name: 'Советское',
                price: '900с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Santo Stefano',
                price: '1000с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Мартини Asti',
                price: '2300с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              }     
            ]
          },
          {
            category: 'Алкогольные коктейли', 
            items: [
              {
                name: 'Мохито',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Мохито клубничный',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Голубая лагуна',
                price: '170с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Пина колада',
                price: '220с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Виски кола',
                price: '230с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Джин тоник',
                price: '260с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Текила санрайз',
                price: '300с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Лонг айлэнд',
                price: '330с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'Секс на пляже',
                price: '200с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , {
                name: 'В-52',
                price: '250с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,  
            ]
          },
          {
            category: 'Кальян', 
            items: [
              {
                name: 'Ручной',
                price: '400с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
               {
                name: 'Adalya',
                price: '400с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , 
              {
                name: 'MUSTHAVE',
                price: '800с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , 
              {
                name: 'Dark Side',
                price: '1000с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
                title1: 'на молоке + 50с ',
                title2: 'на коньяке + 250с ',
                title3: 'на вине + 200с ',
                title4: 'на роме + 400с ',

              } ,  

              {
                title: 'Сигареты',
                name: 'Winston',
                price: '220с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
               {
                name: 'Parlament',
                price: '270с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } , 
              {
                name: 'Esse',
                price: '270с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Dirol',
                price: '60с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
              {
                name: 'Зажигалка',
                price: '50с',
                imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
                description: ' ',
              } ,
            ]
          },
    ]


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]); //dependency is items

// Add a new item
const addToCart = (item) => {
    setCart([...cart, item]);
};

    return ( 
        <div>
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-4">
              {barItem.map((category, index) => (
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
            <div className="tab-content">
              {barItem.map((category, index) => (
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
                        <>
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

                        <div className="w-100 flex justify-between">
                          <text>{item?.title1}</text>
                          <text>{item?.title2}</text>
                          <text>{item?.title3}</text>
                          <text>{item?.title4}</text>
                        </div>
                        </>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
)}

export default BarNav;