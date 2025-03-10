import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Award,
  Code2,
  Binary,
  Cpu,
  Cloud,
  Database,
  Boxes,
  Phone
} from 'lucide-react';
import { 
  SiJavascript, 
  SiPython,
  SiSpring,
  SiReact,
  SiAngular,
  SiHibernate,
  SiAmazonwebservices,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiPostgresql,
  SiAmazondynamodb,
  SiElasticsearch,
  SiApachekafka
} from '@icons-pack/react-simple-icons';
import { FaJava } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sarath Chandra</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-6xl font-bold">SC</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Sarath Chandra</h1>
              <h2 className="text-2xl text-blue-400 mb-6">Senior Associate Platform L1</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Dedicated Java Full Stack Developer and AWS Certified Developer - Associate with 8+ years of experience in developing enterprise 
                web applications. Expertise in Java/J2EE, Spring Boot, Microservices, RESTful web services, Hibernate, Angular, and Apache Kafka.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Contact Me
                </a>
                <a href="#experience" className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-md font-medium transition-colors">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">About Me</h2>
          <p className="text-gray-300 mb-6">
            I am a Senior Associate Platform Developer with extensive experience in developing enterprise web applications. 
            My expertise spans across full-stack development, with a strong focus on Java technologies and cloud platforms, 
            particularly AWS where I hold a Developer Associate certification.
          </p>
          <p className="text-gray-300 mb-6">
            Throughout my career, I've worked on significant projects in banking, e-commerce, and financial services sectors, 
            delivering robust solutions using modern technologies and best practices.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sarath77/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <FileText size={20} /> Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-blue-500 pb-2 inline-block">Work Experience</h2>
          
          <div className="space-y-12">
            {/* Publicis Sapient */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Senior Associate, Platform Level 1</h3>
                <span className="text-blue-400">• Publicis Sapient</span>
              </div>
              <p className="text-gray-400 mb-4">September 2021 - Present</p>
              <p className="text-gray-300 mb-4">Project: Goldman Sachs Marcus Highline - Quantum Core</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed and developed RESTful APIs for efficient transaction data transfer with robust validations ensuring data integrity</li>
                <li>Created and maintained React-based user interfaces for the Quantum ETL platform</li>
                <li>Engineered notification service for timely delivery of compliance reports</li>
                <li>Developed Snowflake queries to identify and address compliance issues related to card collections and recoveries</li>
                <li>Implemented diverse calling strategies for effective customer interaction management</li>
                <li>Created RESTful API layer exposing Elasticsearch data to downstream systems using query DSL</li>
              </ul>
            </div>

            {/* EPAM Systems */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Full Stack Web Developer</h3>
                <span className="text-blue-400">• EPAM Systems</span>
              </div>
              <p className="text-gray-400 mb-4">July 2019 - September 2021</p>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Project: MasterCard Payment Gateway Services</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Developed end-to-end functionality for saved searches feature</li>
                    <li>Implemented order reconciliation functionality</li>
                    <li>Enhanced password validation system</li>
                    <li>Contributed to Spring framework and Bootstrap upgrade initiatives</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Project: Culture of Togetherness</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Designed and developed full-stack application from concept to deployment</li>
                    <li>Integrated EPAM SSO with Spring Security</li>
                    <li>Implemented Kafka messaging and Jenkins CI/CD pipeline</li>
                    <li>Created detailed dashboards and APIs for performance analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Verizon */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Microservices Developer</h3>
                <span className="text-blue-400">• Verizon Sourcing LLC</span>
              </div>
              <p className="text-gray-400 mb-4">February 2019 - July 2019</p>
              <p className="text-gray-300 mb-2">Project: Agent E-Commerce</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Resolved bugs in the Agent E-commerce portal</li>
                <li>Worked with asynchronous frameworks for high performance and speed</li>
                <li>Utilized Play Framework and Akka Framework for microservices development</li>
                <li>Implemented RESTful Web Services with Redis and Elasticsearch</li>
              </ul>
            </div>

            {/* TCS */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Microservices Developer</h3>
                <span className="text-blue-400">• Tata Consultancy Services</span>
              </div>
              <p className="text-gray-400 mb-4">January 2017 - January 2019</p>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Project: Bose Corporation (BOPIS)</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Designed and developed microservices for new customer offerings</li>
                    <li>Implemented tax calculation for US and Canada through Vertex Tax API</li>
                    <li>Performed CRUD operations using Amazon DynamoDB</li>
                    <li>Developed Kafka consumer services with RESTful service integration</li>
                    <li>Configured AWS S3 to send status alerts to SNS</li>
                    <li>Achieved more than 95% test coverage with JUnit</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Project: Allianz Global Investors - Reporting Services</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Developed microservice components as data sources for financial reports</li>
                    <li>Created Excel report generation functionality</li>
                    <li>Built a graphics engine for dynamic chart generation using High Charts API</li>
                    <li>Implemented dashboard for monitoring report generation status</li>
                    <li>Set up scheduled validation of reports and data completeness checks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-blue-500 pb-2 inline-block">Technical Skills</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Programming Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Binary className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-blue-400">Programming Languages & Core Technologies</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <FaJava className="text-blue-400" size={20} />
                      <span className="font-medium">Java</span>
                    </div>
                    <span className="text-blue-400">8 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiJavascript className="text-blue-400" size={20} />
                      <span className="font-medium">JavaScript/TypeScript</span>
                    </div>
                    <span className="text-blue-400">6 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiPython className="text-blue-400" size={20} />
                      <span className="font-medium">Python</span>
                    </div>
                    <span className="text-blue-400">3 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Boxes className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-blue-400">Frameworks & Libraries</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiSpring className="text-blue-400" size={20} />
                      <span className="font-medium">Spring Boot</span>
                    </div>
                    <span className="text-blue-400">7 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiReact className="text-blue-400" size={20} />
                      <span className="font-medium">React</span>
                    </div>
                    <span className="text-blue-400">4 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiAngular className="text-blue-400" size={20} />
                      <span className="font-medium">Angular</span>
                    </div>
                    <span className="text-blue-400">3 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiHibernate className="text-blue-400" size={20} />
                      <span className="font-medium">Hibernate</span>
                    </div>
                    <span className="text-blue-400">6 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-blue-400">Cloud & DevOps</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiAmazonwebservices className="text-blue-400" size={20} />
                      <span className="font-medium">AWS</span>
                    </div>
                    <span className="text-blue-400">5 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiDocker className="text-blue-400" size={20} />
                      <span className="font-medium">Docker</span>
                    </div>
                    <span className="text-blue-400">4 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiJenkins className="text-blue-400" size={20} />
                      <span className="font-medium">Jenkins</span>
                    </div>
                    <span className="text-blue-400">5 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiKubernetes className="text-blue-400" size={20} />
                      <span className="font-medium">Kubernetes</span>
                    </div>
                    <span className="text-blue-400">3 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-blue-400">Databases & Tools</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiPostgresql className="text-blue-400" size={20} />
                      <span className="font-medium">PostgreSQL</span>
                    </div>
                    <span className="text-blue-400">6 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiAmazondynamodb className="text-blue-400" size={20} />
                      <span className="font-medium">DynamoDB</span>
                    </div>
                    <span className="text-blue-400">4 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiElasticsearch className="text-blue-400" size={20} />
                      <span className="font-medium">Elasticsearch</span>
                    </div>
                    <span className="text-blue-400">4 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <SiApachekafka className="text-blue-400" size={20} />
                      <span className="font-medium">Apache Kafka</span>
                    </div>
                    <span className="text-blue-400">5 years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-blue-500 pb-2 inline-block">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold">Bachelor of Technology</h4>
                <p className="text-blue-400">Information Technology</p>
                <p className="text-gray-400">CVR College of Engineering, 2016</p>
              </div>
            </div>
            
            {/* Certifications & Awards */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={20} className="text-blue-400" />
                    <h4 className="text-lg font-bold">AWS Certified Developer - Associate</h4>
                  </div>
                  <p className="text-gray-400">2021</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={20} className="text-blue-400" />
                    <h4 className="text-lg font-bold">Pat On Back Award</h4>
                  </div>
                  <p className="text-gray-400">Received twice in 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-blue-500 pb-2 inline-block">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities and challenges in the software development space. 
                Feel free to reach out through any of the following channels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-300">sarathc.rox@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-gray-300">linkedin.com/in/sarath77</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-300">+91 7207370470</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y- 4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Sarath Chandra</h2>
              <p className="text-gray-400">Senior Associate Platform L1</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sarath77/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sarathc.rox@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Sarath Chandra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;