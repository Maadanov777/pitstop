// import React, { createContext, useReducer, useState } from 'react'
// // import axios from 'axios'

// export const productsContext = createContext()

// const INIT_STATE = {
//   product: [],
// }

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case 'GET_PRODUCTS':
//       return { ...state, shoes: action.payload }
//   }
// }

// const ProductsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE)

//   const getProducts = async (params) => {
//     console.log(parapms)
//     const { data } = params
//     dispatch({
//       type: 'GET_PRODUCTS',
//       payload: data,
//     })
//   }


//   return (
//     <productsContext.Provider
//       value={{
//         product: state.product,
//         getProducts,
//       }}
//     >
//       {children}
//     </productsContext.Provider>
//   )
// }

// export default ProductsContextProvider