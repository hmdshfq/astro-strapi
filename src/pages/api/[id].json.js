import { listProducts, purchaseProducts } from '../../utils/db.js';

export async function GET({ params }) {
  const id = params.id;
  const randomQuantity = Math.floor(Math.random() * 3) + 1;
  const updatedProductList = await purchaseProducts(id, randomQuantity);

  return new Response(JSON.stringify(updatedProductList()));
}
