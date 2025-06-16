export const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'This is product 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'This is product 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description: 'This is product 3',
    image: 'https://via.placeholder.com/150',
  },
];

export const product = (id) => products.find((product) => product.id === id);

export const listProducts = () => products;

export const purchaseProducts = (products) => {
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return { total };
};
