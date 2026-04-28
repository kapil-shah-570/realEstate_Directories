import React from 'react';
import { FaBuilding, FaHandsHelping, FaChartLine, FaUser, FaRegBuilding } from 'react-icons/fa';
import './DepartmentTabs.css';

const departments = [
  { id: 'buyer', label: 'I want to buy', icon: <FaBuilding /> },
  { id: 'seller', label: 'I want to sell', icon: <FaHandsHelping /> },
  { id: 'investor', label: 'I am an investor', icon: <FaChartLine /> },
  { id: 'agent', label: 'Join our team', icon: <FaUser /> },
  { id: 'other', label: 'General inquiry', icon: <FaRegBuilding /> }
];

const DepartmentTabs = ({ activeDepartment, setActiveDepartment }) => {
  return (
    <div className="department-tabs">
      {departments.map(dept => (
        <button
          key={dept.id}
          className={`tab-btn ${activeDepartment === dept.id ? 'active' : ''}`}
          onClick={() => setActiveDepartment(dept.id)}
        >
          <span className="tab-icon">{dept.icon}</span>
          <span className="tab-label">{dept.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DepartmentTabs;