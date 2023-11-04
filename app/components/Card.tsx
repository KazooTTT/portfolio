"use client";

import { Icons } from "@/components/icons";
import GitHubCalendar from "react-github-calendar";

import Image from "next/image";
import Link from "next/link";
import config from "@/lib/config";
import SocialMediaList from "./SocialMediaList";

export const IntroCard = () => {
  return (
    <div className="col-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex">
      <div className="flex flex-col justify-center items-center mr-8">
        <Image
          src="https://pictures.kazoottt.top/2023/11/20231104-202311041404163-f1c85a135cfe806bd5afd973e52c3143.jpeg"
          className="h-18 w-18 rounded-full mb-2"
          alt="Flowbite Logo"
          height={64}
          width={64}
        />
        <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          KazooTTT
        </h4>
      </div>
      <div className="flex flex-col justify-between py-4">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍
          一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串介绍一串
        </p>
        <SocialMediaList></SocialMediaList>
      </div>
    </div>
  );
};

export const GithubCard = () => {
  return (
    <Link
      className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center items-center"
      href={`https://github/${config.socialMedia.github}`}
    >
      <Icons.gitHub className="h-14 w-14 mb-2" />
      <GitHubCalendar
        username={config.socialMedia.github}
        weekStart={1}
      ></GitHubCalendar>
    </Link>
  );
};
