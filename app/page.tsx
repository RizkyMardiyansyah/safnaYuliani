"use client";

import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import "./styles.css"

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

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-12">
          <div className="text-xl font-bold">Safna Yuliani</div>
          <div className="hidden md:flex gap-6">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <a
              key={section}
              href={`#${section}`}
              className={`px-4 py-2 rounded-xl transition-all duration-300
                ${
                  activeSection === section
                    ? "bg-indigo-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-indigo-600 hover:text-white"
                }`}
            >
            
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md mt-16">
            <div className="flex flex-col gap-4 p-4">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-indigo-600 ${activeSection === section ? "text-indigo-600 font-semibold" : ""
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
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24 overflow-hidden"
      >
        {/* Teks Hero */}
        <div className="z-10 max-w-2xl mb-12 md:mb-0 md:mr-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight hero-title">
            <span className="block text-4xl md:text-5xl text-gray-800">
              Product & Project Manager
            </span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
              Delivering outcomes, not just features
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 hero-subtitle">
            I lead cross-functional teams to ship customer-focused products, align stakeholders, and measure impact through clear KPIs. I specialise in end-to-end delivery for web & mobile products.
          </p>
        </div>


        <div className="hero-image relative">
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            {/* Lingkaran 1 */}
            <div className="hero-circle-2 absolute -bottom-40 -left-10 w-[400px] h-[400px] rounded-full"
              style={{ backgroundColor: "var(--primary-color)", opacity: 0.7 }}></div>

            {/* Lingkaran 2 */}
            <div className="hero-circle absolute -top-60 -left-100 w-[500px] h-[500px] rounded-full"
              style={{ backgroundColor: "var(--secondary-color)", opacity: 0.3 }}></div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="tittle text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="max-w-2xl text-lg leading-relaxed">
              <p className="mb-6">
                I'm a Product and Project Management enthusiast with hands-on experience in IT solution delivery and early-stage product development. I've coordinated development timelines, aligned engineering teams, prepared sprint and monthly reports, and ensured on-time delivery for an internal clinic management system used by a client company.
              </p>
              <p>
                I also have experience supporting the development of a Learning Management System (LMS), where I conducted product research, performed A/B testing, broke down tasks for developers, set priorities, and collaborated with stakeholders to identify user needs. I frequently work with Jira, ClickUp, Miro, and Draw.io to organize workflows and support smooth execution. I enjoy turning ideas into structured plans and working with teams to build meaningful digital solutions.
              </p>
            </div>
            <div className="relative w-full md:w-80 h-64 md:h-100">
              <img src="/img/foto1.jpeg" alt="About Me" className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-12 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="tittle text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Synapsis Sinergi Digital</h3>
              <h4 className="font-bold text-lg mb-4 font-desc">Project Manager</h4>
              <p className="mb-2 text-gray-500 font-normal font-desc">Led the delivery of an internal clinic management system by coordinating developers, monitoring timelines, and ensuring on-time delivery. Prepared sprint and monthly reports, managed task distribution using Jira, and supported planning for upcoming sprints. Worked closely with stakeholders to align progress with business needs.</p>
              <p className="font-desc text-gray-500"><b>Impact:</b> Project delivered 100% on schedule and improved internal operational efficiency.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Nusantara Adidaya Teknologi</h3>
              <h4 className="font-bold text-lg mb-4 font-desc">Product Manager</h4>
              <p className="mb-2 text-gray-500 font-normal font-desc">Led early-stage development of a Learning Management System used for corporate training. Conducted product research, supported A/B testing, prioritized features, and translated stakeholder needs into structured development plans. Collaborated with cross-functional teams using ClickUp, Miro, and Draw.io.</p>
              <p className="font-desc text-gray-500"><b>Impact:</b> Delivered a clear MVP roadmap and supported initial adoption by a corporate client.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-center z-10">
            <img
              src="/img/fotosyn.jpeg"
              alt="synapsis"
              className="w-full h-72 md:h-80 object-cover rounded-xl"
            />
            <img
              src="/img/nat.jpeg"
              alt="nat"
              className="w-full h-72 md:h-80 object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* Project 1 Section */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="container">
          <h2 className="project-title">Medical Monitoring Enterprise</h2>
          <div className="project-content">
            <div className="project-text">
              <p>Led the delivery of an internal clinic management system for a corporate client from planning to release. Coordinated developers, controlled timelines, and ensured each sprint was completed as planned. Prepared sprint and monthly progress reports, supported sprint planning, and aligned development with internal stakeholder needs using Jira, Miro, and Draw.io.</p>
              <p><b> Outcome:</b> Project delivered 100% on schedule and enabled centralized clinic data management for internal operations.</p>
            </div>
            <div className="project-images">
              <img style={{ height: "60%", margin: "auto 0" }} src="img/DB.png" />
              <img src="img/mobile.png" alt="Project 1 Image 2" />
            </div>
          </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
      </section>

      {/* Project 2 Section */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="container">
          <h2 className="project-title">Learning Management System</h2>
          <div className="project-content">
            <div className="project-images">
              <img src="img/lp360.png" alt="Project 2 Image 1" />
            </div>
            <div className="project-text">
              <p>Led early-stage product development for a Learning Management System used for employee training. Conducted product research, defined feature priorities, and broke down requirements for the development team. Collaborated with stakeholders to understand training needs and supported A/B testing to improve usability and learning flow using Miro, Draw.io, and ClickUp.</p>
              <p><b> Outcome:</b> LMS successfully adopted for internal training programs by a regional bank.</p>
            </div>
          </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
      </section>

      {/* Project 3 Section */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="container">
          <h2 className="project-title">Banking System for Regional Bank</h2>
          <div className="project-content">
            <div className="project-text">
              <p>Led an 8-member cross-functional team to develop a smart banking application. Conducted feature research and collaborated closely with stakeholders to gather business and user needs. Defined feature priorities, broke down tasks for the development team, and oversaw readiness to ensure the application performed well before release.</p>
              <p><b> Outcome:</b> Delivered a stable smart banking application aligned with stakeholder requirements.</p>
            </div>
            <div className="project-images">
              <img src="img/banking.png" alt="Project 2 Image 1" />
            </div>
          </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
      </section>


      {/* Project 4 Section  */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="container">
          <h2 className="project-title">
            Digital Ordering System for Cookies UMKM
          </h2>
          <div className="project-content">
            <div className="project4-images">
              <img className="dm1" src="img/dpmama1.png" />
              <img className="dm2" src="img/mama2.png" alt="Project 1 Image 2" />
            </div>
            <div className="project-text">
              <p>
                This self-initiated project was designed to support small businesses
                (UMKM) in managing cookie orders more efficiently. I initiated the
                system design and translated business needs into functional features
                to simplify the order recap process for business owners.
              </p>
              <p>
                The system enables customers to place orders while automatically
                calculating the total purchase amount. For UMKM owners, order data is
                updated in real time and can be exported into Excel format, allowing
                easier order tracking and sales monitoring.
              </p>
              <a
                href="https://dapoermama.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl 
                          font-semibold hover:bg-indigo-700 transition-all duration-300">
                Dapoer Mama
              </a>

              <div className="project-outcome mt-6">
                <p className="outcome"><b>Outcome :</b></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduced manual order recording and minimized human error</li>
                  <li>Improved efficiency through real-time order updates</li>
                  <li>Enabled faster sales reporting through Excel export</li>
                  <li>Enhanced customer experience with automatic total calculation</li>
                  <li>Helped UMKM owners focus more on core business activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
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
