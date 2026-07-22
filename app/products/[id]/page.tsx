'use client';

import { useParams, useRouter } from 'next/navigation';
import { products as allProducts } from '@/data/products'; // Renamed to avoid conflict
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        setProduct(null);
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds delay

        const foundProduct = allProducts.find((p) => p.id === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          throw new Error('Product not found');
        }

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-md md:p-xl text-center font-sans text-text-default"> {/* Updated padding, added font-sans, text-text-default */}
        <button
          onClick={() => router.back()}
          className="mb-lg px-md py-xs bg-gray-100 text-text-default rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-200" // Updated spacing, colors, rounded, added transition
        >
          &larr; Back to Products
        </button>
        <h1 className="text-3xl font-bold mb-lg">Product Details</h1> {/* Updated mb-lg */}
        <p>Loading product details...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mt-lg"></div> {/* Updated border-primary, mt-lg */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-md md:p-xl text-center text-red-600 font-sans text-text-default"> {/* Updated padding, added font-sans, text-text-default */}
        <button
          onClick={() => router.back()}
          className="mb-lg px-md py-xs bg-gray-100 text-text-default rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-200" // Updated spacing, colors, rounded, added transition
        >
          &larr; Back to Products
        </button>
        <h1 className="text-3xl font-bold mb-lg">Product Details</h1> {/* Updated mb-lg */}
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto p-md md:p-xl text-center font-sans text-text-default"> {/* Updated padding, added font-sans, text-text-default */}
        <button
          onClick={() => router.back()}
          className="mb-lg px-md py-xs bg-gray-100 text-text-default rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-200" // Updated spacing, colors, rounded, added transition
        >
          &larr; Back to Products
        </button>
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-md md:p-xl font-sans text-text-default"> {/* Updated padding, added font-sans, text-text-default */}
      <button
        onClick={() => router.back()}
        className="mb-lg px-md py-xs bg-gray-100 text-text-default rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-200" // Updated spacing, colors, rounded, added transition
      >
        &larr; Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-2xl mt-lg"> {/* Updated gap-2xl, added mt-lg for spacing after button */}
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-md shadow-md" // Changed rounded-lg to rounded-md
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-md font-sans text-text-default">{product.name}</h1> {/* Updated mb-md, added font-sans, text-text-default */}
          <p className="text-xl text-text-default mb-lg font-sans">${product.price.toFixed(2)}</p> {/* Updated text-text-default, mb-lg, added font-sans */}
          <p className="text-text-light leading-relaxed mb-xl font-sans">{product.description}</p> {/* Updated text-text-light, mb-xl, added font-sans */}
        </div>
      </div>
    </div>
  );
}
