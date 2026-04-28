

// import React from 'react';
// import { motion } from 'framer-motion';

// // import HeroSection from './components/Sections/heroSection/HeroSection';
// // import FeaturedProperties from './components/Sections/featuredProperties/FeaturedProperties';
// // import ServicesPreview from './components/Sections/servicesPreview/ServicesPreview';
// // import WhyChooseUs from './components/Sections/whyChooseUs/WhyChooseUs';
// // import Testimonials from './components/Sections/testimonials/Testimonials';
// // import NeighborhoodSpotlight from './components/Sections/neighborhoodSpotlight/NeighborhoodSpotlight';
// // import LatestListings from './components/Sections/latestListings/LatestListings';
// // import TeamSection from './components/Sections/teamSection/TeamSection';


// import HeroSection from '../components/Sections/heroSection/HeroSection';
// import FeaturedProperties from '../components/Sections/featuredProperties/FeaturedProperties';
// import ServicesPreview from '../components/Sections/servicesPreview/ServicesPreview';
// import WhyChooseUs from '../components/Sections/whyChooseUs/WhyChooseUs';
// import Testimonials from '../components/Sections/testimonials/Testimonials';
// import NeighborhoodSpotlight from '../components/Sections/neighborhoodSpotlight/NeighborhoodSpotlight';
// import LatestListings from '../components/Sections/latestListings/LatestListings';
// import TeamSection from '../components/Sections/teamSection /TeamSection';
// import BlogPreview from '../components/Sections/BlogPreview/BlogPreview';
// // import CTASection from '../components/Sections/About/CTASection/CTASection';
// import ContactCTA from '../components/Sections/ContactCTA/ContactCTA';

// // import '../HomePage.css';

// const HomePage = () => {
//   return (
//     <>
 
//       <HeroSection />
//       <FeaturedProperties />
//       <ServicesPreview />
//       <WhyChooseUs />
//       <Testimonials />
//       <NeighborhoodSpotlight />
//       <LatestListings />
//       <TeamSection />
//       <BlogPreview/>
//       <ContactCTA/>
 
//     </>
//   );

// };

// export default HomePage;











import React from 'react';
import HeroSection from '../components/Sections/heroSection/HeroSection';
import FeaturedProperties from '../components/Sections/featuredProperties/FeaturedProperties';
import ServicesPreview from '../components/Sections/servicesPreview/ServicesPreview';
import WhyChooseUs from '../components/Sections/whyChooseUs/WhyChooseUs';
import Testimonials from '../components/Sections/testimonials/Testimonials';
import NeighborhoodSpotlight from '../components/Sections/neighborhoodSpotlight/NeighborhoodSpotlight';
import LatestListings from '../components/Sections/latestListings/LatestListings';
import BlogPreview from '../components/Sections/BlogPreview/BlogPreview';
import ContactCTA from '../components/Sections/ContactCTA/ContactCTA';
// import TeamSection from '../components/Sections/About/TeamSection/TeamSection';
import TeamSection from '../components/Sections/teamSection /TeamSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <NeighborhoodSpotlight />
      <LatestListings />
      <TeamSection />
      <BlogPreview />
      <ContactCTA />
    </>
  );
};

export default HomePage;
