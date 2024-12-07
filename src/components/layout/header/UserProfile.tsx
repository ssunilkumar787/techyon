import React from 'react';

interface UserProfileProps {
  name: string;
  avatar: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer group">
      <div className="flex flex-col text-right">
        <span className="text-xs font-medium text-gray-200 group-hover:text-white">{name}</span>
        <span className="text-[10px] text-gray-400 group-hover:text-gray-300">View profile</span>
      </div>
      <img
        src={avatar}
        alt={name}
        className="w-7 h-7 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all"
      />
    </div>
  );
};

export default UserProfile;