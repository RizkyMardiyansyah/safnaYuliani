"use client";

import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Medical Monitoring Enterprise",
      text: "Led the delivery of an internal clinic management system...",
      images: ["/img/db.png", "/img/mobile.png"],
    },
    {
      title: "Learning Management System",
      text: "Led early-stage product development for LMS...",
      images: ["/img/lp360.png"],
    },
    {
      title: "Banking System for Regional Bank",
      text: "Led an 8-member cross-functional team to develop smart banking...",
      images: ["/img/mbanking.png"],
    },
    {
      title: "Digital Ordering System for Cookies UMKM",
      text: "This self-initiated project was designed to support small businesses...",
      images: ["/img/DM1.png", "/img/DM2.png"],
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-12">
          <div className="text-xl font-bold">Safna Yuliani</div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-orange-600 ${
                  activeSection === section ? "text-orange-600 font-semibold" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col gap-4 p-4">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-orange-600 ${
                    activeSection === section ? "text-orange-600 font-semibold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between py-24 px-6 md:px-12 mt-20"
      >
        <div className="max-w-2xl mb-12 md:mb-0 md:mr-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Product & Project Manager — Delivering outcomes, not just features
          </h1>
          <p className="text-xl mb-8">
            I lead cross-functional teams to ship customer-focused products, align stakeholders, and measure impact through clear KPIs. I specialise in end-to-end delivery for web & mobile products.
          </p>
        </div>
        <div className="relative w-64 h-64 mx-auto md:mx-0">
          <div className="absolute -top-16 -right-16 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-orange-100"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-blue-100"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="max-w-2xl text-lg leading-relaxed">
              <p className="mb-6">
                I'm a Product and Project Management enthusiast with hands-on experience in IT solution delivery and early-stage product development...
              </p>
              <p>
                I also have experience supporting the development of a Learning Management System (LMS)...
              </p>
            </div>
            <div className="relative w-full md:w-80 h-64 md:h-80">
              <img src="/img/foto1.jpeg" alt="About Me" className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-12 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl">Synapsis Sinergi Digital</h3>
              <h4 className="font-medium text-lg mb-2">Project Manager</h4>
              <p className="mb-2">Led the delivery of an internal clinic management system...</p>
              <p><b>Impact:</b> Project delivered 100% on schedule and improved internal operational efficiency.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl">Nusantara Adidaya Teknologi</h3>
              <h4 className="font-medium text-lg mb-2">Product Manager</h4>
              <p className="mb-2">Led early-stage development of a Learning Management System...</p>
              <p><b>Impact:</b> Delivered a clear MVP roadmap and supported initial adoption by a corporate client.</p>
            </div>
          </div>
          <div className="flex gap-6 mt-12 justify-center flex-wrap">
            <img src="/img/fotosyn.jpeg" alt="synapsis" className="rounded-xl w-full max-w-sm" />
            <img src="/img/nat.jpeg" alt="nat" className="rounded-xl w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="mb-20 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.text}</p>
            </div>
            <div className="flex-1 flex flex-col gap-4 w-full">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} image ${i + 1}`} className="rounded-xl w-full" />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 text-center relative">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your product vision into reality? Let's discuss how we can work together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:safnayuliani45@gmail.com" className="flex items-center justify-center gap-3 bg-white py-4 px-8 rounded-xl hover:bg-blue-700 hover:text-white transition">
            <MdEmail className="text-xl" />
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/safnayuliani/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white py-4 px-8 rounded-xl hover:bg-blue-700 hover:text-white transition">
            <FaLinkedinIn className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100">
        <p>© {new Date().getFullYear()} Safna Yuliani. All rights reserved.</p>
      </footer>
    </div>
  );
}
