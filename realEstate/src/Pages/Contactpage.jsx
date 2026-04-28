import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeader from '../components/Sections/ContactPage/HeroHeader/HeroHeader';
import QuickInfo from '../components/Sections/ContactPage/QuickInfo/QuickInfo';
import DepartmentTabs from '../components/Sections/ContactPage/DepartmentTabs/DepartmentTabs';
import ContactForm from '../components/Sections/ContactPage/ContactForm/ContactForm';
import MapSection from '../components/Sections/ContactPage/MapSection/MapSection';
import AgentTeam from '../components/Sections/ContactPage/AgentTeam/AgentTeam';
import FAQSection from '../components/Sections/ContactPage/FAQSection/FAQSection';
import OfficeHours from '../components/Sections/ContactPage/OfficeHours/OfficeHours';
import CTASection from '../components/Sections/ContactCTA/ContactCTA';

const ContactPage = () => {
  const [activeDepartment, setActiveDepartment] = useState('buyer');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroHeader />
      <QuickInfo />

      {/* Form + Map side by side */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <DepartmentTabs
                activeDepartment={activeDepartment}
                setActiveDepartment={setActiveDepartment}
              />
              <ContactForm department={activeDepartment} />
            </div>
            <div className="h-full min-h-[500px]">
              <MapSection />
            </div>
          </div>
        </div>
      </section>

      <AgentTeam />
      <FAQSection />
      <OfficeHours />
      <CTASection />
    </motion.div>
  );
};

export default ContactPage;
