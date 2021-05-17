import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";


import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Sidebar = () => {
  
    
    const [menuCollapse, setMenuCollapse] = useState(false)


  const menuIconClick = () => {
    
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <NavLink to="/" active="true">
              <MenuItem icon={<FiHome />}>Home</MenuItem>
              </NavLink>
              <NavLink to="/signup" active="true">
              <MenuItem icon={<FaList />}>Signup</MenuItem>
              </NavLink>
              <NavLink to="/login" active="true">
              <MenuItem icon={<FaList />}>Login</MenuItem>
              </NavLink>
              <NavLink to="/favorites" active="true">
              <MenuItem icon={<FaRegHeart />}>Favorites</MenuItem>
              </NavLink>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;