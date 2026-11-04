import React from 'react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  ArrowLeft, 
  Download, 
  FileText, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award,
  Code2,
  Layers,
  Cloud,
  Database,
  Wrench,
  Printer
} from 'lucide-react';
import './Resume.css';

function getTechTagClass(tag: string): string {
  const t = tag.toLowerCase();
  // Languages -> lang (Blue)
  if (t.includes('java') || t.includes('javascript') || t.includes('typescript') || t.includes('python') || t === 'sql') {
    return 'ats-tag-lang';
  }
  // Frameworks & Libraries -> fw (Teal)
  if (t.includes('spring') || t.includes('react') || t.includes('angular') || t.includes('hibernate') || t.includes('play') || t.includes('akka')) {
    return 'ats-tag-fw';
  }
  // Cloud & DevOps -> cloud (Purple)
  if (t.includes('aws') || t.includes('s3') || t.includes('cloudfront') || t.includes('route 53') || t.includes('terraform') || t.includes('docker') || t.includes('kubernetes') || t.includes('jenkins') || t.includes('git') || t.includes('sns') || t.includes('sqs')) {
    return 'ats-tag-cloud';
  }
  // Data & Messaging -> data (Amber)
  if (t.includes('kafka') || t.includes('oracle') || t.includes('postgres') || t.includes('snowflake') || t.includes('cassandra') || t.includes('elastic') || t.includes('redis') || t.includes('splunk') || t.includes('dynamodb') || t.includes('gbq') || t.includes('firestore')) {
    return 'ats-tag-data';
  }
  // Tools & Architecture -> tool (Rose)
  return 'ats-tag-tool';
}

function Resume() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = 'Sarath_Chandra_Resume';
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <div className="ats-resume">
      {/* Floating action bar - hidden in print */}
      <div className="ats-action-bar no-print">
        <a href="/" className="ats-btn ats-btn-secondary">
          <ArrowLeft size={15} /> Portfolio
        </a>
        <a 
          href="/Sarath_Chandra_Resume.pdf" 
          download="Sarath_Chandra_Resume.pdf" 
          className="ats-btn ats-btn-primary"
          title="Instant 1-click download of the 2-page PDF"
        >
          <Download size={15} /> Download PDF
        </a>
        <button 
          onClick={handlePrint} 
          className="ats-btn ats-btn-outline" 
          title="Print directly or save via browser print dialog"
        >
          <Printer size={15} /> Print
        </button>
      </div>

      {/* Header */}
      <header className="ats-header">
        <h1>Vankadaru Raja Sarath Chandra</h1>
        <p className="ats-title">Senior Full Stack Developer</p>
        <div className="ats-contact">
          <a href="tel:+917207370470" className="ats-contact-link">
            <Phone size={13} className="ats-contact-icon" /> +91 7207370470
          </a>
          <span className="ats-dot">•</span>
          <a href="mailto:sarathc.rox@gmail.com" className="ats-contact-link">
            <Mail size={13} className="ats-contact-icon" /> sarathc.rox@gmail.com
          </a>
          <span className="ats-dot">•</span>
          <a href="https://linkedin.com/in/sarath77" target="_blank" rel="noopener noreferrer" className="ats-contact-link">
            <Linkedin size={13} className="ats-contact-icon" /> linkedin.com/in/sarath77
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="ats-section">
        <h2>
          <FileText size={16} className="ats-section-icon" /> Professional Summary
        </h2>
        <p className="ats-summary-text">
          Java Full Stack Developer and <strong>AWS Certified Developer – Associate</strong> with close to <strong>10 years</strong> of experience
          in architecting, developing, and deploying enterprise web-based applications. Core expertise in <strong>Java/J2EE</strong>, <strong>Spring Boot</strong>, <strong>Microservices</strong>,
          <strong>RESTful APIs</strong>, <strong>Hibernate</strong>, <strong>React</strong>, and <strong>Apache Kafka</strong>. Strong domain knowledge in Banking, Asset Management,
          and E-Commerce platforms. Proven track record in leveraging AI tools for performance optimization, achieving up to <strong>7x performance gains</strong>. Team player with strong problem-solving, communication, and analytical skills.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="ats-section">
        <h2>
          <Cpu size={16} className="ats-section-icon" /> Technical Skills
        </h2>
        <div className="ats-skills-grid">
          {/* Languages */}
          <div className="ats-skill-card ats-skill-card-lang">
            <div className="ats-skill-card-label">
              <Code2 size={13} /> Languages
            </div>
            <div className="ats-skill-tags">
              {['Java (8/11/21)', 'JavaScript', 'TypeScript', 'Python', 'SQL'].map(s => (
                <span key={s} className="ats-tag ats-tag-lang">{s}</span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="ats-skill-card ats-skill-card-fw">
            <div className="ats-skill-card-label">
              <Layers size={13} /> Frameworks & Libraries
            </div>
            <div className="ats-skill-tags">
              {['Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'Hibernate', 'React', 'Angular', 'Play/Akka'].map(s => (
                <span key={s} className="ats-tag ats-tag-fw">{s}</span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="ats-skill-card ats-skill-card-cloud">
            <div className="ats-skill-card-label">
              <Cloud size={13} /> Cloud & DevOps
            </div>
            <div className="ats-skill-tags">
              {['AWS (EKS, S3, CloudFront, Route 53)', 'AWS (Lambda, SNS, SQS, DynamoDB)', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'Git'].map(s => (
                <span key={s} className="ats-tag ats-tag-cloud">{s}</span>
              ))}
            </div>
          </div>

          {/* Data & Messaging */}
          <div className="ats-skill-card ats-skill-card-data">
            <div className="ats-skill-card-label">
              <Database size={13} /> Data & Messaging
            </div>
            <div className="ats-skill-tags">
              {['Apache Kafka', 'Oracle', 'PostgreSQL', 'Snowflake', 'Cassandra', 'Elasticsearch', 'Redis', 'Splunk', 'DynamoDB', 'GBQ', 'Firestore'].map(s => (
                <span key={s} className="ats-tag ats-tag-data">{s}</span>
              ))}
            </div>
          </div>

          {/* Tools & Architecture */}
          <div className="ats-skill-card ats-skill-card-tool">
            <div className="ats-skill-card-label">
              <Wrench size={13} /> Tools & Architecture
            </div>
            <div className="ats-skill-tags">
              {['Microservices', 'RESTful APIs', 'Kong API Gateway', 'CyberArk', 'Maven', 'Gradle', 'SBT', 'JUnit', 'Mockito', 'Drools', 'Apache POI'].map(s => (
                <span key={s} className="ats-tag ats-tag-tool">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="ats-section">
        <h2>
          <Briefcase size={16} className="ats-section-icon" /> Work Experience
        </h2>

        {/* 1. Ideam Technologies (Page 1) */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div className="ats-job-title">
              <strong>Senior Full Stack Developer</strong>
              <span className="ats-company">Ideam Technologies</span>
            </div>
            <div className="ats-date">April 2025 – Present</div>
          </div>

          <div className="ats-project">
            <p className="ats-project-title">▸ Asset Management Portal — <span className="ats-client">Client: Nuveen</span></p>
            <ul>
              <li>Migrated legacy asset management portal applications to modern Spring Boot and React architecture.</li>
              <li>Leveraged AI to develop Benchmark Reconciliation project in under 3 months, achieving up to <strong>7x performance optimization</strong> by identifying Oracle stored procedure bottlenecks and query optimizations.</li>
              <li>Handled end-to-end application development to deployment, including infrastructure provisioning using AWS EKS, S3, CloudFront, and Terraform.</li>
              <li>Configured Kong API Gateway, CyberArk secrets management, and Splunk monitoring with custom alerts.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java 21', 'Spring Boot', 'Microservices', 'React', 'AWS EKS', 'S3', 'CloudFront', 'Route 53', 'Terraform', 'Oracle', 'Splunk', 'Kong API'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className="ats-project">
            <p className="ats-project-title">▸ Fraud Analytics Platform — <span className="ats-client">Client: TIAA</span></p>
            <ul>
              <li>Developed Kafka consumers to process fraud analytics data, transforming and storing in Oracle DB.</li>
              <li>Developed reconciliation feature to identify missing data in DB using Splunk API.</li>
              <li>Developed external API call failure retry and email notification service.</li>
              <li>Developed schedulers to clean up data.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java', 'Spring Boot', 'Microservices', 'Apache Kafka', 'Oracle DB', 'Splunk API', 'RESTful Services'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Publicis Sapient */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div className="ats-job-title">
              <strong>Senior Associate, Platform Level 1</strong>
              <span className="ats-company">Publicis Sapient</span>
            </div>
            <div className="ats-date">September 2021 – April 2025</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">▸ Goldman Sachs Marcus Highline — <span className="ats-client">Quantum Core</span></p>
            <ul>
              <li>Designed and developed APIs to facilitate efficient data transfer of transactions, incorporating new validations to ensure data integrity.</li>
              <li>Utilized React to develop and maintain user interfaces for the Quantum ETL platform.</li>
              <li>Engineered a notification service for the timely delivery of compliance reports.</li>
              <li>Developed Snowflake queries to proactively identify and address compliance issues.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java', 'Spring Boot', 'Microservices', 'React', 'Snowflake', 'GBQ', 'Drools', 'REST API', 'Gradle'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. EPAM */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div className="ats-job-title">
              <strong>Full Stack Web Developer</strong>
              <span className="ats-company">EPAM Systems</span>
            </div>
            <div className="ats-date">July 2019 – September 2021</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">▸ MasterCard Payment Gateway Services</p>
            <ul>
              <li>Developed end-to-end functionality for saving searches and reconciliation feature for orders.</li>
              <li>Was part of Spring and Bootstrap upgrade and improving password validations.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java', 'REST API', 'PostgreSQL', 'Cassandra', 'Spring', 'Microservices', 'Hibernate', 'React'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">▸ Culture of Togetherness</p>
            <ul>
              <li>Designed and developed end-to-end applications from frontend, backend to deployment.</li>
              <li>Integrated EPAM SSO with Spring Security, Kafka, and Jenkins for CI/CD pipeline.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java', 'Spring', 'Apache Kafka', 'ReactJs', 'High Charts', 'Jenkins', 'PostgreSQL'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Verizon */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div className="ats-job-title">
              <strong>Microservices Developer</strong>
              <span className="ats-company">Verizon Sourcing LLC</span>
            </div>
            <div className="ats-date">February 2019 – July 2019</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">▸ Agent E-Commerce</p>
            <ul>
              <li>Primary work focused on maintaining ecommerce applications and bug fixes in Agent E-commerce portal.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java 8', 'Play/Akka', 'Microservices', 'RESTful Services', 'Redis', 'Elasticsearch', 'SBT'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 5. TCS */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div className="ats-job-title">
              <strong>Microservices Developer</strong>
              <span className="ats-company">Tata Consultancy Services</span>
            </div>
            <div className="ats-date">January 2017 – January 2019</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">▸ Bose Corporation (BOPIS)</p>
            <ul>
              <li>Part of a new team working on designing and developing services from ground-up using Microservices, Spring Boot and AWS.</li>
              <li>Consumed data from Apache Kafka and performed RESTful service calls to other Microservices.</li>
              <li>Configured S3 to send status change alerts to SNS and read data from S3 bucket to store in DynamoDB.</li>
            </ul>
            <div className="ats-tech-tags">
              {['Java 8', 'Spring Boot', 'Microservices', 'Apache Kafka', 'AWS', 'DynamoDB', 'Docker', 'RESTful Services'].map(s => (
                <span key={s} className={`ats-tech-tag ${getTechTagClass(s)}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications side-by-side */}
      <div className="ats-two-col">
        <section className="ats-section">
          <h2>
            <GraduationCap size={16} className="ats-section-icon" /> Education
          </h2>
          <div className="ats-edu-card">
            <strong>Bachelor of Technology</strong> — Information Technology
            <br />
            <span className="ats-edu-detail">CVR College of Engineering • 2016</span>
          </div>
        </section>

        <section className="ats-section">
          <h2>
            <Award size={16} className="ats-section-icon" /> Certifications & Awards
          </h2>
          <ul className="ats-cert-list">
            <li><strong>AWS Certified Developer – Associate</strong> <span className="ats-cert-year">(2021)</span></li>
            <li><strong>Pat On Back Award</strong> — Received twice <span className="ats-cert-year">(2021)</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
