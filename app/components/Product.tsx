'use client'

import { useContext } from 'react';
import { CartContext } from './Context';
import { useRouter } from 'next/navigation';

const Product = () => {
  const { items, addToCart, removeFromCart } = useContext(CartContext);

  const router = useRouter()
  // Ahora puedes usar addToCart y removeFromCart como funciones en tu componente
  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId: any) => {
    removeFromCart(productId);
  };

  console.log(items)

  return (
    <div>
      <h2>Productos en el carrito:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.cantidad}{item.id}</li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ key: 1, cantidad: 2 })}>
        Añadir al carrito
      </button>
      <button onClick={() => handleRemoveFromCart(1)}>
        Eliminar del carrito
      </button>
      <button onClick={() => router.push('/productos')}>Back</button>
    </div>
  );
};

export default Product;