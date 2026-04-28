import React from 'react';
import { FaBuilding, FaChartLine, FaHandshake, FaHome, FaCity, FaStar } from 'react-icons/fa';

export const clientStories = [
  {
    id: 1,
    title: 'Global Finance Expansion',
    description: 'Secured three premium office locations across major cities, saving the client 15% on lease costs.',
    icon: <FaBuilding className="text-blue-600 text-3xl" />,
    metric: '15%',
    metricLabel: 'Cost Saved',
    client: 'Global Finance Inc.',
    category: 'Corporate relocation',
    fullText:
      'Global Finance Inc. needed to expand quickly across multiple metro areas.\n\nWe identified premium locations, negotiated favorable lease terms, and coordinated a phased move-in schedule to reduce downtime.\n\nThe result was a smoother expansion with stronger market visibility and a 15% reduction in occupancy costs.',
    highlights: ['3 premium office locations', '15% cost savings', 'Multi-city expansion'],
    timeline: ['Discovery and planning', 'Property sourcing and shortlisting', 'Lease negotiation and move-in'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  },
  {
    id: 2,
    title: 'Residential Portfolio Growth',
    description: 'Grew a client’s property portfolio by 200% in two years through strategic acquisitions.',
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    metric: '200%',
    metricLabel: 'Growth',
    client: 'Private Investor Group',
    category: 'Investment strategy',
    fullText:
      'A long-term investor wanted a structured path to scale their holdings without overexposing capital.\n\nWe built an acquisition roadmap focused on stable neighborhoods, rental yield, and appreciation potential.\n\nWithin two years, the portfolio more than doubled while maintaining healthy occupancy and cash flow.',
    highlights: ['200% portfolio growth', 'Balanced risk profile', 'Long-term cash flow'],
    timeline: ['Portfolio review', 'Market analysis', 'Acquisition execution'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  },
  {
    id: 3,
    title: 'Landmark Deal',
    description: 'Closed the largest residential sale in Miami Beach history, exceeding the asking price by 10%.',
    icon: <FaHandshake className="text-purple-600 text-3xl" />,
    metric: '10%',
    metricLabel: 'Above Asking',
    client: 'Luxury Estate Seller',
    category: 'Luxury residential',
    fullText:
      'This waterfront residence needed a high-impact sales strategy that would attract qualified luxury buyers.\n\nWe positioned the listing with premium visuals, targeted outreach, and concierge-level showing support.\n\nThe property sold above asking, setting a regional benchmark and delivering exceptional value to the client.',
    highlights: ['Sold above asking', 'Luxury buyer targeting', 'Record-setting result'],
    timeline: ['Listing launch', 'Luxury buyer outreach', 'Offer negotiation and close'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  },
  {
    id: 4,
    title: 'Suburban Redevelopment',
    description: 'Converted an abandoned mall into a thriving mixed-use community with 300+ residential units.',
    icon: <FaCity className="text-orange-600 text-3xl" />,
    metric: '300+',
    metricLabel: 'Units',
    client: 'Development Partners',
    category: 'Mixed-use development',
    fullText:
      'A dormant retail site was repurposed into a vibrant mixed-use destination with housing, retail, and community spaces.\n\nWe helped coordinate the project vision and aligned stakeholders around a practical phased development plan.\n\nThe finished community now supports more than 300 residential units and fresh local commerce.',
    highlights: ['Mixed-use redevelopment', '300+ residential units', 'Community revitalization'],
    timeline: ['Site assessment', 'Development planning', 'Construction and lease-up'],
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118',
  },
  {
    id: 5,
    title: 'Luxury Home Sales Surge',
    description: 'Sold 20 luxury properties in under 6 months, setting a new regional benchmark.',
    icon: <FaHome className="text-red-600 text-3xl" />,
    metric: '20',
    metricLabel: 'Homes Sold',
    client: 'Luxury Brokerage Client',
    category: 'Luxury sales',
    fullText:
      'A luxury-focused client wanted to accelerate sales velocity without sacrificing brand position.\n\nWe refined pricing, staged the listing experience, and targeted high-intent buyers through a premium campaign.\n\nThe campaign resulted in 20 luxury home sales in under six months.',
    highlights: ['20 homes sold', '6-month sprint', 'Regional benchmark'],
    timeline: ['Pricing and prep', 'Launch campaign', 'Qualified showings and close'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  },
];

export const clientTestimonials = [
  {
    id: 1,
    name: 'Robert J.',
    role: 'CEO, TechCorp',
    rating: 5,
    date: 'March 20, 2024',
    fullText:
      'Robert shares his journey in detail…',
    summary: 'Smooth communication, fast execution, and a team that understood our goals immediately.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    tags: ['Commercial', 'Executive relocation', 'Premium service'],
  },
  {
    id: 2,
    name: 'Anna M.',
    role: 'Real Estate Investor',
    rating: 5,
    date: 'April 2, 2024',
    fullText:
      'Anna shares how the team helped her scale with confidence…',
    summary: 'A great blend of market knowledge and practical advice for long-term investing.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
    company: 'Independent Investor',
    location: 'Austin, TX',
    tags: ['Investment', 'Portfolio growth', 'Strategy'],
  },
  {
    id: 3,
    name: 'David L.',
    role: 'Founder, UrbanNest',
    rating: 5,
    date: 'April 10, 2024',
    fullText:
      'David explains how the team simplified a complex purchase process…',
    summary: 'The process felt organized, transparent, and incredibly professional from start to finish.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    company: 'UrbanNest',
    location: 'Miami, FL',
    tags: ['Founders', 'Transparent process', 'High-touch'],
  },
];

