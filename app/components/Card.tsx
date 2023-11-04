"use client";

import { Icons } from "@/components/icons";
import GitHubCalendar from "react-github-calendar";

import Image from "next/image";
import Link from "next/link";
import config from "@/lib/config";

export const IntroCard = () => {
  return (
    <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center items-center">
      <Image
        src="https://pictures.kazoottt.top/2023/11/20231104-202311041404163-f1c85a135cfe806bd5afd973e52c3143.jpeg"
        className="h-18 w-18 rounded-full mb-2"
        alt="Flowbite Logo"
        height={64}
        width={64}
      />
      <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        KazooTTT
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        浅尝辄止，技艺不精。
      </p>
    </div>
  );
};

export const GithubCard = () => {
  return (
    <Link
      className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center items-center"
      href={`https://github/${config.github.username}`}
    >
      <Icons.gitHub className="h-14 w-14 mb-2" />
      <GitHubCalendar
        username={config.github.username}
        weekStart={1}
      ></GitHubCalendar>
    </Link>
  );
};
