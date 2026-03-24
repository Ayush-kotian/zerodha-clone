import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
  const { user, logout } = useAuth();
  let handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  let handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const handleLogoutClick = async () => {
    setIsProfileDropdownOpen(false);
    await logout();
  };
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "ZU";
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha clone logo" style={{ width: "35px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => {handleMenuClick(1)}}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
             <Link
              to="/holdings"
              onClick={() => {handleMenuClick(2)}}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
              <Link
              to="/positions"
              onClick={() => {handleMenuClick(3)}}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
              <Link
              to="/funds"
              onClick={() => {handleMenuClick(4)}}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
              <Link
              to="/apps"
              onClick={() => {handleMenuClick(5)}}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{initials}</div>
            <p className="username">{user?.name || "User"}</p>
          </div>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <p className="dropdown-name">{user?.name || "User"}</p>
              <p className="dropdown-email">{user?.email || "No email found"}</p>
              <button type="button" className="logout-btn" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
