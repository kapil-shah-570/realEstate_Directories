// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Layout from './Layout/Layout';
// import DashboardLayout from './Layout/DashboardLayout';
// import SimpleIntroSection from './components/Global/IntroSection/SimpleIntroSection';

// //pages
// import HomePage from './Pages/HomePage';
// import AboutPage from './Pages/AboutPage';
// import Servicespage from './Pages/Servicespage';
// import ContactPage from './Pages/Contactpage';
// import ProductPage from './Pages/ProductPage';
// import ClientsPage from './Pages/ClientPage';
// import SignupPage from './Pages/SignupPage';
// import LoginPage from './Pages/LoginPage';
// import DashboardOverviewPage from './Pages/dashboard/DashboardOverviewPage';
// import DashboardAnalyticsPage from './Pages/dashboard/DashboardAnalyticsPage';
// import DashboardListingsPage from './Pages/dashboard/DashboardListingsPage';
// import DashboardAddPropertyPage from './Pages/dashboard/DashboardAddPropertyPage';
// import DashboardLikesPage from './Pages/dashboard/DashboardLikesPage';
// import DashboardReportsPage from './Pages/dashboard/DashboardReportsPage';
// import DashboardBlogsPage from './Pages/dashboard/DashboardBlogsPage';
// import DashboardAgentsPage from './Pages/dashboard/DashboardAgentsPage';
// import DashboardContactsPage from './Pages/dashboard/DashboardContactsPage';
// import DashboardCallsPage from './Pages/dashboard/DashboardCallsPage';
// import DashboardMessagesPage from './Pages/dashboard/DashboardMessagesPage';
// import DashboardSettingsPage from './Pages/dashboard/DashboardSettingsPage';
// import GetStartedPage from './Pages/GetStartedPage';
// import ListingsPage from './Pages/ListingsPage';
// import ListingDetailPage from './Pages/ListingDetailPage';

// import ForgotPasswordPage from './Pages/ForgotPasswordPage';
// import GoogleAuth from './components/auth/GoogleAuth';
// import FacebookAuth from './components/auth/FacebookAuth';
// import GitHubAuth from './components/auth/GitHubAuth';
// import AppleAuth from './components/auth/AppleAuth';

// import './App.css';

// function App() {
//   // Temporarily disable intro to check if main content loads
//   const [showMainContent, setShowMainContent] = useState(true);

//   return (
//     <Router>
//       <div className="App">
//         {/* Main App */}
//         {showMainContent && (
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<HomePage />} />
//               <Route path="about" element={<AboutPage />} />
//               <Route path="services" element={<Servicespage />} />
//               <Route path="products" element={<ProductPage />} />
//               <Route path="clients" element={<ClientsPage />} />
//               <Route path="contact" element={<ContactPage />} />
//               <Route path="signup" element={<SignupPage />} />
//               <Route path="login" element={<LoginPage />} />
//               <Route path="get-started" element={<GetStartedPage />} />
//               <Route path="listings" element={<ListingsPage />} />
//               <Route path="listing/:id" element={<ListingDetailPage />} />
//             </Route>
//             <Route path="dashboard/*" element={<DashboardLayout />}>
//               <Route index element={<DashboardOverviewPage />} />
//               <Route path="analytics" element={<DashboardAnalyticsPage />} />
//               <Route path="listings" element={<DashboardListingsPage />} />
//               <Route path="add-property" element={<DashboardAddPropertyPage />} />
//               <Route path="likes" element={<DashboardLikesPage />} />
//               <Route path="reports" element={<DashboardReportsPage />} />
//               <Route path="blogs" element={<DashboardBlogsPage />} />
//               <Route path="agents" element={<DashboardAgentsPage />} />
//               <Route path="contacts" element={<DashboardContactsPage />} />
//               <Route path="calls" element={<DashboardCallsPage />} />
//               <Route path="messages" element={<DashboardMessagesPage />} />
//               <Route path="settings" element={<DashboardSettingsPage />} />
//             </Route>
//             <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//             <Route path="/auth/google" element={<GoogleAuth />} />
//             <Route path="/auth/facebook" element={<FacebookAuth />} />
//             <Route path="/auth/github" element={<GitHubAuth />} />
//             <Route path="/auth/apple" element={<AppleAuth />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;












import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import DashboardLayout from './Layout/DashboardLayout';
import SimpleIntroSection from './components/Global/IntroSection/SimpleIntroSection';

// pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Servicespage from './Pages/Servicespage';
import ContactPage from './Pages/Contactpage';
import ProductPage from './Pages/ProductPage';
import ClientsPage from './Pages/ClientPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import GetStartedPage from './Pages/GetStartedPage';

import DashboardOverviewPage from './Pages/dashboard/DashboardOverviewPage';
import DashboardAnalyticsPage from './Pages/dashboard/DashboardAnalyticsPage';
import DashboardListingsPage from './Pages/dashboard/DashboardListingsPage';
import DashboardAddPropertyPage from './Pages/dashboard/DashboardAddPropertyPage';
import DashboardLikesPage from './Pages/dashboard/DashboardLikesPage';
import DashboardReportsPage from './Pages/dashboard/DashboardReportsPage';
import DashboardBlogsPage from './Pages/dashboard/DashboardBlogsPage';
import DashboardAgentsPage from './Pages/dashboard/DashboardAgentsPage';
import DashboardContactsPage from './Pages/dashboard/DashboardContactsPage';
import DashboardCallsPage from './Pages/dashboard/DashboardCallsPage';
import DashboardMessagesPage from './Pages/dashboard/DashboardMessagesPage';
import DashboardSettingsPage from './Pages/dashboard/DashboardSettingsPage';

import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import BlogPage from './Pages/BlogPage';
import BlogPost from './Pages/BlogPost';
import FeaturedPropertyDetail from './Pages/FeaturedPropertyDetail';
import ProductDetailPage from './Pages/ProductDetailPage';
import ClientStoryPage from './Pages/ClientStoryPage';
import ListingDetailPage from './Pages/ListingDetailPage';
import ListingsPage from './Pages/ListingsPage';
import GoogleAuth from './components/auth/GoogleAuth';
import FacebookAuth from './components/auth/FacebookAuth';
import GitHubAuth from './components/auth/GitHubAuth';
import AppleAuth from './components/auth/AppleAuth';

import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMainContent(true);
  };

  return (
    <Router>
      <div className="App">
        {showIntro && <SimpleIntroSection onComplete={handleIntroComplete} />}
        {showMainContent && (
          <Routes>

            {/* Public Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<Servicespage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="get-started" element={<GetStartedPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="listings" element={<ListingsPage />} />
              <Route path="listing/:id" element={<ListingDetailPage />} />
              <Route path="clients/:type/:id" element={<ClientStoryPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="featured/:id" element={<FeaturedPropertyDetail />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:id" element={<BlogPost />} />
            </Route>

            {/* Auth Routes (outside dashboard) */}
            <Route path="/auth/google" element={<GoogleAuth />} />
            <Route path="/auth/facebook" element={<FacebookAuth />} />
            <Route path="/auth/github" element={<GitHubAuth />} />
            <Route path="/auth/apple" element={<AppleAuth />} />

            {/* Dashboard Layout */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverviewPage />} />
              <Route path="analytics" element={<DashboardAnalyticsPage />} />
              <Route path="listings" element={<DashboardListingsPage />} />
              <Route path="add-property" element={<DashboardAddPropertyPage />} />
              <Route path="likes" element={<DashboardLikesPage />} />
              <Route path="reports" element={<DashboardReportsPage />} />
              <Route path="blogs" element={<DashboardBlogsPage />} />
              <Route path="agents" element={<DashboardAgentsPage />} />
              <Route path="contacts" element={<DashboardContactsPage />} />
              <Route path="calls" element={<DashboardCallsPage />} />
              <Route path="messages" element={<DashboardMessagesPage />} />
              <Route path="settings" element={<DashboardSettingsPage />} />
            </Route>

          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;