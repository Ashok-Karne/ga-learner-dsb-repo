import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { products, categories } from '../mock';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">
            Browse our comprehensive range of premium hydro systems and equipment
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                size="sm"
                variant={selectedCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.slug)}
                className={selectedCategory === category.slug 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'hover:bg-gray-100'}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow bg-white">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-sm mb-2">
                    Price: ₹{product.price.toLocaleString()}/{product.priceUnit}
                  </p>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-xs font-semibold">
                    Get Best Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded shadow-sm">
            <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;