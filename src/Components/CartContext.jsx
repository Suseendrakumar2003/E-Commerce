// // // // Components/CartContext.js
// // // import React, { createContext, useContext, useState } from 'react';

// // // const CartContext = createContext();

// // // export const CartProvider = ({ children }) => {
// // //   const [cart, setCart] = useState([]);

// // //   const updateQuantity = (title, amount) => {
// // //     setCart((prevCart) =>
// // //       prevCart.map((item) =>
// // //         item.title === title
// // //           ? { ...item, quantity: Math.max(1, item.quantity + amount) }
// // //           : item
// // //       )
// // //     );
// // //   };

// // //   const removeItem = (title) => {
// // //     setCart((prevCart) => prevCart.filter((item) => item.title !== title));
// // //   };

// // //   const addToCart = (newItem) => {
// // //     setCart((prevCart) => {
// // //       const existing = prevCart.find((item) => item.title === newItem.title);
// // //       if (existing) {
// // //         return prevCart.map((item) =>
// // //           item.title === newItem.title
// // //             ? { ...item, quantity: item.quantity + 1 }
// // //             : item
// // //         );
// // //       } else {
// // //         return [...prevCart, { ...newItem, quantity: 1 }];
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <CartContext.Provider value={{ cart, updateQuantity, removeItem, addToCart }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // export const useCart = () => useContext(CartContext);


// // import React, { createContext, useContext, useState } from 'react';

// // const CartContext = createContext();

// // export const useCart = () => useContext(CartContext);

// // export const CartProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);

// //   const addToCart = (item) => {
// //     setCartItems((prev) => [...prev, item]);
// //   };

// //   const removeFromCart = (title) => {
// //     setCartItems((prev) => prev.filter((item) => item.title !== title));
// //   };

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };


// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]); // Make sure it's an array

//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === newItem.title);
      if (existing) {
        return prev.map((item) =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...newItem, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (title, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
