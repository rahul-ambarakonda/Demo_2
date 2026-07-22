
import React from 'react';

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
    imageUrl: '/images/refrigerator.jpg', // Placeholder image path
  },
  {
    id: '2',
    name: 'Robotic Vacuum Cleaner',
    price: 450,
    description: 'Automated vacuum cleaner for effortless home cleaning.',
    imageUrl: '/images/vacuum.jpg', // Placeholder image path
  },
  {
    id: '3',
    name: 'Smart Washing Machine',
    price: 800,
    description: 'Energy-efficient washing machine with smart features.',
    imageUrl: '/images/washing_machine.jpg', // Placeholder image path
  },
  {
    id: '4',
    name: 'Microwave Oven',
    price: 150,
    description: 'A standard microwave oven for everyday use.',
    imageUrl: '/images/microwave.jpg', // Placeholder image path
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
