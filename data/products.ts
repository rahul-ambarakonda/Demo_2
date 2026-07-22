
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart Refrigerator',
    description: 'A state-of-the-art smart refrigerator with a touchscreen display, built-in cameras, and AI-powered inventory management.',
    price: 1999.99,
    imageUrl: 'https://via.placeholder.com/500?text=Smart+Refrigerator',
  },
  {
    id: '2',
    name: 'Robot Vacuum Cleaner',
    description: 'An intelligent robot vacuum cleaner with laser navigation, automatic dirt disposal, and multi-floor mapping.',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/500?text=Robot+Vacuum+Cleaner',
  },
  {
    id: '3',
    name: 'Smart Washing Machine',
    description: 'A smart washing machine with Wi-Fi connectivity, multiple wash cycles, and automatic detergent dispensing.',
    price: 899.50,
    imageUrl: 'https://via.placeholder.com/500?text=Smart+Washing+Machine',
  },
  {
    id: '4',
    name: 'Air Purifier',
    description: 'A high-efficiency air purifier with HEPA filter, activated carbon filter, and smart sensor for air quality monitoring.',
    price: 249.00,
    imageUrl: 'https://via.placeholder.com/500?text=Air+Purifier',
  },
];
