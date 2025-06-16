import { listProducts } from '../../utils/db.js';

export async function GET() {
  const products = await listProducts();
  return new Response(JSON.stringify({ products }));
}
