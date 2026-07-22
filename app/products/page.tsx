import React, { useState, useEffect } from 'react';
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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds delay

        // Simulate a successful fetch
        setProducts(mockProducts);

        // Simulate an error
        // throw new Error('Failed to fetch products');

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-md md:p-xl text-center font-sans text-text-default"> {/* Added font-sans, text-text-default, and changed padding */}
        <h1 className="text-3xl font-bold mb-lg">Our Products</h1> {/* Changed mb-6 to mb-lg */}
        <p>Loading products...</p>
        {/* A simple spinner could be added here */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mt-lg"></div> {/* Changed border-gray-900 to border-primary and mt-5 to mt-lg */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-md md:p-xl text-center text-red-600 font-sans text-text-default"> {/* Added font-sans, text-text-default, and changed padding */}
        <h1 className="text-3xl font-bold mb-lg">Our Products</h1> {/* Changed mb-6 to mb-lg */}
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-md md:p-xl font-sans text-text-default"> {/* Added font-sans, text-text-default, and changed padding */}
      <h1 className="text-3xl font-bold mb-lg">Our Products</h1> {/* Changed mb-6 to mb-lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl"> {/* Changed gap-6 to gap-xl */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
