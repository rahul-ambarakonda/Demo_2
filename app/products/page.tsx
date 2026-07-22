import React from 'react';
import ProductCard from '../../components/ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smart Refrigerator',
    price: 1200,
    description: 'A smart refrigerator with touch screen and AI capabilities.',
    imageUrl: '/next.svg', // Using a public image for now
  },
  {
    id: '2',
    name: 'Robotic Vacuum Cleaner',
    price: 450,
    description: 'Automated vacuum cleaner for effortless home cleaning.',
    imageUrl: '/vercel.svg', // Using a public image for now
  },
  {
    id: '3',
    name: 'Smart Washing Machine',
    price: 800,
    description: 'Energy-efficient washing machine with smart features.',
    imageUrl: '/next.svg', // Using a public image for now
  },
  {
    id: '4',
    name: 'Microwave Oven',
    price: 150,
    description: 'A standard microwave oven for everyday use.',
    imageUrl: '/vercel.svg', // Using a public image for now
  },
  {
    id: '5',
    name: 'Dishwasher',
    price: 600,
    description: 'An efficient dishwasher for sparkling clean dishes.',
    imageUrl: '/next.svg', // Using a public image for now
  },
  {
    id: '6',
    name: 'Coffee Maker',
    price: 80,
    description: 'A simple coffee maker for your morning brew.',
    imageUrl: '/vercel.svg', // Using a public image for now
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
