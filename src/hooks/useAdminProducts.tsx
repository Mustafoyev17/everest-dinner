
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { MenuItem, menuItems as initialMenuItems } from '@/lib/data';

export const useAdminProducts = () => {
  // Initialize state with products from data.ts or localStorage
  const [products, setProducts] = useState<MenuItem[]>(() => {
    const storedProducts = localStorage.getItem('adminProducts');
    return storedProducts ? JSON.parse(storedProducts) : initialMenuItems;
  });
  
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  
  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);
  
  const addProduct = (product: MenuItem) => {
    setProducts([...products, product]);
    toast.success(`${product.name} added successfully!`);
  };
  
  const updateProduct = (updatedProduct: MenuItem) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setSelectedProduct(null);
    toast.success(`${updatedProduct.name} updated successfully!`);
  };
  
  const deleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
      if (selectedProduct?.id === id) {
        setSelectedProduct(null);
      }
      toast.success('Product deleted successfully!');
    }
  };
  
  return {
    products,
    selectedProduct,
    setSelectedProduct,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
