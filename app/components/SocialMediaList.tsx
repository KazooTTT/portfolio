import { Icons } from "@/components/icons";
import config from "@/lib/config";
import Link from "next/link";

const SocialMediaItem = ({
  platform,
  value,
}: {
  platform: string;
  value: string;
}) => {
  switch (platform) {
    case "github":
      return (
        <Link
          href={`https://github.com/${value}`}
          key={platform}
          target="_blank"
        >
          <Icons.gitHub className="h-4 w-4" />
        </Link>
      );
    case "bilibili":
      return (
        <Link href={value} key={platform} target="_blank">
          <Icons.bilibili className="h-4 w-4" />
        </Link>
      );
    case "weibo":
      return (
        <Link href={value} key={platform} target="_blank">
          <Icons.weibo className="h-4 w-4" />
        </Link>
      );
    case "email":
      return (
        <Link href={`mailto:${value}`} key={platform}>
          <Icons.email className="h-4 w-4" />
        </Link>
      );
    default:
      return (
        <Link href={value} key={platform}>
          <Icons.external className="h-4 w-4" />
        </Link>
      );
  }
};

const SocialMediaList = () => {
  return (
    <div className="flex space-x-3 items-center flex-wrap">
      {Object.entries(config.socialMedia).map((item) => {
        const [platform, value] = item;
        return (
          <div
            className="border-0 relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:cursor-pointer"
            key={platform}
          >
            <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <SocialMediaItem platform={platform} value={value} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaList;
