"use client";

import { Switch } from "@/components/ui/switch";
import { mockPosts } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { AlignJustify, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

/**
 * @description:toggle the view mode of the posts
 */
function ViewModeToggle({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (newValue: boolean) => void;
}) {
  return (
    <div className="view-mode-toggle">
      <div className="flex items-center space-x-2">
        <AlignJustify />
        <Switch
          id="airplane-mode"
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        <LayoutGrid />
      </div>
    </div>
  );
}

function PostListItem({ post }: { post: PostItem }) {
  return (
    <div className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {post.date} <Link href={`/${post.catalog}`}>#{post.catalog}</Link>
      </time>
      <Link href={`/posts/${post.catalog}/${post.slug ?? post.title}`}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h3>
      </Link>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-2">
        {post.desc}
      </p>
      <div className="tags">
        {post.tags.map((tag) => {
          return (
            <span
              className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
const PostGridItem = ({ post }: { post: PostItem }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={"/image-1.jpg"} alt={post.title} />
      </a>
      <div className="p-5">
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {post.date} <Link href={`/${post.catalog}`}>#{post.catalog}</Link>
        </time>
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
        </a>

        <p className="text-base mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {post.desc}
        </p>
        <div className="tags">
          {post.tags.map((tag) => {
            return (
              <span
                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                key={tag}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * @description: show all the posts
 */
const Posts = () => {
  const [viewMode, setViewMode] = useState("list");
  console.log("%c Line:36 🍓 viewMode", "color:#4fff4B", viewMode);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-full w-full lg:w-2/3 flex flex-col">
        <div className="self-end mb-4">
          <ViewModeToggle
            checked={viewMode === "grid"}
            onCheckedChange={(newValue) => {
              setViewMode(newValue ? "grid" : "list");
            }}
          />
        </div>
        <ol
          className={cn(
            "post-list grid",
            viewMode === "list"
              ? "grid-cols-1 relative border-l border-gray-200 dark:border-gray-700"
              : "grid-cols-3 gap-2",
          )}
        >
          {mockPosts.map((post) => {
            return (
              <li key={post.title}>
                {viewMode === "list" ? (
                  <PostListItem post={post}></PostListItem>
                ) : (
                  <PostGridItem post={post}></PostGridItem>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
};

// TODO get all the md and mdx files from the posts folder

export default Posts;
