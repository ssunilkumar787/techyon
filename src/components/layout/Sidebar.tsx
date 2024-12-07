import React from 'react';
import { 
  Home, 
  Plus, 
  Users, 
  Settings, 
  HelpCircle,
  FileText,
  Calendar,
  MessageSquare,
  Bell
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-[50px] bg-navy-800 flex flex-col items-center py-4 space-y-8">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={<Home size={18} />} active />
        <SidebarItem icon={<Users size={18} />} />
        <SidebarItem icon={<Calendar size={18} />} />
        <SidebarItem icon={<MessageSquare size={18} />} />
        <SidebarItem icon={<FileText size={18} />} />
        <SidebarItem icon={<Bell size={18} />} />
      </nav>

      <div className="space-y-2">
        <SidebarItem icon={<HelpCircle size={18} />} />
        <SidebarItem icon={<Settings size={18} />} />
      </div>
    </div>
  );
};

export default Sidebar;