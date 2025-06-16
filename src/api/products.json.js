import { listProducts } from '../utils/db.js';

export async function GET() {
  const products = await listProducts();
  return response(JSON.stringify({ products }));
}
