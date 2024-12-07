import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  const displayCount = count > 99 ? '99+' : count;

  return (
    <button className="p-1.5 hover:bg-navy-700 rounded-lg transition-colors relative">
      <Bell className="w-4 h-4 text-gray-400 hover:text-white" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-4 flex items-center justify-center px-1">
          {displayCount}
        </span>
      )}
    </button>
  );
};

export default NotificationBadge;