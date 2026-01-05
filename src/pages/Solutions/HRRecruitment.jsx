import SolutionLayout from "./SolutionLayout";
import { 
  Users, FileSearch, Building2, ClipboardList, 
  BadgeCheck, ShieldCheck, Target, Zap, 
  Globe, Award, TrendingUp, ChevronRight 
} from "lucide-react";

export default function HRRecruitment() {
  const offerings = [
    {
      title: "Talent Acquisition",
      desc: "Permanent and contract hiring across multiple roles and industries.",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=600&fit=crop",
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "Complete recruitment lifecycle management for enterprises.",
      icon: <FileSearch className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      title: "HR Consulting",
      desc: "Policy design, compliance support, and workforce planning.",
      icon: <Building2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
    },
    {
      title: "Staffing Solutions",
      desc: "Flexible staffing models to meet dynamic business needs.",
      icon: <ClipboardList className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    },
    {
      title: "Onboarding & Documentation",
      desc: "Structured onboarding processes with compliance alignment.",
      icon: <BadgeCheck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=400&fit=crop",
    },
    {
      title: "Payroll & Compliance Support",
      desc: "Payroll coordination and statutory compliance assistance.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
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
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30">
              <span className="text-orange-400 text-sm font-medium">Human Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              HR & Recruitment Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              End-to-end talent acquisition and workforce solutions for growing businesses.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Zryoss provides structured, scalable, and reliable HR and recruitment
              services to help organizations attract, hire, and manage the right talent
              without operational complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section - Black Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-300 font-medium">Hiring Success Rate</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">30 Days</div>
            <div className="text-gray-300 font-medium">Avg. Time to Hire</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Support Coverage</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-300 font-medium">Companies Served</div>
          </div>
        </div>

        {/* Talent Acquisition Image Section */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800">
            <div 
              className="h-96 w-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1551836026-d5c2d0bb4f64?w=1200&h=600&fit=crop')" 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl p-8 lg:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-4 border border-orange-500/30">
                  <Target className="w-4 h-4 mr-2 text-orange-400" />
                  <span className="text-orange-400 text-sm font-medium">Talent Excellence</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Strategic <span className="text-orange-500">Talent Acquisition</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  We don't just fill positions - we build teams. Our comprehensive talent 
                  acquisition strategy ensures you get the right candidates who align with 
                  your company culture and drive business growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 border border-orange-500">
                    Find Talent
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid with Images */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Comprehensive <span className="text-orange-500">HR Solutions</span>
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

        {/* Transforming HR with Technology & Expertise Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Technology Driven
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Transforming HR with <span className="text-orange-500">Technology & Expertise</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Globe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Global Talent Network</h4>
                    <p className="text-gray-400">Access to top talent across industries and regions with AI-powered matching</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Precision Candidate Matching</h4>
                    <p className="text-gray-400">Advanced algorithms ensure perfect candidate-role fit with 95% accuracy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <ShieldCheck className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Compliance Automation</h4>
                    <p className="text-gray-400">Automated compliance monitoring for ever-changing labor laws and regulations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <div 
                  className="h-96 w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop')" 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-2xl font-bold text-orange-500">85% Faster</div>
                      <div className="text-sm text-gray-300">Recruitment Process</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-500">50K+</div>
                      <div className="text-sm text-gray-300">Active Candidates</div>
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
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zryoss for their talent acquisition needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 border border-orange-500">
              Get Started Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500/10 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our <span className="text-orange-500">Success</span> in Action
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See how leading companies transformed their HR processes with Zryoss
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Tech Startup Success</h4>
              <p className="text-gray-400">Scaling from 10 to 200 employees in 12 months with 95% retention</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Transformation</h4>
              <p className="text-gray-400">Global RPO implementation reducing hiring costs by 40% for Fortune 500</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Industry Leadership</h4>
              <p className="text-gray-400">Award-winning HR solutions achieving 99% compliance for retail leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}