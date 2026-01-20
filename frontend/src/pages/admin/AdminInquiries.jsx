import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { inquiriesAPI } from '../../services/api';
import { toast } from '../../hooks/use-toast';
import { Trash2, Mail, Phone, Calendar } from 'lucide-react';

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const response = await inquiriesAPI.getAll();
      setInquiries(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load inquiries",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      await inquiriesAPI.delete(id);
      toast({
        title: "Success",
        description: "Inquiry deleted successfully"
      });
      loadInquiries();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete inquiry",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Customer Inquiries</h1>
          <div className="text-sm text-gray-600">
            Total: {inquiries.length}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : inquiries.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-600">No inquiries yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{inquiry.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {inquiry.email && (
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {inquiry.email}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {inquiry.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(inquiry.created_at)}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(inquiry.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {inquiry.subject && (
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Subject: </span>
                      <span className="text-gray-600">{inquiry.subject}</span>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-700 whitespace-pre-wrap">{inquiry.message}</p>
                  </div>
                  
                  <div className="mt-3">
                    <span className={`inline-block px-2 py-1 text-xs rounded ${
                      inquiry.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {inquiry.status === 'new' ? 'New' : 'Read'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminInquiries;