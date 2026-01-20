import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { companyAPI } from '../../services/api';
import { toast } from '../../hooks/use-toast';
import { Save } from 'lucide-react';

const AdminCompanyInfo = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    yearEstablished: '',
    natureOfBusiness: '',
    legalStatus: '',
    annualTurnover: '',
    gstNo: '',
    gstRegistrationDate: '',
    email: '',
    phone: '',
    address: '',
    ceo: ''
  });

  useEffect(() => {
    loadCompanyInfo();
  }, []);

  const loadCompanyInfo = async () => {
    try {
      const response = await companyAPI.get();
      setFormData(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load company info",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await companyAPI.update(formData);
      toast({
        title: "Success",
        description: "Company information updated successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update company info",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h1>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CEO Name</label>
                    <Input value={formData.ceo} onChange={(e) => handleChange('ceo', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Tagline</label>
                    <Input value={formData.tagline} onChange={(e) => handleChange('tagline', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea value={formData.description} onChange={(e) => handleChange('description', e.target.value)} rows={4} />
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Year Established</label>
                    <Input value={formData.yearEstablished} onChange={(e) => handleChange('yearEstablished', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nature of Business</label>
                    <Input value={formData.natureOfBusiness} onChange={(e) => handleChange('natureOfBusiness', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Legal Status</label>
                    <Input value={formData.legalStatus} onChange={(e) => handleChange('legalStatus', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Annual Turnover</label>
                    <Input value={formData.annualTurnover} onChange={(e) => handleChange('annualTurnover', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GST Number</label>
                    <Input value={formData.gstNo} onChange={(e) => handleChange('gstNo', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GST Registration Date</label>
                    <Input value={formData.gstRegistrationDate} onChange={(e) => handleChange('gstRegistrationDate', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Full Address</label>
                    <Textarea value={formData.address} onChange={(e) => handleChange('address', e.target.value)} rows={3} />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={saving}>
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCompanyInfo;