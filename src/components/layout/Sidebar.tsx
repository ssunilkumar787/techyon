import {
  Home,
  Plus,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  Bell,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-[50px] bg-navy-800 flex flex-col items-center py-4 space-y-8">
      <div className="flex flex-col items-center">
        <div className="w-[30px] h-[20px]  flex items-center justify-center">
          <GiHamburgerMenu className="text-white w-[30px] h-[20px]" />
        </div>
      </div>

      <nav className="flex-1 space-y-3">
        <div className="w-8 h-8 bg-gray-400 rounded-3xl flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </div>

        <SidebarItem icon={<Home size={18} />} />
        <SidebarItem icon={<Users size={18} />} />
        <SidebarItem icon={<Calendar size={18} />} />
        <SidebarItem icon={<MessageSquare size={18} />} />
        <SidebarItem icon={<FileText size={18} />} />
        <SidebarItem icon={<Bell size={18} />} />
      </nav>
    </div>
  );
};

export default Sidebar;
