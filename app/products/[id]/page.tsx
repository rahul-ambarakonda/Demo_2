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

        // Simulate an error
        // throw new Error('Failed to fetch product details');

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
      <div className="container mx-auto p-4 text-center">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &larr; Back to Products
        </button>
        <h1 className="text-3xl font-bold mb-6">Product Details</h1>
        <p>Loading product details...</p>
        {/* A simple spinner could be added here */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mt-5"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-600">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &larr; Back to Products
        </button>
        <h1 className="text-3xl font-bold mb-6">Product Details</h1>
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &larr; Back to Products
        </button>
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        &larr; Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
