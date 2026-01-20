import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { toast } from '../../hooks/use-toast';
import { Lock, User } from 'lucide-react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(credentials);
      toast({
        title: "Login Successful",
        description: "Welcome to admin panel",
      });
      navigate('/admin/dashboard');
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.response?.data?.detail || "Invalid credentials",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Maitreyee Hydro Systems</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="pl-10"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="pl-10"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Default credentials:</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">admin / admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;