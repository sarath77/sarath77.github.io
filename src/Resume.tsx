import React from 'react';
import './Resume.css';

function getExperienceYears(): number {
  const start = new Date(2017, 0);
  const now = new Date();
  return Math.floor((now.getTime() - start.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
}

function Resume() {
  const years = getExperienceYears();

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="ats-resume">
      {/* Download Button - hidden in print */}
      <div className="no-print" style={{
        position: 'fixed', top: 20, right: 20, zIndex: 50,
        display: 'flex', gap: '12px', alignItems: 'center'
      }}>
        <a href="/" style={{
          padding: '10px 24px', background: '#374151', color: '#fff',
          border: 'none', borderRadius: '6px', cursor: 'pointer',
          fontSize: '14px', fontWeight: 600, textDecoration: 'none'
        }}>← Portfolio</a>
        <button onClick={handleDownload} style={{
          padding: '10px 24px', background: '#2563eb', color: '#fff',
          border: 'none', borderRadius: '6px', cursor: 'pointer',
          fontSize: '14px', fontWeight: 600
        }}>Download PDF</button>
      </div>

      {/* Header */}
      <header className="ats-header">
        <h1>Vankadaru Raja Sarath Chandra</h1>
        <p className="ats-title">Senior Full Stack Developer</p>
        <div className="ats-contact">
          <span>📞 +91 7207370470</span>
          <span className="ats-sep">|</span>
          <span>✉️ sarathc.rox@gmail.com</span>
          <span className="ats-sep">|</span>
          <span>🔗 linkedin.com/in/sarath77</span>
        </div>
      </header>

      {/* Summary */}
      <section className="ats-section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
          Java Full Stack Developer and AWS Certified Developer – Associate with close to {years} years of experience
          in developing web-based applications. Strengths in Java/J2EE Technologies, Spring Boot, Microservices,
          RESTful web services, Hibernate, React, and Apache Kafka. Good knowledge of Banking, Asset Management,
          and E-Commerce platforms. Experienced in leveraging AI for performance optimization, achieving up to
          7x improvements. Team player with strong problem-solving, communication, and analytical skills.
        </p>
      </section>

      {/* Skills */}
      <section className="ats-section">
        <h2>TECHNICAL SKILLS</h2>
        <table className="ats-skills-table">
          <tbody>
            <tr>
              <td className="ats-skill-label">Languages</td>
              <td>Java (8/11/21), JavaScript, TypeScript, Python, SQL</td>
            </tr>
            <tr>
              <td className="ats-skill-label">Frameworks</td>
              <td>Spring Boot, Spring Cloud, Spring Security, Spring Data JPA, Spring Batch, Hibernate, React, Angular, Play/Akka</td>
            </tr>
            <tr>
              <td className="ats-skill-label">Architecture</td>
              <td>Microservices, RESTful APIs, Event-Driven Architecture</td>
            </tr>
            <tr>
              <td className="ats-skill-label">Cloud & DevOps</td>
              <td>AWS (EKS, S3, CloudFront, Route 53, Lambda, SNS, SQS, DynamoDB), Terraform, Docker, Kubernetes, Jenkins, Git, Shell Scripting</td>
            </tr>
            <tr>
              <td className="ats-skill-label">Data & Messaging</td>
              <td>Apache Kafka, Oracle, PostgreSQL, Snowflake, Cassandra, Elasticsearch, Redis, Splunk, DynamoDB, GBQ, Firestore</td>
            </tr>
            <tr>
              <td className="ats-skill-label">Tools & Other</td>
              <td>Kong API Gateway, CyberArk, Maven, Gradle, SBT, JUnit, Mockito, Drools, Apache POI, High Charts</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Work Experience */}
      <section className="ats-section">
        <h2>WORK EXPERIENCE</h2>

        {/* Ideam Technologies */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div>
              <strong>Senior Full Stack Developer</strong> — Ideam Technologies
            </div>
            <div className="ats-date">April 2025 – Present</div>
          </div>

          <div className="ats-project">
            <p className="ats-project-title">Project: Asset Management Portal (Client: Nuveen)</p>
            <ul>
              <li>Migrated legacy asset management portal applications to modern Spring Boot and React architecture.</li>
              <li>Leveraged AI to develop Benchmark Reconciliation project in under 3 months, achieving up to 7x performance optimization by identifying Oracle stored procedure bottlenecks and query optimizations.</li>
              <li>Handled end-to-end application development to deployment, including infrastructure provisioning using AWS EKS, S3, CloudFront, and Terraform.</li>
              <li>Configured Kong API Gateway, CyberArk secrets management, and Splunk monitoring with custom alerts.</li>
            </ul>
            <p className="ats-tech">Technologies: Java 21, Spring Boot, Microservices, React, AWS (EKS, S3, CloudFront, Route 53), Terraform, Oracle, Splunk, Kong API Gateway</p>
          </div>

          <div className="ats-project">
            <p className="ats-project-title">Project: Fraud Analytics Platform (Client: TIAA)</p>
            <ul>
              <li>Developed Kafka consumers to process fraud analytics data, transforming and storing in Oracle DB.</li>
              <li>Developed reconciliation feature to identify missing data in DB using Splunk API.</li>
              <li>Developed external API call failure retry and email notification service.</li>
              <li>Developed schedulers to clean up data.</li>
            </ul>
            <p className="ats-tech">Technologies: Java, Spring Boot, Microservices, Apache Kafka, Oracle DB, Splunk API, RESTful Services</p>
          </div>
        </div>

        {/* Publicis Sapient */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div>
              <strong>Senior Associate, Platform Level 1</strong> — Publicis Sapient
            </div>
            <div className="ats-date">September 2021 – April 2025</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">Project: Goldman Sachs Marcus Highline – Quantum Core</p>
            <ul>
              <li>Designed and developed APIs to facilitate efficient data transfer of transactions, incorporating new validations to ensure data integrity.</li>
              <li>Utilized React to develop and maintain user interfaces for the Quantum ETL platform.</li>
              <li>Engineered a notification service for the timely delivery of compliance reports.</li>
              <li>Developed Snowflake queries to proactively identify and address compliance issues.</li>
            </ul>
            <p className="ats-tech">Technologies: Java, Spring Boot, Microservices, React, Snowflake, GBQ, Drools, REST API, Gradle, Sybase, Firestore</p>
          </div>
        </div>

        {/* EPAM */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div>
              <strong>Full Stack Web Developer</strong> — EPAM Systems
            </div>
            <div className="ats-date">July 2019 – September 2021</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">Project: MasterCard Payment Gateway Services</p>
            <ul>
              <li>Developed end-to-end functionality for saving searches and reconciliation feature for orders.</li>
              <li>Was part of Spring and Bootstrap upgrade and improving password validations.</li>
            </ul>
            <p className="ats-tech">Technologies: Java, REST API, PostgreSQL, Cassandra, Spring, Microservices, Hibernate, React, Maven</p>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">Project: Culture of Togetherness</p>
            <ul>
              <li>Designed and developed end-to-end applications from frontend, backend to deployment.</li>
              <li>Integrated EPAM SSO with Spring Security, Kafka, and Jenkins for CI/CD pipeline.</li>
            </ul>
            <p className="ats-tech">Technologies: Java, Spring Frameworks, Apache Kafka, ReactJs, High Charts, Jenkins, Maven, PostgreSQL</p>
          </div>
        </div>

        {/* Verizon */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div>
              <strong>Microservices Developer</strong> — Verizon Sourcing LLC
            </div>
            <div className="ats-date">February 2019 – July 2019</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">Project: Agent E-Commerce</p>
            <ul>
              <li>Primary work focused on maintaining ecommerce applications and bug fixes in Agent E-commerce portal.</li>
            </ul>
            <p className="ats-tech">Technologies: Java 8, Play/Akka Frameworks, Microservices, RESTful Web Services, Redis, Elasticsearch, SBT</p>
          </div>
        </div>

        {/* TCS */}
        <div className="ats-job">
          <div className="ats-job-header">
            <div>
              <strong>Microservices Developer</strong> — Tata Consultancy Services
            </div>
            <div className="ats-date">January 2017 – January 2019</div>
          </div>
          <div className="ats-project">
            <p className="ats-project-title">Project: Bose Corporation (BOPIS)</p>
            <ul>
              <li>Part of a new team working on designing and developing services from ground-up using Microservices, Spring Boot and AWS.</li>
              <li>Consumed data from Apache Kafka and performed RESTful service calls to other Microservices.</li>
              <li>Configured S3 to send status change alerts to SNS and read data from S3 bucket to store in DynamoDB.</li>
            </ul>
            <p className="ats-tech">Technologies: Java 8, Spring Boot, Microservices, Apache Kafka, AWS (DynamoDB, SNS, S3), Kong API, Docker, Maven, RESTful Web Services, Mesos, Marathon</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="ats-section">
        <h2>EDUCATION</h2>
        <div className="ats-job-header">
          <div>
            <strong>Bachelor of Technology</strong>, Information Technology
          </div>
          <div className="ats-date">2016</div>
        </div>
        <p>CVR College of Engineering</p>
      </section>

      {/* Certifications */}
      <section className="ats-section">
        <h2>CERTIFICATIONS & AWARDS</h2>
        <ul>
          <li><strong>AWS Certified Developer – Associate</strong> (2021)</li>
          <li><strong>Pat On Back Award</strong> — Received twice (2021)</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
