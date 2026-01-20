import React from 'react';
import { Award, Users, TrendingUp, Shield, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, stats } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {companyInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
                alt="Company"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Leading Manufacturer Since {companyInfo.yearEstablished}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 18 years of experience in the industry, we have established ourselves as a trusted name in hydro solutions. Our commitment to quality, innovation, and customer satisfaction has helped us build lasting relationships with clients across India.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Product Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Company Information
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Nature of Business</h3>
                    <p className="text-gray-600">{companyInfo.natureOfBusiness}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Status</h3>
                    <p className="text-gray-600">{companyInfo.legalStatus}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Year Established</h3>
                    <p className="text-gray-600">{companyInfo.yearEstablished}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Annual Turnover</h3>
                    <p className="text-gray-600">{companyInfo.annualTurnover}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">GST Number</h3>
                    <p className="text-gray-600">{companyInfo.gstNo}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">GST Registration Date</h3>
                    <p className="text-gray-600">{companyInfo.gstRegistrationDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Quality Excellence',
                description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets the highest standards.'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Customer First',
                description: 'Our customers are at the heart of everything we do. We are committed to exceeding their expectations.'
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Innovation',
                description: 'We continuously innovate and adopt new technologies to provide cutting-edge solutions.'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Reliability',
                description: 'We build trust through consistent delivery of reliable products and dependable service.'
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.'
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Growth',
                description: 'We believe in continuous improvement and sustainable growth for our company and partners.'
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600">Guided by experienced professionals</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl font-bold">{companyInfo.ceo.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{companyInfo.ceo}</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Leading Maitreyee Hydro Systems with vision and dedication to deliver excellence in hydro solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;