import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-gray-50"> {/* Added rounded-md, transition-all, and hover:bg-gray-50 */}
        <div className="relative w-full h-48">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-md"> {/* Changed p-4 to p-md */}
          <h3 className="text-lg font-semibold text-text-default truncate font-sans">{product.name}</h3> {/* Changed text-gray-800 to text-text-default and added font-sans */}
          <p className="mt-xs text-text-default text-xl font-bold font-sans">${product.price.toFixed(2)}</p> {/* Changed mt-1 to mt-xs, text-gray-900 to text-text-default, and added font-sans */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
