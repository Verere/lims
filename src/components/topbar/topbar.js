"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { Menu, Transition, Popover } from "@headlessui/react";
import { FaBarsStaggered, FaPencil } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { Fragment } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Link from "next/link";

const TopBar = ({showNav, setShowNav}) => {

  return (
    <div className={`fixed w-full mb-8 h-16 bg-black flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}>
      <div className="pl-4 md:pl-16">
        <FaBarsStaggered className="w-8 h-8 text-gray-100 cursor-pointer" onClick={()=> setShowNav(!showNav)}/>
        </div>
     
         
      </div>
  );
};

export default TopBar;
