
import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import AdminProductList from "@/components/admin/AdminProductList";
import AdminProductForm from "@/components/admin/AdminProductForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Admin() {
  const { user, isAuthenticated } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if the current user is an admin (in a real app, this would be a role check)
    if (user?.email === "mustafoyev7788@gmail.com") {
      setIsAdmin(true);
    }
  }, [user]);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    toast.error("Please log in with admin credentials");
    return <Navigate to="/auth" />;
  }

  // If authenticated but not admin, show access denied
  if (isAuthenticated && !isAdmin) {
    return (
      <div className="pt-32 min-h-screen container mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-lg mb-6">
          You don't have permission to access the admin panel.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-restaurant-blue dark:text-restaurant-light-gold">
          Admin Panel
        </h1>
        <div className="text-sm text-gray-500">
          Logged in as: <span className="font-semibold">{user?.email}</span>
        </div>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="products">Products Management</TabsTrigger>
          <TabsTrigger value="orders" disabled>Orders</TabsTrigger>
          <TabsTrigger value="reservations" disabled>Reservations</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AdminProductList />
            </div>
            <div className="lg:col-span-1">
              <AdminProductForm />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
