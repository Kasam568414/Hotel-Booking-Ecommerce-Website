import React from 'react';
import navLogo from "../../assets/nav-logo.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import userLogo from "../../assets/Ellipse 21.png";

import { Button, Drawer, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBookmarksOutline, IoCloseOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import useAuth from '../../components/Hooks/UseAuth';
import { AuthContext } from '../../components/Providers/AuthProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth(AuthContext);

  // Mobile drawer toggle
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-2 md:px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              <img className="lg:ml-28 w-24 lg:w-36" src={navLogo} alt="logo" />
            </Link>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              <Link to="/">Home</Link>
            </button>
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              <Link to="/book-table">Book A Table</Link>
            </button>
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              <Link to="/food">Food</Link>
            </button>
          </div>

          {/* Login Button (Desktop) */}
          <div className="flex gap-4 lg:mr-28">
            <button className="bg-primary p-2 rounded-lg border-b-4 text-[#F8FAFC] border-2 border-[#334A55] md:block hidden">
              Download App
            </button>

            {/* login logic */}
            {user ? (
              <ProfileDrawer />
            ) : (
              <Link to="/auth/login" className="flex justify-center items-center">
                <PiUserCircleCheckDuotone className="text-5xl" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button type="primary" onClick={showDrawer}>
              <GiHamburgerMenu />
            </Button>
            <Drawer title=" Mobile Device " onClose={onClose} open={open}>
              <div className="flex flex-col space-y-3">
                <button className="text-2xl text-black font-medium">
                  <Link to="/">Home</Link>
                </button>
                <button className="text-2xl text-black font-medium">
                  <Link to="/book-table">Book A Table</Link>
                </button>
                <button className="text-2xl text-black font-medium">
                  <Link to="/food">Food</Link>
                </button>
              </div>
            </Drawer>
          </div>
        </div>
      </nav>
    </div>
  );
};

const ProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Space>
        <button
          onClick={showDrawer}
          className="bg-white p-2 rounded-lg border-b-4 text-[#334A55] border-2 border-[#334A55]"
        >
          My Profile
        </button>
      </Space>
      <Drawer
        title="Profile Drawer"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        style={{ backgroundColor: 'grey' }}
        closeIcon={<IoCloseOutline className="h-6 w-6 rounded bg-black text-white border-2" />}
      >
        <div className="flex justify-center mt-3">
          <img
            className="w-24 h-24 rounded-full bg-cover"
            src={user?.photoURL || userLogo}

            alt="User Photo"
          />
        </div>
        <p className="text-center text-lg font-semibold mt-4">{user ?.displayName}</p>

        <button className="flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
          <BiUserCircle />
          <Link>Personal Details</Link>
        </button>

        <button className="flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
          <IoBookmarksOutline />
          <Link>Booking History</Link>
        </button>

        <button className="flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
          <MdOutlineFavorite />
          <Link>Favorite</Link>
        </button>

        <button
          onClick={handleLogOut}
          className="flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]"
        >
          <CiLogout />
          <Link>Logout</Link>
        </button>
      </Drawer>
    </>
  );
};

export default Navbar;
