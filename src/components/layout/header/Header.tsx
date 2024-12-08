import tabIcon from "./../../../assets/images/tabIcon.svg";
import soundIcon from "./../../../assets/images/sound.svg";
import arrowDown from "./../../../assets/images/arrow-down.svg";

import NotificationBadge from "./NotificationBadge";

import Logo from "../../common/Logo";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-[60px] bg-navy-800 border-b border-navy-700 px-4 flex items-center justify-between relative shadow-lg gap-3">
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-navy-700/50 to-navy-700/20" />
      <Logo />

      <div className="flex items-center space-x-6">
        <FiSearch className="w-6 h-6 text-white" />
        <img src={tabIcon} alt="tab icon" />
        <img src={soundIcon} alt="sound icon" />

        <NotificationBadge count={99} />

        <FaUserCircle className="text-white w-9 h-9" />

        <img src={arrowDown} alt="arrowdown" />
      </div>
    </header>
  );
};

export default Header;
