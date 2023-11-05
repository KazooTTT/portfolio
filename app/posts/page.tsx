"use client";

import { mockPosts } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PostGridItem } from "./components/PostGridItem";
import { PostListItem } from "./components/PostListItem";
import { ViewModeToggle } from "./components/ViewModeToggle";

/**
 * @description: show all the posts
 */
const Posts = () => {
  const [viewMode, setViewMode] = useState("list");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-full w-full lg:2/3 xl:w-4/5 flex flex-col">
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
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5",
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
