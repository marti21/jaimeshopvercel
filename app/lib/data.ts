import { sql } from '@vercel/postgres';

interface Producto {
  Id: number,
  Name: string;
  Price: number;
}

export async function getAllProducts(nameProduct: string) {
    try {
        //const timeoutId = await new Promise(resolve => setTimeout(resolve, 2000));
        const productoBuscar = nameProduct;
        console.log("producto a buscar", productoBuscar)

        const productos = await sql<Producto>`SELECT * FROM Product WHERE Name LIKE '%' || ${productoBuscar} || '%';`;
        console.log(productos);
  
      return productos.rows;
    }
    catch (error) {
        console.error(error);
        return [];    
    }
  }

export async function getProductWithId(id:String) {
  try {
    //const timeoutId = await new Promise(resolve => setTimeout(resolve, 2000));
    const productId = id;
    console.log("producto a buscar", productId)

    const producto = await sql<Producto>`SELECT * FROM Product WHERE id = ${productId.toString()};`;
    console.log(producto);

  return producto.rows;
}
catch (error) {
    console.error(error);
    return [];    
}
}

