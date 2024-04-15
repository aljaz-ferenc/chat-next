"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const iconSize = 30;

const links = [
  { href: "/app/chat", icon: <BiSolidMessageAltDetail size={iconSize} /> },
  { href: "/app/profile", icon: <FaUserCircle size={iconSize} /> },
  { href: "/app/settings", icon: <IoSettingsSharp size={iconSize} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  function isActive(href: string, pathname: string) {
    return pathname.startsWith(href);
  }

  return (
    <div className="p-2 bg-blue-500 flex flex-col gap-5 items-center h-full">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition hover:bg-slate-100 hover:text-blue-500 p-2 rounded ${
            isActive(link.href, pathname)
              ? "text-blue-500 bg-slate-100"
              : "text-white"
          }`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
