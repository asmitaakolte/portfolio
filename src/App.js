import React, { useEffect, useState } from "react";
import profilePic from "./assets/asmita.jpg";
import project1 from "./assets/Budget_Tracker.png";
import project3 from "./assets/kubecron.jpeg"
import project2 from "./assets/terraform.jpeg"
import project4 from "./assets/big_data.png"
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-4 md:p-10 font-sans transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-500 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Navbar */}
      <motion.nav
        className="flex justify-center mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-gray-800 rounded-full px-6 py-2 flex space-x-6 shadow-lg">
          {["Home", "About", "Skills", "Experience", "Projects"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-gray-400 hover:text-white hover:bg-gray-700 px-4 py-1 rounded-full transition font-medium"
            >
              {section}
            </a>
          ))}
        </div>
      </motion.nav>

      <header id="home" className="flex flex-col md:flex-row items-center mb-16 scroll-mt-20">
        <motion.img
          src={profilePic}
          alt="Asmita Kolte"
          className="w-40 h-40 rounded-full shadow-lg mb-4 md:mb-0 md:mr-8 border-2 border-blue-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">Hi, I'm Asmita</h2>
          <p className="text-lg text-blue-400 animate-pulse">
            ☁️ Cloud & DevOps Engineer | Azure | Terraform | AKS | GitHub Actions
          </p>
          <a
            href="/Asmita_A_Kolte_Cloud.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </header>

      {/* About */}
      <motion.section layout id="about" className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">About Me</h2>
        <p className="text-gray-300">
          I’m a Cloud & DevOps Engineer with 5 years of industry experience, including 3+ years of hands-on work
          with Azure. I've helped financial clients build scalable, secure infrastructure and CI/CD pipelines, and I’m
          currently pursuing my Master’s in Computer Science at Roosevelt University.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none text-gray-300">
          <li>☁️ <strong>Cloud:</strong> Azure, AWS</li>
          <li>⚙️ <strong>DevOps:</strong> Azure DevOps, GitHub Actions, Jenkins</li>
          <li>📐 <strong>IaC:</strong> Terraform, ARM Templates</li>
          <li>💻 <strong>Scripting:</strong> Bash, PowerShell, Python</li>
          <li>📦 <strong>Containers:</strong> AKS, Docker, Helm</li>
          <li>📊 <strong>Monitoring:</strong> Azure Monitor, Grafana, App Insights</li>
        </ul>
      </motion.section>

      {/* Experience */}
      <motion.section layout id="experience" className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 shadow-md rounded-lg p-6 transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">Cloud Devops Engineer - Accenture</h3>
            <p className="text-sm text-gray-400">Aug 2019 – Jul 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li> Architected a monitoring solution using Azure Monitor and Application Insights, minimizing downtime and en
            hancing system reliability by automating incident detection and alerts, resulting in a 50% reduction in mean time to
            resolution.</li>
            <li>Managed high-availability deployments across multi-cloud environments using Azure Load Balancer , reducing down
            time by 40% and enhancing disaster recovery for Business Continuity Management.</li>
            <li>Automated application deployments using YAML, Puppet, and Shell Scripts, reducing deployment time by 50% and
            ensuring consistent, error-free rollouts across servers.</li>
            <li>Ledchange management in Agile environments, driving seamless integrations and efficient production releases while
            ensuring continuous improvement. Troubleshot and resolved cloud infrastructure issues, maintaining optimal performance
            and availability.</li>
            <li>Provisioned cost-effective cloud infrastructure using IaC tools like ARM templates and Terraform, creating a scalable,
            resilient solution that reduced infrastructure costs by 60%.</li>
            <li>Engineered secure CI/CD pipelines using Azure DevOps and GitHub workflows to build applications securely,
            reducing manual intervention and deployment errors by 30% .</li>
            <li>Orchestrated containerized deployments on Kubernetes ,leveraging auto-scaling and rolling updates, increasing
            deployment efficiency by 35% and enhancing system reliability.</li>
            <li>Documented standard methodologies on Confluence and created compliance reports, enhancing process consis
            tency and improving audit efficiency by 40%.</li>
            </ul>
          </div>
          <div className="bg-gray-900 shadow-md rounded-lg p-6 transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">Associate Software Developer - Accenture</h3>
            <p className="text-sm text-gray-400">Feb 2019 – Aug 2019</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
              <li>Developed ETL processes using Java and SQL to enhance data flow, processing efficiency, and integrity.</li>
              <li> Designed and implemented RESTful APIs and microservices, achieving a 99% success rate with sub-50ms latencies,
              enhancing performance and scalability</li>
            </ul>
          </div>
        <div className="bg-gray-900 shadow-md rounded-lg p-6 transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">Junior Developer - Global Industrial</h3>
            <p className="text-sm text-gray-400">June 2018 – Feb 2019</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
              <li>Successfully improved website performance by 70% by migrating the existing Struts framework to the Spring Boot
              microservices framework.</li>
              <li> Enhanced e-commerce modules by identifying inefficiencies and streamlining processes, achieving a 40% performance
              boost and enhanced user experience.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
          <motion.section layout id="projects" className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 1 */}
              <motion.a 
                whileHover={{ scale: 1.03 }} 
                href="https://github.com/asmitaakolte/Software-Developer-Project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 shadow-md rounded-lg overflow-hidden block transition transform hover:shadow-xl"
              >
                <img src={project1} alt="Project 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">Budget_Tracker_App</h3>
                  <p className="text-sm text-gray-300">
                  Full Stack application for tracking Daily expenses .
                  </p>
                </div>
              </motion.a>

              {/* Project 2 */}
              <motion.a 
                whileHover={{ scale: 1.03 }} 
                href="https://github.com/asmitaakolte/Azure-Infra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 shadow-md rounded-lg overflow-hidden block transition transform hover:shadow-xl"
              >
                <img src={project2} alt="Project 2" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">Azure Infrastructure </h3>
                  <p className="text-sm text-gray-300">
                    Different Azure Resources using Terraform 
                  </p>
                </div>
              </motion.a>

              {/* Project 2 */}
              <motion.a 
                whileHover={{ scale: 1.03 }} 
                href="https://github.com/asmitaakolte/Kubernetes_Cron_job" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 shadow-md rounded-lg overflow-hidden block transition transform hover:shadow-xl"
              >
                <img src={project3} alt="Project 3" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">Kube CronJob</h3>
                  <p className="text-sm text-gray-300">
                    Cron job on Kubernetes Cluster to fetch currency rates 
                  </p>
                </div>
              </motion.a>
              {/* Project 2 */}
              <motion.a 
                whileHover={{ scale: 1.03 }} 
                href="https://github.com/asmitaakolte/Consumer_Spending_Insights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 shadow-md rounded-lg overflow-hidden block transition transform hover:shadow-xl"
              >
                <img src={project4} alt="Project 4" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">Consumer Spending Analysis</h3>
                  <p className="text-sm text-gray-300">
                  The goal of this project is to explore a dataset meeting specific "big data" criteria and uncover patterns in consumer spending.
                  </p>
                </div>
              </motion.a>

            </div>
          </motion.section>

          {/* Education */}
          <motion.section id="education" className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Education</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 shadow-md rounded-lg p-6 transition transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white">Roosevelt University – Chicago, IL</h3>
                <p className="text-sm text-gray-400">Master of Science in Computer Science | Aug 2023 – May 2025</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                  <li>Relevant Coursework: Cloud Computing, Distributed Systems, Advanced Algorithms</li>
                </ul>
              </div>
              <div className="bg-gray-900 shadow-md rounded-lg p-6 transition transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white">University of Mumbai – India</h3>
                <p className="text-sm text-gray-400">Bachelor of Engineering in Information Technology | 2014 – 2018</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                  <li>Graduated with First Class with Distinction</li>
                  <li>Capstone: Built a cloud-integrated web application for event management</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Contact */}
         
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Contact</h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Social Links */}
        <div className="flex flex-col items-start">
          <p className="text-2xl font-semibold mb-2">Find me on <span className="inline-block ml-1">👇</span></p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/asmitaakolte" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/asmita-kolte" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:asmitaakolte97@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 bg-gray-900 p-6 rounded-lg shadow-md w-full md:max-w-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Asmita Kolte"
              className="flex-1 p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="asmitaakolte97@gmail.com"
              className="flex-1 p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Hi.."
            rows="5"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>

    </motion.div>
    
  );
}
