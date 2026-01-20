import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { statsAPI } from '../../services/api';
import { Package, MessageSquare, FolderOpen, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await statsAPI.get();
      setStats(response.data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats?.totalProducts || 0,
      icon: <Package className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Inquiries',
      value: stats?.totalInquiries || 0,
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      title: 'New Inquiries',
      value: stats?.newInquiries || 0,
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Categories',
      value: stats?.totalCategories || 0,
      icon: <FolderOpen className="w-8 h-8" />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`${stat.color} text-white p-3 rounded-lg`}>
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <h2 className="text-xl font-bold">Quick Actions</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/admin/products"
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <Package className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Manage Products</h3>
                    <p className="text-sm text-gray-600 mt-1">Add, edit or delete products</p>
                  </a>
                  <a
                    href="/admin/company-info"
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Company Info</h3>
                    <p className="text-sm text-gray-600 mt-1">Update company details</p>
                  </a>
                  <a
                    href="/admin/inquiries"
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">View Inquiries</h3>
                    <p className="text-sm text-gray-600 mt-1">Check customer messages</p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

const Building2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default AdminDashboard;