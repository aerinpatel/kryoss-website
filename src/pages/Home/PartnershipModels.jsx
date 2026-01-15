import React from "react";
import { User, Users, Globe, Target, Briefcase, Zap, ArrowRight } from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 animate-fadeUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, primary, outline, className = "", onClick }) => {
  const baseStyles =
    "px-4 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden group/btn cursor-pointer";
  const primaryStyles = primary
    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/60 hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:skew-x-12"
    : "";
  const outlineStyles = outline
    ? "border-2 border-orange-500/40 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-500 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 after:absolute after:inset-0 after:border-2 after:border-orange-500/0 hover:after:border-orange-500/50 after:rounded-xl after:transition-all after:duration-500 after:scale-95 hover:after:scale-100"
    : "";

  return (
    <button
      className={`${baseStyles} ${primaryStyles} ${outlineStyles} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

const models = [
  {
    type: "IPP",
    label: "Independent Prime Partner",
    focus: "Best for individuals and focused founders",
    icon: <User className="w-8 h-8 text-orange-500" />,
    features: [
      { icon: <Target size={18} />, text: "Single business vertical focus" },
      { icon: <Briefcase size={18} />, text: "Own your brand and your clients" },
      { icon: <Zap size={18} />, text: "Execution fully managed by ZRYOSS" },
      { icon: <Globe size={18} />, text: "Ideal for professionals & first-time founders" },
    ],
    cta: "Join as IPP",
    color: "from-orange-500/20 to-transparent",
  },
  {
    type: "BPP",
    label: "Business Prime Partner",
    focus: "Best for leaders and scale builders",
    icon: <Users className="w-8 h-8 text-green-500" />,
    features: [
      { icon: <Target size={18} />, text: "Multiple business verticals" },
      { icon: <Users size={18} />, text: "Enable and support multiple IPPs" },
      { icon: <Zap size={18} />, text: "Strategic and expansion-focused" },
      { icon: <Globe size={18} />, text: "Larger business footprint and reach" },
    ],
    cta: "Join as BPP",
    color: "from-green-500/10 to-transparent",
  },
];

export default function PartnershipModels() {
  const handleJoinClick = (type) => {
    console.log(`Join as ${type} clicked`);
  };

  return (
    <section id="partnerships" className="py-24 bg-[#050505] relative overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            {/* ✅ match ProblemSection */}
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
              Choose Your Path
            </span>

            {/* ✅ match ProblemSection */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Two Partnership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Models
              </span>
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />

            {/* ✅ match ProblemSection */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Select the partnership model that aligns with your vision and growth ambitions
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {models.map((model, idx) => (
            <FadeUp key={idx} delay={idx * 0.2}>
              <div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${model.color} border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-full flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02] hover:-translate-y-2 backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-black/60 transition-all duration-500 group-hover:scale-110">
                    {model.icon}
                  </div>

                  <span className="text-3xl font-bold text-white/10 group-hover:text-orange-500/30 transition-all duration-500 uppercase font-mono">
                    {model.type}
                  </span>
                </div>

                <div className="mb-8 relative z-10">
                  {/* ✅ consistent card title weight */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-500">
                    {model.label}
                  </h3>

                  {/* ✅ consistent subtitle */}
                  <p className="text-orange-400/80 text-xs uppercase tracking-[0.3em] font-bold group-hover:text-orange-300 transition-colors duration-500">
                    {model.focus}
                  </p>
                </div>

                <div className="space-y-4 flex-grow mb-8 relative z-10">
                  {model.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                    >
                      <div className="text-orange-500/60 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mt-1 flex-shrink-0">
                        {feat.icon}
                      </div>

                      {/* ✅ match ProblemSection paragraph style */}
                      <span className="text-sm md:text-base font-light leading-relaxed">
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <Button primary className="w-full py-4" onClick={() => handleJoinClick(model.type)}>
                    <span className="hidden xl:inline">{model.cta}</span>
                    <span className="xl:hidden">Join</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center">
            <p className="text-base text-gray-300 font-light">
              Start building your business empire today —{" "}
              <span className="text-orange-400 font-semibold">
                your brand, our execution
              </span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
