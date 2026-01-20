import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { LayoutDashboard, Package, Building2, MessageSquare, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { logout, admin } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Products', path: '/admin/products', icon: <Package className="w-5 h-5" /> },
    { name: 'Company Info', path: '/admin/company-info', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Inquiries', path: '/admin/inquiries', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-600"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {admin?.username}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r transform transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="p-4 space-y-2 mt-16 lg:mt-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;