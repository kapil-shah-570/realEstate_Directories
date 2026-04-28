import React from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaApple } from 'react-icons/fa';

const SocialAuthButtons = ({ action = 'Sign in' }) => {
  const providers = [
    { name: 'Google', icon: <FaGoogle />, href: '/auth/google', color: 'bg-red-500 hover:bg-red-600' },
    { name: 'Facebook', icon: <FaFacebookF />, href: '/auth/facebook', color: 'bg-blue-800 hover:bg-blue-900' },
    { name: 'GitHub', icon: <FaGithub />, href: '/auth/github', color: 'bg-gray-800 hover:bg-gray-900' },
    { name: 'Apple', icon: <FaApple />, href: '/auth/apple', color: 'bg-black hover:bg-gray-900' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm text-gray-500">or {action} with</span>
        <div className="flex-1 border-t border-gray-300" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {providers.map((provider) => (
          <a
            key={provider.name}
            href={provider.href}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-medium transition-colors ${provider.color}`}
          >
            {provider.icon} {provider.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialAuthButtons;