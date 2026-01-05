import FadeUp from "../../components/animations/FadeUp";
import { useState } from "react";

export default function Ecosystem() {
  const [expandedLayer, setExpandedLayer] = useState(null);

  const layers = [
    {
      title: "Platform Layer",
      shortDesc: "Central systems, governance, reporting, and controls.",
      detailedDesc: "The Platform Layer is the centralized control system of Zryoss. It manages core technology, sales workflows, CRM, reporting, governance frameworks, and quality controls to ensure consistency, compliance, and scalability across the ecosystem. This layer ensures every transaction and delivery follows defined standards.",
      gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
      image: "/images/platform/platform-overview.png",
      features: [
        "Centralized control system",
        "Core technology management",
        "Sales workflows & CRM",
        "Governance frameworks",
        "Quality controls",
        "Compliance & standards"
      ],
      layerNumber: 1
    },
    {
      title: "Brand Layer",
      shortDesc: "Execution brands delivering domain-specific services.",
      detailedDesc: "The Brand Layer consists of Zryoss-owned execution brands operating in specific domains such as HR, IT, marketing, and compliance. These brands own service standards, pricing frameworks, delivery responsibility, and vendor coordination within their domain. They act as the execution authority between the platform and vendors.",
      gradient: "from-orange-500/15 via-orange-400/10 to-transparent",
      image: "/images/platform/zryoss-solves.jpg",
      features: [
        "Domain-specific execution brands",
        "Service standards ownership",
        "Pricing frameworks",
        "Delivery responsibility",
        "Vendor coordination",
        "Execution authority"
      ],
      layerNumber: 2
    },
    {
      title: "Vendor Layer",
      shortDesc: "Verified vendors executing delivery at scale.",
      detailedDesc: "The Vendor Layer includes vetted service providers and domain specialists responsible for actual service execution. Vendors operate under defined SLAs, timelines, and quality benchmarks monitored by Zryoss brands. This model enables scalable, asset-light delivery without compromising quality.",
      gradient: "from-orange-500/15 via-orange-400/10 to-transparent",
      image: "/images/platform/traditional-businesses.jpeg",
      features: [
        "Vetted service providers",
        "Domain specialists",
        "Defined SLAs & timelines",
        "Quality benchmarks",
        "Asset-light delivery",
        "Scalable execution"
      ],
      layerNumber: 3
    },
    {
      title: "Partner Layer",
      shortDesc: "Sales-focused partners driving client acquisition.",
      detailedDesc: "The Partner Layer consists of independent partners focused on sales, client relationships, and business growth. Partners acquire clients under their own brand name while Zryoss manages demos, execution, and delivery through the ecosystem. Partner earnings are linked solely to real business closures and delivery.",
      gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
      image: "/images/platform/zryoss-solves.jpg",
      features: [
        "Independent sales partners",
        "Client acquisition focus",
        "Brand autonomy",
        "Business growth",
        "Performance-based earnings",
        "Demos & execution managed by Zryoss"
      ],
      layerNumber: 4
    },
  ];

  const toggleLayer = (index) => {
    setExpandedLayer(expandedLayer === index ? null : index);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle 3D background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-xl"></div>
            <h1 className="text-5xl md:text-6xl font-bold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Zryoss Ecosystem
              </span>
            </h1>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transform translate-y-2"></div>
          </div>
        </FadeUp>

        {/* Broad Overview Section */}
        <FadeUp delay={0.1}>
          <div className="mt-12 mb-20">
            <div className="relative group">
              {/* 3D Card effect for overview */}
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-300/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 via-orange-500/3 to-transparent border border-orange-500/20 rounded-2xl p-10 backdrop-blur-sm overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-orange-400/30 rounded-tl-xl"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-orange-400/30 rounded-tr-xl"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-orange-400/30 rounded-bl-xl"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-orange-400/30 rounded-br-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-300/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-300 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-orange-300">
                        Ecosystem Overview
                      </h2>
                      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-[var(--text-muted)] leading-relaxed">
                      The Zryoss Ecosystem is a structured, multi-layer business operating system designed to scale service businesses efficiently.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-300 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-orange-300">Clear Accountability</h3>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm">
                          Each layer has defined responsibilities ensuring clear ownership and accountability across the ecosystem.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-300 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-orange-300">Controlled Execution</h3>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm">
                          Systematic processes and governance ensure quality delivery without operational chaos or compromises.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-300 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-orange-300">Sustainable Growth</h3>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm">
                          Partners focus on growth while Zryoss manages execution, creating scalable and sustainable business expansion.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-orange-500/10">
                      <p className="text-lg text-orange-300 font-semibold text-center">
                        Zryoss centralizes control, while partners focus on growth and client relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Layer Architecture Title */}
        <FadeUp delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100">
                Layer Architecture
              </span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              Four interconnected layers working in harmony to deliver exceptional service experiences
            </p>
            <div className="mt-6 h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full mx-auto"></div>
          </div>
        </FadeUp>

        {/* Expandable Layer Cards */}
        <div className="space-y-8">
          {layers.map((layer, index) => (
            <FadeUp key={index} delay={0.3 + (index * 0.1)}>
              <div className={`relative group transition-all duration-500 ${expandedLayer === index ? 'mb-12' : ''}`}>
                {/* 3D Card shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br via-orange-500/10 to-transparent rounded-xl blur-xl transform translate-y-4 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                
                {/* Main Card Container */}
                <div 
                  className={`relative border border-[var(--border)] rounded-xl bg-[var(--bg-card)] transform transition-all duration-500 overflow-hidden cursor-pointer
                    ${expandedLayer === index ? 
                      '-translate-y-4 shadow-2xl shadow-orange-500/20' : 
                      'hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10'
                    }`}
                  onClick={() => toggleLayer(index)}
                >
                  {/* 3D edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
                  <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400/50 to-transparent"></div>
                  
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} transition-opacity duration-500 ${expandedLayer === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  
                  {/* Floating orb */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-500/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Collapsed State */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-center gap-6">
                      {/* Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500/10 to-orange-300/5 rounded-2xl overflow-hidden border border-orange-500/20">
                          <img 
                            src={layer.image}
                            alt={layer.title}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-transparent rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {layer.layerNumber}
                              </span>
                              <h3 className="text-2xl font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                                {layer.title}
                              </h3>
                            </div>
                            <p className="text-[var(--text-muted)]">
                              {layer.shortDesc}
                            </p>
                          </div>
                          
                          {/* Expand/Collapse Button */}
                          <button className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-300/10 rounded-full flex items-center justify-center border border-orange-500/30 transition-transform duration-300 hover:scale-110">
                            <svg 
                              className={`w-5 h-5 text-orange-400 transition-transform duration-500 ${expandedLayer === index ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedLayer === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-orange-500/20 mx-8"></div>
                    <div className="p-8 pt-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        {/* Detailed Description */}
                        <div>
                          <h4 className="text-lg font-semibold text-orange-300 mb-4">Detailed Overview</h4>
                          <p className="text-[var(--text-muted)] leading-relaxed">
                            {layer.detailedDesc}
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-orange-300 mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {layer.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[var(--text-muted)]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Layer Indicator */}
                      <div className="mt-10 pt-6 border-t border-orange-500/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full animate-pulse"></div>
                            <span className="text-sm text-orange-400/70">Layer {layer.layerNumber} • {layer.title}</span>
                          </div>
                          <div className="text-xs text-[var(--text-muted)] bg-orange-500/10 px-3 py-1 rounded-full">
                            Click to collapse
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Legend */}
        <FadeUp delay={0.8}>
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-orange-300 mb-6 text-center">
                How to Explore Layers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-300/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-orange-300">Click to Expand</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Click any layer card to view detailed information</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-300/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-orange-300">Click to Collapse</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Click again to collapse the expanded view</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 3D floating particles */}
        <div className="absolute -bottom-20 left-10 w-4 h-4 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-br from-orange-400/15 to-transparent rounded-full blur-sm animate-pulse delay-700"></div>
        <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-gradient-to-br from-orange-300/10 to-transparent rounded-full blur-sm animate-pulse delay-300"></div>
      </div>
    </section>
  );
}