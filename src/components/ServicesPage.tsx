import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Globe, BarChart, Shield, UserPlus, Cloud, Database, Cpu, LineChart, AtSign, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  delay?: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, imageSrc, link, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 "
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-conduent-navy mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* <Link
          to={link}
          className="inline-flex items-center text-conduent-blue font-medium hover:text-conduent-navy"
        >
          Learn More
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link> */}
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-conduent-navy text-white py-10">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold my-6 text-[#006B81]">
              Purpose-Built Solutions for the BFSI Sector
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#006B81] ">
              Empower, streamline, and scale — Whether you’re processing insurance claims,
              onboarding new customers, handling KYC verifications, or managing compliance workflows,
              our Human + RPA + Automation-powered solutions turn complexity into clarity.
              <br />
              At <strong>Suffix Process Solutions Pvt. Ltd.</strong>, we blend skilled manpower,
              intelligent automation, and deep domain expertise to support General Insurance, Life Insurance,
              and Banking organizations. The result? Greater accuracy, speed, and cost-efficiency —
              all while maintaining regulatory compliance and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-4 bg-gray-50 mx-6">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <IndustryCard
              title="Human-Driven Process Solutions"
              description="At Suffix Process Solutions Pvt. Ltd., we provide industry-trained 
              manpower tailored specifically for BFSI operational workflows. Our teams ensure .
              high-speed, accurate, and compliant execution through strict SLA adherence and 
              real-time monitoring—freeing you to focus on strategic growth.
              To support diverse risk frameworks and regulatory mandates, we offer flexible delivery models"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABYAkRpgtHQfxP-kCI1UAScN3sL4o8d4e6Q&s"
              link="#"
              delay={0}
            />
            <IndustryCard
              title="RPA Solutions"
              description="Our Robotic Process Automation (RPA) services streamline manual, 
              rule-based, and time-consuming tasks across insurance and banking functions. 
              From data capture and validation to form updates and system integrations, our 
              attended and unattended bots operate 24/7—minimizing human error, reducing 
              turnaround times, and maximizing process efficiency."
              imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFxfaWlva6gmNU3NAp0cT4ez6I06bDhB0EUMUf-fwMObhVu1fZ"
              link="#"
              delay={1}
            />
            <IndustryCard
              title="Automation Tools"
              description="Our intelligent automation tools harness AI, NLP, and advanced 
              rule-based engines to deliver capabilities far beyond traditional OCR. Whether 
              it’s extracting key data from income documents, KYC records, medical reports, 
              proposal forms, or any document central to your operations, our solutions enable 
              faster compliance checks, real-time verification, and structured, audit-ready 
              reporting. By minimizing manual intervention, we help you accelerate operational 
              efficiency and advance your digital transformation goals"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstQROkO5kuJuGD8sdQknsZbYEPZRMFzjacg&s"
              link="/industries/government"
              delay={2}
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-conduent-navy text-white py-10">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6 text-[#006B81]">
            Move your organization ahead
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#006B81] ">
            Every day Suffix helps improve processes, interactions and outcomes for our 
            clients and the millions of people who count on them. It’s why we’re trusted 
            by some of the world’s largest brands and government agencies and consistently 
            recognized by leading analyst firms and publications.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;