import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    try {
      const insertResult = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto1', 19.99);`;
      const insertResult2 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto2', 19.99);`;
      const insertResult3 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto3', 19.99);`;
      const insertResult4 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto4', 19.99);`;
      const insertResult5 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto5', 19.99);`;
      const insertResult6 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto6', 19.99);`;
      const insertResult7 = await sql`INSERT INTO Product (Name, Price) VALUES ('Producto7', 19.99);`;

      return NextResponse.json({ insertResult }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
  }
}