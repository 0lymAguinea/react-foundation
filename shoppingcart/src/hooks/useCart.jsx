import { useState } from "react";
function useCart() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (props) => {
    const newItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      category: props.category,
      image: props.image,
      rating: props.rating,
      quantity: props.quantity,
    };
    if (cart.some((item) => item.id === newItem.id)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: Number(item.quantity) + Number(newItem.quantity),
              }
            : item
        );
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const handleCartDelete = (itemID) => {
    setCart(cart.filter((a) => a.id !== itemID));
  };

  return { cart, setCart, handleAddToCart, handleCartDelete };
}

export default useCart;
