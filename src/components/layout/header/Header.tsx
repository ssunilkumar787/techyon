import React from 'react';
import { Settings } from 'lucide-react';
import NotificationBadge from './NotificationBadge';
import UserProfile from './UserProfile';
import Logo from '../../common/Logo';

const Header = () => {
  return (
    <header className="h-[60px] bg-navy-800 border-b border-navy-700 px-4 flex items-center justify-between relative shadow-lg">
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-navy-700/50 to-navy-700/20" />
      <Logo />
      
      <div className="flex items-center space-x-3">
        <NotificationBadge count={99} />
        <button className="p-1.5 hover:bg-navy-700 rounded-lg transition-colors">
          <Settings className="w-4 h-4 text-gray-400 hover:text-white" />
        </button>
        <UserProfile 
          name="John Doe"
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </header>
  );
};

export default Header;