// import React, { createContext, useReducer, useState } from 'react'
// // import {
// //   calcSubPrice,
// //   calcTotalPrice,
// //   getCountProductsInCart,
// // } from '../helpers/cartFunction'
// export const productsContext = createContext()

// const INIT_STATE = {
//   shoes: [],
//   cart: {},
//   // cartLength: getCountProductsInCart(),
// }

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case 'GET_PRODUCTS':
//       return { ...state, shoes: action.payload }
//     // case 'CHANGE_CART_COUNT':
//     //   return { ...state, cartLength: action.payload }
//     case 'GET_CART':
//       return { ...state, cart: action.payload }
//     case 'GET_CURRENT_PRODUCT':
//       return { ...state, currentProduct: action.payload }
//     default:
//       return state
//   }
// }

// const ProductsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE)

//   const menuItems = [
//     {
//       category: 'Салаты',
//       img: '',
//       items: [
//         {
//           name: 'Теплый салат с телятиной',
//           price: '250гр / 350с',
//           description: 'жаренная телятина, огурцы, помидоры, шпинат, острый перец, восточная заправка',
//         },
//         {
//           name: 'Острый салат',
//           price: '250гр / 300с',
//           description: 'отварная говядина, острый перец, свежая зелень, помидоры, огурцы, лук, соевый соус',
//         },
//         {
//           name: 'Греческий салат',
//           price: '250гр / 300с',
//           description: 'сыр "Фетакса", свежие помидоры, огурцы, салатные листья, маслины',
//         },
//         {
//           name: 'Цезарь салат',
//           price: '250гр / 350с',
//           description: 'микс из листьев салата, куриное филе, гренки "цезарь", сыр пармезан,соус',
//         },   
//         {
//           name: 'Колибри салат',
//           price: '250гр / 300с',
//           description: 'куриное филе, кукуруза, свежие овощи, картофель пай, майонез',
//         },
//         {
//           name: 'Нежный салат',
//           price: '250гр / 300с',
//           description: 'огурцы, сыр, помидоры, коп. колбаса, майонез',
//         },
//         {
//           name: 'Фруктовый салат',
//           price: '250гр / 300с',
//           description: 'фрукты по сезону , заправляется йогуртом',
//         },
//         {
//           name: 'Фирменный салат "Пит-Стоп"',
//           price: '250гр / 350с',
//           description: 'говядина, баклажан, огурцы,помидор, перец полугорький',
//         },
//         {
//           name: 'Баклажан салат',
//           price: '250гр / 350с',
//           description: 'помидор, баклажан, кисло-сладкий соус',
//         },
//         {
//           name: 'Свежий салат',
//           price: '250гр / 300с',
//           description: 'Свежие огурцы, помидоры, репчатый лук, свежая зелень',
//         },
//         {
//           name: 'Острый язык',
//           price: '250гр / 300с',
//           description: 'огурцы,язык,морковь,соус',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Первые блюда',
//       items: [
//         {
//           name: 'Шорпо',
//           price: '280с',
//           description: 'мясной бульон с добавлением картофеля, моркови, мясо, посыпанный с зеленью',
//         },
//         {
//           name: 'Солянка',
//           price: '300с',
//           description: 'телятина , копчености , соленые огурцы , маслины , лимон',
//         },
//         {
//           name: 'Суп острый',
//           price: '280с',
//           description: 'говядина , фунчеза , овощи',
//         },
//         {
//           name: 'Пельмени',
//           price: '280с',
//           description: 'говяжий фарш , сметана , зелень',
//         },
//         {
//           name: 'Мампар',
//           price: '280с',
//           description: 'суп из говядины с тестом',
//         },
//         {
//           name: 'Кукси Корейский',
//           price: '280с',
//           description: ' ',
//         },
//         {
//           name: 'Долма суп',
//           price: '350с',
//           description: 'ребра,говяжие тефтели,брокколи,картофель,яйца пер.,зелень',
//         },
//         {
//           name: 'Рамён с яйцом',
//           price: '250с',
//           description: ' ',
//         },
       
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Вторые блюда',
//       items: [
//         {
//           name: 'Телятина с картофелем под сыром',
//           price: '400с',
//           description: 'телятина , обжаренный картофель , сыр , майонез',
//         },
//         {
//           name: 'Фрикассе с гарниром',
//           price: '400с',
//           description: 'куриное филе , грибы , лук , кукуруза , сметана',
//         },
//         {
//           name: 'Мясо в горшочке',
//           price: '400с',
//           description: 'говядина , грибы , картофель , помидоры , сыр',
//         },
//         {
//           name: 'Куурдак с картошкой',
//           price: '470с',
//           description: 'говядина , картофель , лук',
//         },
//         {
//           name: 'Жаровня',
//           price: '480с',
//           description: 'говядина с овощами',
//         },
//         {
//           name: 'Фирменное блюдо " Пит-Стоп "',
//           price: '1600с',
//           description: 'тибон стейк , кебаб , крылышки , овощи , соус',
//         },
//         {
//           name: 'Тибон стейк',
//           price: '1200с',
//           description: 'Сочный стейк  , КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ , соус',
//         },
//         {
//           name: 'Люля Кебаб',
//           price: '400с',
//           description: 'говяжий фарш',
//         },
//         {
//           name: 'Кур.грудка с овощами',
//           price: '300с',
//           description: ' ',
//         },
//         {
//           name: 'Казан кебаб',
//           price: '480с',
//           description: '',
//         },
//         {
//           name: 'Мясо с фри',
//           price: '400с',
//           description: '',
//         },
//         {
//           name: 'Курица по Княжески',
//           price: '300с',
//           description: '',
//         },
//         {
//           name: 'Мясо по китайски',
//           price: '400с',
//           description: '',
//         },
//         {
//           name: 'Босо лагман',
//           price: '250с',
//           description: '',
//         },
//         {
//           name: ' Рыба под сливочным соусом                                           ',
//           price: '450с',
//           description: '',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Бургеры',
//       items: [
//         {
//           name: 'Бургер с мясом',
//           price: '250гр / 300с',
//           description: 'мясная котлета , булочка , овощи , горчичный соус , сыр , картофель фри ',
//         },
//         {
//           name: 'Клаб сендвич',
//           price: '250гр / 220с',
//           description: 'Клаб сендвич',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Закуски',
//       items: [
//         {
//           name: 'Разносолы',
//           price: '400гр / 450с',
//           description: 'селёдка , маринованные черри , грибочки , корнишоны , отварной картофель ',
//         },
//         {
//           name: 'Мясное ассорти',
//           price: '250гр / 480с',
//           description: 'отварная говядина , копчёная телятина , говяжий язык , зелень',
//         },
//         {
//           name: 'Свежие овощи',
//           price: '450гр / 400с',
//           description: 'помидоры , огурцы , перец болгарский , зелень , соус',
//         },
//         {
//           name: 'Пивной сет',
//           price: '800гр / 1200с',
//           description: 'фри , куриные крылышки , крокеты , луковые кольца , чечел , чипсы , чесночные гренки , соус',
//         },
//         {
//           name: 'Гриль сет',
//           price: '400гр / 600с',
//           description: 'острые мясные , нежные куриные домашние колбаски , овощи на гриле',
//         },
//         {
//           name: 'Чикен сет',
//           price: '500гр / 500с',
//           description: 'куриные крылышки , куриная грудка , картофель фри , чесночный соус',
//         },
//         {
//           name: 'Куриные крылышки',
//           price: '250гр / 350с',
//           description: 'крылышки в кисло-сладком соусе',
//         },
//         {
//           name: 'Хрустящие куриные крылышки',
//           price: '300гр / 350с',
//           description: 'хрустящие жаренные крылышки в кляре',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Выпечка',
//       items: [
//         {
//           name: 'Хлеб',
//           price: '1шт / 40с',
//           description: ' ',
//         },
//         {
//           name: 'Боорсок',
//           price: '1кг / 200с',
//           description: ' ',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Соусы',
//       items: [
//         {
//           name: 'Тартар',
//           price: '70с',
//           description: ' ',
//         },
//         {
//           name: 'Чесночный',
//           price: '70с',
//           description: ' ',
//         },
//         {
//           name: 'Кисло-сладкий',
//           price: '70с',
//           description: ' ',
//         },
//         {
//           name: 'Овощной-сладкий',
//           price: '70с',
//           description: ' ',
//         },
//         {
//           name: 'Овощной-острый',
//           price: '70с',
//           description: ' ',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Гарниры',
//       items: [
//         {
//           name: 'Рис отварной',
//           price: '100с',
//           description: ' ',
//         },
//         {
//           name: 'Картофель по деревенски',
//           price: '200с',
//           description: ' ',
//         },
//         {
//           name: 'Овощи гриль',
//           price: '150с',
//           description: ' ',
//         },
//         {
//           name: 'Фри',
//           price: '150с',
//           description: ' ',
//         },
//         {
//           name: 'Рис с яйцом',
//           price: '150с',
//           description: ' ',
//         },
//         {
//           name: 'Рис с овощами',
//           price: '150с',
//           description: ' ',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Пицца',
//       items: [
//         {
//           name: 'Пепперони',
//           price: 'маленькая 450с / большая 600с',
//           description: 'соус , сыр моцарелла , салями',
//         },
//         {
//           name: '4 Сыра',
//           price: 'маленькая 500с / большая 600с',
//           description: '( моцарелла , пармезан , голландский , брынза',
//         },
//         {
//           name: 'Ассорти',
//           price: 'маленькая 550с / большая 650с',
//           description: 'говядина , куриное филе , овощи , кукуруза , салями , помидор , сыр',
//         }, 
//         {
//           name: 'Цезарь',
//           price: 'маленькая 600с / большая 650с',
//           description: 'куриное филе , соус цезарь , листья салата , сыр',
//         }, 
//         {
//           name: 'Чили',
//           price: 'маленькая 600с / большая 650с',
//           description: 'говяжий фарш',
//         }, 
//         {
//           name: 'Хачапури по Аджарски',
//           price: '300с',
//           description: '',
//         },
//         // Add more breakfast items as needed
//       ],
//     },
//     {
//       category: 'Банкетное меню',
//       items: [
//         {
//           name: 'Плов с шакарапом',
//           price: '1кг / 2500с',
//           imageSrc: '',
//           description: '',
//         },
//         {
//           name: 'Хан Куурдак',
//           price: '1кг / 2000с',
//           imageSrc: '',
//           description: '',
//         },
//         {
//           name: 'Курица',
//           price: '900гр / 1200с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Рыба(форель)',
//           price: '1кг / 1200с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Манты',
//           price: '5шт / 300с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Самсы',
//           price: '1шт / 80с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Лазы Джи',
//           price: '1кг / 1500с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Дапанджи',
//           price: '1кг / 1500с',
//           imageSrc: '',
//           description: '',
//         }, 
//         {
//           name: 'Долма',
//           price: '2кг / 3000с',
//           imageSrc: '',
//           description: '',
//         },
//         // Add more lunch items as needed
//       ],
//     },
//     {
//       category: 'Барное меню',
//       items: [
//         {
//           title: 'Прохладительные напитки ',
//           name: 'Натуральный сок',
//           price: '1л / 260с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Coca Cola, Fanta, Sprite',
//           price: '250мл - 80с / 1л - 180с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'BonAqua',
//           price: '1л / 85с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Red bull',
//           price: '250мл / 260с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Nitro',
//           price: '500мл / 130с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Schweppes',
//           price: '250мл / 140с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },

//           // 2
//         {
//           title: 'Горячие напитки',
//           name: 'Ягодный микс',
//           price: '250с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Веселый апельсин',
//           price: '250с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Облепиховый',
//           price: '250с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Имбирный',
//           price: '250с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Чай черный',
//           price: '80с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//         {
//           name: 'Чай зеленый',
//           price: '80с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },



//         //3
//         {
//           title: 'Пиво бутылочное',
//           name: 'Балтика 0,7,9',
//           price: '500мл / 170с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'Stella',
//           price: '500мл / 240с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'Bud',
//           price: '500мл / 240с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'Corona extra',
//           price: '330мл / 295с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'Heineken',
//           price: '330мл / 250с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'Арпа',
//           price: '500мл / 180с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },{
//           name: 'ESSA',
//           price: '500мл / 200с',
//           imageSrc: 'https://i.imgur.com/2ry8F0i.jpg',
//           description: ' ',
//         },
//       ],
//     },
//   ];
  

//   const getProducts = async () => {
//     const data  = menuItems.items
//     dispatch({
//       type: 'GET_PRODUCTS',
//       payload: data,
//     })
//   }

//   const addProductToCart = (shoes) => {
//     try {
//       let cart = JSON.parse(localStorage.getItem('cart'))
//       if (!cart) {
//         cart = {
//           shoes: [],
//           totalPrice: 0,
//         }
//       }
//       let newProduct = {
//         item: shoes,
//         count: 1,
//         subPrice: 0,
//       }
//       console.log(cart)
//       let filteredCart = cart.shoes.filter((elem) => elem.item.id === shoes.id)
//       if (filteredCart.length > 0) {
//         cart.shoes = cart.shoes.filter((elem) => elem.item.id !== shoes.id)
//       } else {
//         cart.shoes.push(newProduct)
//       }
//       newProduct.subPrice = calcSubPrice(newProduct)
//       cart.totalPrice = calcTotalPrice(cart.shoes)
//       localStorage.setItem('cart', JSON.stringify(cart))
//       dispatch({
//         type: 'CHANGE_CART_COUNT',
//         payload: cart.shoes.length,
//       })
//     } catch (e) {
//       console.log('. ')
//     }
//   }

//   const getCart = () => {
//     let cart = JSON.parse(localStorage.getItem('cart'))
//     if (!cart) {
//       cart = {
//         shoes: [],
//         totalPrice: 0,
//       }
//     }
//     dispatch({
//       type: 'GET_CART',
//       payload: cart,
//     })
//   }

//   function changeProductCount(count, id) {
//     let cart = JSON.parse(localStorage.getItem('cart'))
//     cart.shoes = cart.shoes.map((elem) => {
//       if (elem.item.id === id) {
//         elem.count = count
//         elem.subPrice = calcSubPrice(elem)
//       }
//       return elem
//     })
//     cart.totalPrice = calcTotalPrice(cart.shoes)
//     localStorage.setItem('cart', JSON.stringify(cart))
//     getCart()
//   }

//   function removeProductToCart(item) {
//     console.log(item, 'aasasasasas')
//     let data = JSON.parse(localStorage.getItem('cart'))
//     console.log(data, '...........')
//     const product = {...data}
//     product.shoes = product.shoes.filter(elem => elem.item.id !== item.id)
//     console.log(product)
//     localStorage.setItem('cart', JSON.stringify(product))
//     getCart()
//     changeProductCount()
//   }


//   return (
//     <productsContext.Provider
//       value={{
//         shoes: state.shoes,
//         cartLength: state.cartLength,
//         cart: state.cart,
//         getProducts,
//         handleDeleteProduct,
//         toggleModal,
//         isEdit,
//         addProductToCart,
//         changeProductCount,
//         getCart,
//         removeProductToCart
//       }}
//     >
//       {children}
//     </productsContext.Provider>
//   )
// }

// export default ProductsContextProvider