
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAdminProducts } from "@/hooks/useAdminProducts";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categoryOptions = [
  "starters", "soups", "salads", "mains", "pasta", 
  "rice", "bread", "desserts", "drinks", "specials"
] as const;

type CategoryType = typeof categoryOptions[number];

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  price: z.coerce.number().positive({ message: "Price must be positive" }),
  image: z.string().url({ message: "Please enter a valid image URL" }),
  category: z.enum(categoryOptions, {
    required_error: "Please select a category.",
  })
});

export default function AdminProductForm() {
  const { addProduct, updateProduct, selectedProduct, setSelectedProduct } = useAdminProducts();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with default values or selected product
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedProduct?.name || "",
      description: selectedProduct?.description || "",
      price: selectedProduct?.price || 0,
      image: selectedProduct?.image || "",
      category: (selectedProduct?.category as CategoryType) || "mains",
    },
  });

  // Reset form when selected product changes
  React.useEffect(() => {
    if (selectedProduct) {
      form.reset({
        name: selectedProduct.name,
        description: selectedProduct.description,
        price: selectedProduct.price,
        image: selectedProduct.image,
        category: selectedProduct.category as CategoryType,
      });
    } else {
      form.reset({
        name: "",
        description: "",
        price: 0,
        image: "",
        category: "mains",
      });
    }
  }, [selectedProduct, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      if (selectedProduct) {
        // Update existing product
        await updateProduct({
          id: selectedProduct.id,
          name: values.name,
          description: values.description,
          price: values.price,
          image: values.image,
          category: values.category,
        });
        toast.success("Product updated successfully!");
      } else {
        // Add new product
        await addProduct({
          id: `product-${Date.now()}`,
          name: values.name,
          description: values.description,
          price: values.price,
          image: values.image,
          category: values.category,
        });
        toast.success("Product added successfully!");
      }
      
      // Reset form and selected product
      form.reset();
      setSelectedProduct(null);
    } catch (error) {
      toast.error("Failed to save product. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cancelEdit = () => {
    setSelectedProduct(null);
    form.reset();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        {selectedProduct ? "Edit Product" : "Add New Product"}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter product description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryOptions.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex gap-2 pt-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Saving..."
                : selectedProduct
                ? "Update Product"
                : "Add Product"}
            </Button>
            {selectedProduct && (
              <Button type="button" variant="outline" onClick={cancelEdit}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
