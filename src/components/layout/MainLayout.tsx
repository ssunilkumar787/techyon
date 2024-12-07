import React from 'react';
import Sidebar from './Sidebar';
import Header from './header/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[50px]">
        <Header />
        <main className="w-full min-h-screen bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;