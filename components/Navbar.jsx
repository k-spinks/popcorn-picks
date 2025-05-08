"use client";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import SearchBar from "./ui/Searchbar";
import {
  Settings,
  Menu,
  X,
  Film,
  User,
  Filter,
  ChevronDown,
  TrendingUp,
  Smile,
  Bell,
} from "@deemlol/next-icons";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropDownOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="flex flex-wrap md:flex-nowrap justify-between items-center z-50 backdrop-blur-md w-full max-w-8xl px-2 md:px-12 mx-auto py-4 text-white fixed text-lg border-b-2 border-red-500">

      {/* Logo */}
      <div className="w-auto flex justify-center md:justify-start items-center shrink-0 gap-4 lg:gap-8">
        <Logo />
        <SearchBar />
      </div>

      {/* Larger Nav */}
      <div className="lg:flex justify-center items-center gap-12 hidden">
        <ul className="flex justify-between items-center gap-8">
          <li>
            <div className="hover:text-red-500 flex justify-between items-center"onMouseEnter={() => setIsDropDownOpen((prev) => !prev)}
                onMouseLeave={() => setIsDropDownOpen((prev) => !prev)}>
              <Link href={"/movies"}>Movies</Link>
              <button
                className="hover:cursor-pointer"
              >
                <ChevronDown
                  size={24}
                  color="#FFFFFF"
                  className={`transition-transform duration-200 ${
                    isDropDownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            <ul>
            <ul
              className={`${isDropDownOpen ? 'absolute' : 'hidden'} top-12 right-75 bg-gray-800 flex flex-col justify-between items-start gap-4 py-4 px-5 rounded-sm`}
              onMouseEnter={() => setIsDropDownOpen((prev) => !prev)}
                onMouseLeave={() => setIsDropDownOpen((prev) => !prev)}
            >
              <li className="flex justify-between items-center gap-4 hover:text-red-500">
                <TrendingUp size={24} color="white" />
                <Link href={"/toprated"}>Top Rated</Link>
              </li>
              <li className="flex justify-between items-center gap-4 hover:text-red-500">
                <Smile size={24} color="white" />
                <Link href={"/popular"}>Popular</Link>
              </li>
              <li className="flex justify-between items-center gap-4 hover:text-red-500">
                <Bell size={24} color="white" />
                <Link href={"/upcoming"}>Upcoming</Link>
              </li>
            </ul>
            </ul>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/actors"}>Actors</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/genres"}>Genres</Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href={"/profile"}>
              <Image src={"/pfp.png"} alt="pfp" width={45} height={45} />
            </Link>
          </li>
        </ul>
      </div>

      <Menu
        size={24}
        color="white"
        className="lg:hidden"
        onClick={() => {
          setIsOpen(true);
          setIsDropDownOpen(false);
        }}
      />

      {/* Curtain */}
      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } w-screen h-screen bg-black opacity-70 top-0 right-0`}
      ></div>

      {/* Mobile Nav */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-[65vh] w-[35%] bg-gray-800 flex-col justify-between items-center rounded-bl-2xl z-50 p-6 transition-transform duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <X
          size={36}
          color="white"
          className="lg:hidden absolute top-2 right-2"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col justify-between items-start gap-12 mt-16 text-lg">
          <li className="flex flex-col justify-center items-start gap-4">
            <div className="hover:text-red-500 flex items-center gap-2">
              <Film size={12} color="#FFFFFF" />
              <Link href={"/movies"}>Movies</Link>
              <button onClick={() => setIsDropDownOpen((prev) => !prev)}>
                <ChevronDown
                  size={24}
                  color="#FFFFFF"
                  className={`transition-transform duration-200 ${
                    isDropDownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            <ul
              className={`${
                isDropDownOpen ? "flex" : "hidden"
              } flex-col justify-between items-start gap-4 text-sm`}
            >
              <li className="flex justify-between items-center gap-2">
                <TrendingUp size={12} color="white" />
                <Link href={"/toprated"}>Top Rated</Link>
              </li>
              <li className="flex justify-between items-center gap-2">
                <Smile size={12} color="white" />
                <Link href={"/popular"}>Popular</Link>
              </li>
              <li className="flex justify-between items-center gap-2">
                <Bell size={12} color="white" />
                <Link href={"/upcoming"}>Upcoming</Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-red-500 flex items-center gap-4">
            <User size={16} color="#FFFFFF" />
            <Link href={"/actors"}>Actors</Link>
          </li>
          <li className="hover:text-red-500 flex items-center gap-4">
            <Filter size={16} color="#FFFFFF" />
            <Link href={"/genres"}>Genres</Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href={"/profile"}>
              <Image src={"/pfp.png"} alt="pfp" width={60} height={60} />
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/settings"}>
              <Settings size={16} color="white" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
