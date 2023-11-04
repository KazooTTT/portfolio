"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavBarItemConfig {
  title: ReactNode;
  link: string;
}

interface NavBarItemProps extends NavBarItemConfig {
  currentPathName: string;
}

const NavBarItem = ({ title, link, currentPathName }: NavBarItemProps) => {
  const isActive = link === currentPathName;
  return (
    <Link
      href={link}
      className={
        isActive
          ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      }
      aria-current="page"
    >
      {title}
    </Link>
  );
};

const StickyNavbar = () => {
  const navbarItemList: NavBarItemConfig[] = [
    { title: "首页", link: "/" },
    { title: "归档", link: "/archive" },
    { title: "技术", link: "/programming" },
    { title: "项目", link: "/projects" },
    { title: "周报", link: "/weekly" },
    { title: "杂谈", link: "/others" },
    { title: "照片", link: "/photos" },
    { title: "关于", link: "/about" },
    { title: "订阅", link: "/rss" },
  ];
  const currentPathName = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-2">
        <Link href="/" className="flex items-center mr-6">
          <Image
            src="https://pictures.kazoottt.top/2023/11/20231104-202311041404163-f1c85a135cfe806bd5afd973e52c3143.jpeg"
            className="h-12 w-12 mr-3"
            alt="Flowbite Logo"
            height={48}
            width={48}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            KazooTTT
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarItemList.map((navbarItem) => (
              <li key={navbarItem.link}>
                <NavBarItem
                  currentPathName={currentPathName}
                  title={navbarItem.title}
                  link={navbarItem.link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
