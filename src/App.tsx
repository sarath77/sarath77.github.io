import { exportResumeToPDF } from './exportPDF';
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

function getExperience() {
  const start = new Date(2017, 0); // January 2017
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return months > 0 ? `${years}+ years ${months} months` : `${years}+ years`;
}

function App() {
  const experience = getExperience();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="resume">

      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm no-print">
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
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center no-print">
              <span className="text-6xl font-bold">SC</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Sarath Chandra</h1>
              <h2 className="text-2xl text-blue-400 mb-2">Senior Full Stack Developer</h2>
              {/* Contact info visible only in PDF export */}
              <div className="hidden print-only mb-4">
                <p className="text-gray-300 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5"><Phone size={14} /> +91 7207370470</span>
                  <span className="flex items-center gap-1.5"><Mail size={14} /> sarathc.rox@gmail.com</span>
                  <span className="flex items-center gap-1.5"><Linkedin size={14} /> linkedin.com/in/sarath77</span>
                </p>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Dedicated Java Full Stack Developer and AWS Certified Developer - Associate with {experience} of experience in developing enterprise 
                web applications. Expertise in Java/J2EE, Spring Boot, Microservices, RESTful web services, Hibernate, Angular, and Apache Kafka.
              </p>
              <div className="flex space-x-4 no-print">
                <a href="#contact" className="inline-flex items-center justify-center h-12 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-md font-medium transition-colors">
                  Contact Me
                </a>
                <a href="#experience" className="inline-flex items-center justify-center h-12 border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 rounded-md font-medium transition-colors">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Web View) & Technical Skills Summary (PDF View) */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          
          {/* Visible only on Web */}
          <div className="no-print">
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
                <button
                  onClick={() => exportResumeToPDF()}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors border border-blue-400 px-3 py-1 rounded-md"
                >
                  <FileText size={20} /> Export PDF
                </button>
            </div>
          </div>

          {/* Visible only on Export PDF */}
          <div className="hidden print-only w-full">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Binary size={20} />
                  <h3 className="text-lg font-bold">Languages & Core</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><FaJava size={14} className="text-blue-400 shrink-0"/> <span className="">Java (8y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiJavascript size={14} className="text-blue-400 shrink-0"/> <span className="">JS/TS (6y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiPython size={14} className="text-blue-400 shrink-0"/> <span className="">Python (3y)</span></div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Boxes size={20} />
                  <h3 className="text-lg font-bold">Frameworks & Libraries</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiSpring size={14} className="text-blue-400 shrink-0"/> <span className="">Spring Boot (7y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiReact size={14} className="text-blue-400 shrink-0"/> <span className="">React (4y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiAngular size={14} className="text-blue-400 shrink-0"/> <span className="">Angular (3y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiHibernate size={14} className="text-blue-400 shrink-0"/> <span className="">Hibernate (6y)</span></div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Cloud size={20} />
                  <h3 className="text-lg font-bold">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiAmazonwebservices size={14} className="text-blue-400 shrink-0"/> <span className="">AWS (5y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiDocker size={14} className="text-blue-400 shrink-0"/> <span className="">Docker (4y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiJenkins size={14} className="text-blue-400 shrink-0"/> <span className="">Jenkins (5y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiKubernetes size={14} className="text-blue-400 shrink-0"/> <span className="">Kubernetes (3y)</span></div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Database size={20} />
                  <h3 className="text-lg font-bold">Databases & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiPostgresql size={14} className="text-blue-400 shrink-0"/> <span className="">PostgreSQL (6y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiAmazondynamodb size={14} className="text-blue-400 shrink-0"/> <span className="">DynamoDB (4y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiElasticsearch size={14} className="text-blue-400 shrink-0"/> <span className="">Elasticsearch (4y)</span></div>
                  <div className="inline-flex items-center justify-center gap-1.5 bg-gray-900 px-2.5 py-1.5 rounded-md text-sm text-gray-300 border border-gray-700 leading-none"><SiApachekafka size={14} className="text-blue-400 shrink-0"/> <span className="">Kafka (5y)</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-blue-500 pb-2 inline-block">Work Experience</h2>
          
          <div className="space-y-12">
            {/* Ideam Technologies */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Senior Full Stack Developer</h3>
                <span className="text-blue-400">• Ideam Technologies</span>
              </div>
              <p className="text-gray-400 mb-4">April 2025 - Present</p>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Project: Asset Management Portal (Client: Nuveen)</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Migrated legacy asset management portal applications to modern Spring Boot and React architecture</li>
                    <li>Leveraged AI to develop Benchmark Reconciliation project in under 3 months, achieving up to 7x performance optimization by identifying Oracle stored procedure bottlenecks and query optimizations</li>
                    <li>Handled end-to-end application development to deployment, including infrastructure provisioning using AWS EKS, S3, CloudFront, and Terraform</li>
                    <li>Configured Kong API Gateway, CyberArk secrets management, and Splunk monitoring with custom alerts</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java 21</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring Boot</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">AWS EKS</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">S3</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">CloudFront</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Route 53</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Terraform</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Oracle</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Splunk</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Kong API</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Project: Fraud Analytics Platform (Client: TIAA)</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Developed Kafka consumers to process fraud analytics data, transforming and storing in Oracle DB</li>
                    <li>Developed reconciliation feature to identify missing data in DB using Splunk API</li>
                    <li>Developed external API call failure retry and email notification service</li>
                    <li>Developed schedulers to clean up data</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring Boot</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Apache Kafka</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Oracle DB</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Splunk API</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">RESTful Services</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Publicis Sapient */}
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">Senior Associate, Platform Level 1</h3>
                <span className="text-blue-400">• Publicis Sapient</span>
              </div>
              <p className="text-gray-400 mb-4">September 2021 - April 2025</p>
              <p className="text-gray-300 mb-4">Project: Goldman Sachs Marcus Highline - Quantum Core</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Designed and developed APIs to facilitate efficient data transfer of transactions, incorporating new validations to ensure data integrity</li>
                <li>Utilized React to develop and maintain user interfaces for the Quantum ETL platform</li>
                <li>Engineered a notification service for the timely delivery of compliance reports</li>
                <li>Developed Snowflake queries to proactively identify and address compliance issues</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring Boot</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Snowflake</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">GBQ</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Drools</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">REST API</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Gradle</span>
              </div>
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
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Developed end-to-end functionality for saving searches and reconciliation feature for orders</li>
                    <li>Was part of Spring and Bootstrap upgrade and improving password validations</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">REST API</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Postgres</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Cassandra</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Hibernate</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">React</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Project: Culture of Togetherness</p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Designed and developed end-to-end applications from frontend, backend to deployment</li>
                    <li>Integrated EPAM SSO with Spring Security, Kafka, and Jenkins for CI/CD pipeline</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Apache Kafka</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">ReactJs</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">High Charts</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Jenkins</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Postgres</span>
                  </div>
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
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Primary work focused on maintaining ecommerce applications and bug fixes in Agent E-commerce portal</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java 8</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Play Framework</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Akka</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">RESTful Services</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Redis</span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Elasticsearch</span>
              </div>
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
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Part of a new team working on designing and developing services from ground-up using Microservices, Spring Boot and AWS</li>
                    <li>Consumed data from Apache Kafka and performed RESTful service calls to other Microservices</li>
                    <li>Configured S3 to send status change alerts to SNS and read data from S3 bucket to store in DynamoDB</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Java 8</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Spring Boot</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Microservices</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Apache Kafka</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">AWS</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">DynamoDB</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Docker</span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">RESTful Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50 no-print">
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
      <section id="contact" className="py-20 px-4 bg-gray-800/50 no-print">
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
              <p className="text-gray-400">Senior Full Stack Developer</p>
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