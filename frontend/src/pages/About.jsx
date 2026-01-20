import React from 'react';
import { Award, Users, TrendingUp, Shield, CheckCircle, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, stats } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-blue-100">
              Leading manufacturer of premium hydro solutions with 18+ years of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80"
                alt="Company"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Excellence Since {companyInfo.yearEstablished}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 18 years of experience, we've established ourselves as a trusted name in hydro solutions. Our commitment to quality, innovation, and customer satisfaction has helped us build lasting relationships with clients across India.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { label: 'Happy Clients', value: '500+', color: 'blue' },
                  { label: 'Products', value: '50+', color: 'purple' }
                ].map((stat, index) => (
                  <div key={index} className={`bg-${stat.color}-50 p-6 rounded-2xl`}>
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Information</h2>
          </div>
          <Card className="border-0 shadow-xl rounded-3xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { label: 'Nature of Business', value: companyInfo.natureOfBusiness },
                  { label: 'Legal Status', value: companyInfo.legalStatus },
                  { label: 'Year Established', value: companyInfo.yearEstablished },
                  { label: 'Annual Turnover', value: companyInfo.annualTurnover },
                  { label: 'GST Number', value: companyInfo.gstNo },
                  { label: 'GST Registration', value: companyInfo.gstRegistrationDate }
                ].map((info, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">{info.label}</h3>
                    <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Quality Excellence',
                description: 'We never compromise on quality. Every product undergoes rigorous testing.',
                color: 'blue'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Customer First',
                description: 'Our customers are at the heart of everything we do.',
                color: 'purple'
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Innovation',
                description: 'We continuously innovate to provide cutting-edge solutions.',
                color: 'green'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Reliability',
                description: 'We build trust through consistent delivery of reliable products.',
                color: 'orange'
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: 'Integrity',
                description: 'We conduct business with honesty and transparency.',
                color: 'red'
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Growth',
                description: 'We believe in continuous improvement and sustainable growth.',
                color: 'indigo'
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${value.color}-50 text-${value.color}-600 rounded-2xl flex items-center justify-center mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-12 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-white text-5xl font-bold">{companyInfo.ceo.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{companyInfo.ceo}</h3>
                <p className="text-blue-600 font-semibold mb-6">Chief Executive Officer</p>
                <p className="text-gray-600 leading-relaxed">
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