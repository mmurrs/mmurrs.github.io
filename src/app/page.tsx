'use client';

// Force deployment update - 2025-01-28
import { useState } from 'react';
import { Github, Twitter, Linkedin, MapPin } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    // { label: "Interests & Experiments", href: "#interests" },
    { label: 'Professional Experience', href: '#experience' },
    // { label: "Writings", href: "#writings" }
  ];

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-50 overflow-hidden">
      {/* Navigation - Always pinned to top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
          {/* Contact Section - Always visible */}
          <div className="flex items-center space-x-6">
            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide border-b border-slate-300 dark:border-slate-600 pb-1">
              Contact
            </div>
            <div className="flex items-center space-x-4">
              {[
                { url: 'https://github.com/mmurrs', IconComponent: Github },
                {
                  url: 'https://twitter.com/mattmurrs',
                  IconComponent: Twitter,
                },
                {
                  url: 'https://www.linkedin.com/in/matthew-murray3',
                  IconComponent: Linkedin,
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.IconComponent className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 pt-24">
            <nav className="space-y-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-2xl font-light text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b border-slate-100/50 dark:border-slate-700/50 pb-4"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-200/30 dark:bg-cyan-500/20 rounded-full blur-2xl"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16 pt-32">
        {/* Hero Section - Asymmetric design */}
        <section className="mb-24">
          <div className="grid grid-cols-12 gap-8 items-center min-h-[60vh]">
            <div className="col-span-12 md:col-span-8 space-y-8">
              <div className="space-y-4">
                <h1 className="text-8xl md:text-9xl font-black tracking-tight">
                  <span className="block text-slate-800 dark:text-white">
                    Matt Murray
                  </span>
                  <span className="block text-3xl md:text-4xl font-light text-slate-500 dark:text-slate-400 -mt-4">
                    / exploring frontiers
                  </span>
                </h1>
              </div>

              {/* Location Widget - NYC/Manhattan street grid */}
              <div className="inline-block">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 rounded-xl overflow-hidden">
                        {/* Manhattan street grid */}
                        <svg viewBox="0 0 64 64" className="w-full h-full">
                          {/* Background */}
                          <rect
                            width="64"
                            height="64"
                            fill="currentColor"
                            className="text-slate-900 dark:text-slate-100"
                          />

                          {/* Manhattan island outline */}
                          <path
                            d="M20 8 L44 8 L45 12 L47 15 L48 20 L47 25 L46 30 L47 35 L48 40 L47 45 L45 50 L42 54 L38 56 L32 56 L28 54 L25 50 L22 45 L20 40 L19 35 L20 30 L22 25 L20 20 L19 15 L20 12 Z"
                            fill="currentColor"
                            className="text-slate-900 dark:text-slate-100"
                          />

                          {/* Street grid - vertical avenues */}
                          <g
                            stroke="currentColor"
                            strokeWidth="0.3"
                            className="text-white dark:text-slate-900"
                          >
                            <line x1="22" y1="10" x2="22" y2="54" />
                            <line x1="25" y1="10" x2="25" y2="54" />
                            <line x1="28" y1="10" x2="28" y2="54" />
                            <line x1="31" y1="10" x2="31" y2="54" />
                            <line x1="34" y1="10" x2="34" y2="54" />
                            <line x1="37" y1="10" x2="37" y2="54" />
                            <line x1="40" y1="10" x2="40" y2="54" />
                            <line x1="43" y1="10" x2="43" y2="54" />
                          </g>

                          {/* Street grid - horizontal streets */}
                          <g
                            stroke="currentColor"
                            strokeWidth="0.2"
                            className="text-white dark:text-slate-900"
                          >
                            <line x1="20" y1="12" x2="46" y2="12" />
                            <line x1="20" y1="15" x2="46" y2="15" />
                            <line x1="20" y1="18" x2="46" y2="18" />
                            <line x1="20" y1="21" x2="46" y2="21" />
                            <line x1="20" y1="24" x2="46" y2="24" />
                            <line x1="20" y1="27" x2="46" y2="27" />
                            <line x1="20" y1="30" x2="46" y2="30" />
                            <line x1="20" y1="33" x2="46" y2="33" />
                            <line x1="20" y1="36" x2="46" y2="36" />
                            <line x1="20" y1="39" x2="46" y2="39" />
                            <line x1="20" y1="42" x2="46" y2="42" />
                            <line x1="20" y1="45" x2="46" y2="45" />
                            <line x1="20" y1="48" x2="46" y2="48" />
                            <line x1="20" y1="51" x2="46" y2="51" />
                          </g>

                          {/* Central Park - larger rectangle */}
                          <rect
                            x="28"
                            y="18"
                            width="8"
                            height="15"
                            fill="currentColor"
                            className="text-slate-900 dark:text-slate-100"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />

                          {/* Broadway diagonal */}
                          <line
                            x1="20"
                            y1="54"
                            x2="44"
                            y2="12"
                            stroke="currentColor"
                            strokeWidth="0.4"
                            className="text-white dark:text-slate-900"
                          />

                          {/* Location pin */}
                          <circle
                            cx="32"
                            cy="35"
                            r="2.5"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                          NYC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex justify-end">
              <div className="w-2 h-64 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Interests & Experiments Section - Temporarily removed */}

        {/* Professional Experience Section */}
        <section id="experience" className="mb-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white sticky top-8">
                Professional
                <br />
                Experience
              </h2>
            </div>

            <div className="col-span-12 md:col-span-9 space-y-12">
              {[
                {
                  title: 'Developer Relations Engineer',
                  organization: 'Eigen Labs',
                  period: '2024 - Present',
                  description:
                    'Growing the EigenCloud with early stage builders, specializing in EigenDA with L2 & Ethereum infrastructure',
                  highlights: [
                    'Verifiable Compute',
                    'Data Availability',
                    'Ethereum Rollups',
                  ],
                },
                {
                  title: 'Developer Relations Lead',
                  organization: 'Intuition',
                  period: '2023 - 2024',
                  description:
                    'Research and worked on incentivized shared knowledge graph leveraging decentralized identity primitives',
                  highlights: [
                    'Knowledge Graphs',
                    'Information Finance',
                    'Decentralized Identity',
                  ],
                },
                {
                  title: 'Site Reliability Engeineer',
                  organization: 'Procter & Gamble',
                  period: '2021 - 2023',
                  description:
                    "Developed monitoring and reliability systems across all of P&G's Direct to Consumer (DTC) stores monitoring the end to end store operations",
                  highlights: [
                    'DTC',
                    'Site Reliability',
                    'E-commmerce Operations',
                  ],
                },
              ].map((role, index) => (
                <div key={index} className="group">
                  <div className="border-l-4 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 pl-8 py-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                          {role.period}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {role.title}
                        </h3>
                        <div className="text-lg text-slate-600 dark:text-slate-400 mt-1">
                          {role.organization}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-2xl leading-relaxed">
                      {role.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {role.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writings Section - Temporarily removed */}

        {/* Footer */}
        <section>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-12">
            <div className="text-center text-sm text-slate-500 dark:text-slate-400">
              <div>Matt Murray</div>
              <div className="mt-4">© {new Date().getFullYear()}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
