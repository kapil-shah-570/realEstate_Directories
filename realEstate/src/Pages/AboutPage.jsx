import React from 'react';
import HeroSection from '../components/Sections/About/HeroSection/HeroSection';
import StorySection from '../components/Sections/About/StorySection/StorySection';
import MissionVisionSection from '../components/Sections/About/MissionVisionSection/MissionVisionSection';
import CoreValuesSection from '../components/Sections/About/CoreValuesSection/CoreValuesSection';
import TeamSection from '../components/Sections/About/TeamSection/TeamSection';
// import TeamSection from '../components/Sections/teamSection /TeamSection';
import AchievementsSection from '../components/Sections/About/AchievementsSection/AchievementsSection';
import CTASection from '../components/Sections/About/CTASection/CTASection';


import './AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about-page">
      <HeroSection />
      <div className="container">
        <StorySection />
        <MissionVisionSection />
        <CoreValuesSection />
        <TeamSection />

        <AchievementsSection />
        <CTASection />
      </div>
    </section>
  );
};

export default AboutPage;