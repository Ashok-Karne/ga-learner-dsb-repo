import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { products, companyInfo } from '../mock';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero/Featured Product Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"
                alt="Featured Product"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pressure Booster Pump
              </h2>
              <p className="text-2xl text-blue-600 font-bold mb-4">
                Price: ₹ 12,000 / Piece
              </p>
              <p className="text-gray-700 mb-6">
                Pressure Booster Pump - We are engaged in offering this product to our clients. Our range of all products is widely appreciated by our clients. Domestic & Commercial applications, High efficiency, Durable construction.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 font-semibold">
                Get Best Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            Our Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
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
                    Price: ₹ {product.price.toLocaleString()} / {product.priceUnit}
                  </p>
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-xs font-semibold">
                    Get Best Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">About Company</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">i</div>
                <div>
                  <p className="text-xs text-blue-200">Nature of Business</p>
                  <p className="font-semibold">{companyInfo.natureOfBusiness}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">i</div>
                <div>
                  <p className="text-xs text-blue-200">GST Registration Date</p>
                  <p className="font-semibold">{companyInfo.gstRegistrationDate}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">i</div>
                <div>
                  <p className="text-xs text-blue-200">Legal Status of Firm</p>
                  <p className="font-semibold">{companyInfo.legalStatus}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">i</div>
                <div>
                  <p className="text-xs text-blue-200">GST No.</p>
                  <p className="font-semibold text-sm">{companyInfo.gstNo}</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-white mb-4">
            We <strong>Maitreyee Hydro Systems</strong> from <strong>2006</strong> are a highly popular organization of the market engaged in manufacturing and trading a wide range of <strong>Steam Bath Generator, Sauna Bath System and much more.</strong>
          </p>
          <Link to="/about">
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Read More
            </Button>
          </Link>

          {/* Trust Seal */}
          <div className="mt-6 flex items-center gap-3">
            <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              IndiaMART Trust Seal Verified
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Get Instant Quote
            </h2>
            <p className="text-center text-gray-600 mb-6">Tell Us What Are You Looking For ?</p>
            
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Describe Your Requirement"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 font-semibold">
                    Submit Requirement
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;