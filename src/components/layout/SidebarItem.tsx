import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, active }) => {
  return (
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200
        ${active 
          ? 'bg-blue-500 text-white' 
          : 'text-gray-400 hover:bg-navy-700 hover:text-white'
        }`}
    >
      {icon}
    </div>
  );
};

export default SidebarItem;