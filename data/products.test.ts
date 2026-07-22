
import { products, Product } from './products';

describe('Products Data', () => {
  it('should be an array of products', () => {
    // Check if products is an array
    expect(Array.isArray(products)).toBe(true);
  });

  it('should not be empty', () => {
    // Check if the products array is not empty
    expect(products.length).toBeGreaterThan(0);
  });

  it('each product should have the correct structure and data types', () => {
    products.forEach((product: Product) => {
      // Check for presence of required properties
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('imageUrl');

      // Check data types
      expect(typeof product.id).toBe('string');
      expect(typeof product.name).toBe('string');
      expect(typeof product.description).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.imageUrl).toBe('string');

      // Ensure price is a positive number
      expect(product.price).toBeGreaterThanOrEqual(0);

      // Ensure image URL is not empty
      expect(product.imageUrl.length).toBeGreaterThan(0);
    });
    console.log('Conceptual test for Products Data: each product has correct structure and types.');
  });

  it('should have unique product IDs', () => {
    const ids = products.map(product => product.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
    console.log('Conceptual test for Products Data: unique product IDs.');
  });
});
