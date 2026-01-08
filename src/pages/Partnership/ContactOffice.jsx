import { Mail, Phone, MapPin, MessageSquare, Send, Globe } from "lucide-react";

export default function ContactOffice() {
  return (
    <section className="relative py-32 px-6 bg-[#020617] overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2
                      w-[700px] h-[700px] bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT: CONTACT + OFFICES ================= */}
          <div>
            <span className="inline-flex items-center gap-2
                             text-sm uppercase tracking-widest
                             text-orange-400 font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Global Operations
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Let’s discuss <span className="text-orange-500">structured execution</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-14">
              Whether you’re exploring IPP, BPP, or a strategic collaboration,
              our team will guide you through the right execution model —
              without sales pressure.
            </p>

            {/* Offices */}
            <div className="grid sm:grid-cols-2 gap-10 mb-14">
              <div>
                <div className="flex items-center gap-3 text-orange-400
                                font-semibold text-sm uppercase tracking-widest mb-3">
                  <MapPin className="w-4 h-4" />
                  India Operations
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Kryoss Operations Hub<br />
                  Bangalore, India<br />
                  <span className="text-gray-500 font-mono">
                    +91 XXXXX XXXXX
                  </span>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-orange-400
                                font-semibold text-sm uppercase tracking-widest mb-3">
                  <MapPin className="w-4 h-4" />
                  Global Coordination
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Distributed Global Team<br />
                  APAC • EMEA • US<br />
                  <span className="text-gray-500 font-mono">
                    partners@kryoss.com
                  </span>
                </p>
              </div>
            </div>

            {/* Direct contact */}
            <div className="space-y-4">
              <a
                href="mailto:partners@kryoss.com"
                className="flex items-center gap-4 text-gray-300
                           hover:text-orange-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5
                                border border-white/10
                                flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                partners@kryoss.com
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-4 text-gray-300
                           hover:text-orange-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5
                                border border-white/10
                                flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                +91 XXXXX XXXXX
              </a>
            </div>
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div className="relative">
            <div className="absolute -inset-1
                            bg-gradient-to-r from-orange-500/40 to-transparent
                            blur-xl opacity-30" />

            <div className="relative rounded-3xl
                            border border-white/10
                            bg-gradient-to-br from-white/5 to-white/[0.02]
                            backdrop-blur-md p-10">
              <h3 className="text-2xl font-semibold text-white
                             flex items-center gap-3 mb-8">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                Partner Inquiry
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest
                                       text-gray-500 mb-2">
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-xl bg-black/40
                                 border border-white/10
                                 px-4 py-3 text-white
                                 focus:border-orange-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest
                                       text-gray-500 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl bg-black/40
                                 border border-white/10
                                 px-4 py-3 text-white
                                 focus:border-orange-500 outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest
                                     text-gray-500 mb-2">
                    Engagement Type
                  </label>
                  <select
                    className="w-full rounded-xl bg-black/40
                               border border-white/10
                               px-4 py-3 text-white
                               focus:border-orange-500 outline-none"
                  >
                    <option>Independent Prime Partner (IPP)</option>
                    <option>Business Prime Partner (BPP)</option>
                    <option>General Partnership Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest
                                     text-gray-500 mb-2">
                    Context
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl bg-black/40
                               border border-white/10
                               px-4 py-3 text-white
                               focus:border-orange-500 outline-none resize-none"
                    placeholder="Briefly describe your objectives"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl
                             bg-orange-500 text-black
                             font-semibold flex items-center
                             justify-center gap-2
                             hover:bg-orange-400 transition"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-500">
                Submissions are reviewed by Kryoss partnership teams.
                This form does not constitute an offer or guarantee.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
