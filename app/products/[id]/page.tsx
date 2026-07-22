'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
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
