import SolutionLayout from "./SolutionLayout";
import { 
  Code, Globe, Cloud, Settings, 
  Link, Shield, Target, Zap, 
  Cpu, Award, TrendingUp, ChevronRight 
} from "lucide-react";

export default function ITSoftware() {
  const offerings = [
    {
      title: "Custom Software Development",
      desc: "Web, mobile, and enterprise applications tailored to business needs.",
      icon: <Code className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
    },
    {
      title: "Web & App Development",
      desc: "Modern, scalable, and secure digital platforms.",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Cloud migration, deployment, and infrastructure management.",
      icon: <Cloud className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support, monitoring, and optimization services.",
      icon: <Settings className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      title: "System Integration",
      desc: "Seamless integration of tools, APIs, and platforms.",
      icon: <Link className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    },
    {
      title: "Security & Compliance",
      desc: "Secure systems aligned with industry best practices.",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30">
              <span className="text-orange-400 text-sm font-medium">Technology Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              IT & Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade software services built for scale, security, and performance.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Zryoss delivers end-to-end IT and software solutions for businesses
              looking to build, modernize, or scale their digital infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section - Black Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-gray-300 font-medium">Uptime Guarantee</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Support Coverage</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
            <div className="text-gray-300 font-medium">Projects Delivered</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">ISO 27001</div>
            <div className="text-gray-300 font-medium">Certified Security</div>
          </div>
        </div>

        {/* Solutions Grid with Images */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our <span className="text-orange-500">Technology</span> Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 hover:shadow-xl transition-all duration-300 overflow-hidden hover:shadow-orange-500/10"
              >
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />
                  <div 
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 p-2 bg-orange-500/20 backdrop-blur-sm rounded-lg border border-orange-500/30 z-20">
                    <div className="text-orange-400">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center text-orange-500 text-sm font-medium">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Enterprise <span className="text-orange-500">Technology</span> Expertise
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Scalable Architecture</h4>
                    <p className="text-gray-400">Future-proof solutions designed for growth and scalability</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Agile Development</h4>
                    <p className="text-gray-400">Rapid deployment with iterative development methodology</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Security First</h4>
                    <p className="text-gray-400">Enterprise-grade security protocols and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <div 
                  className="h-96 w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop')" 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-2xl font-bold text-orange-500">200+</div>
                      <div className="text-sm text-gray-300">Successful Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-500">50+</div>
                      <div className="text-sm text-gray-300">Enterprise Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-xl p-10 text-center border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join leading enterprises that trust Zryoss for their technology solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 border border-orange-500">
              Start Your Project
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500/10 transition-colors duration-300">
              Request Consultation
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our <span className="text-orange-500">Success</span> Stories
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See how enterprises transformed their technology with Zryoss solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">FinTech Innovation</h4>
              <p className="text-gray-400">Scalable payment platform processing $1B+ annually</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Healthcare Transformation</h4>
              <p className="text-gray-400">Cloud migration serving 2M+ patients with 99.99% uptime</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">E-commerce Scalability</h4>
              <p className="text-gray-400">Platform handling 10M+ monthly transactions for retail giant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}