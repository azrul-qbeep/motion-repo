"use client";

import Link from "next/link";
import { useState } from "react";
import { Video } from "lucide-react";
import { usePathname } from "next/navigation";

interface Link {
  label: string;
  url: string;
}

const links: Link[] = [
  { label: "Basic Motion", url: "/basic-motion" },
  { label: "Gestures", url: "/gestures" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>(pathname);
  const onLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <aside className="bg-white w-[200px]">
      <nav className="sticky top-0 bottom-0 p-2 flex flex-col space-y-4">
        <Link
          href="/"
          className="bg-slate-50 shadow-sm border border-gray-200 p-2 rounded-lg font-semibold flex gap-2"
          onClick={() => setActiveLink("/")}
        >
          <div className="bg-teal-500 flex items-center justify-center p-2 rounded-md">
            <Video className="text-white" size={18} />
          </div>
          <div>
            <p className="text-teal-500 leading-none">Motion Repo</p>
            <p className="text-slate-500 text-sm">by: rulkimi</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={`px-2 py-1 border rounded-lg cursor-pointer ${
                activeLink === link.url 
                  ? "text-teal-500 bg-teal-50 border-teal-100" 
                  : "text-slate-500 border-transparent hover:bg-gray-50"
              }`}
              onClick={() => onLinkClick(link.url)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
