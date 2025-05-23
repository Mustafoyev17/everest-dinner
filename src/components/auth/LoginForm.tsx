
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function LoginForm({ onToggleForm }: { onToggleForm: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      // Error handling is done in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-restaurant-blue dark:text-restaurant-light-gold">
          Login to Your Account
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Welcome back! Please enter your details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-restaurant-blue hover:bg-restaurant-light-blue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
        </span>
        <button
          onClick={onToggleForm}
          className="text-restaurant-blue dark:text-restaurant-light-gold hover:underline"
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
