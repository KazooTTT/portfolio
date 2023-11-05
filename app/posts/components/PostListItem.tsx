"use client";
import Link from "next/link";
import Image from "next/image";
import { TagLink } from "./TagLink";

export function PostListItem({ post }: { post: PostItem }) {
  return (
    <div className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <div className="grid grid-cols-12">
        <div className="content col-span-10">
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
              return <TagLink tag={tag} key={tag}></TagLink>;
            })}
          </div>
        </div>
        <div className="relative w-full col-span-2 p-6">
          <Image
            className="rounded-lg"
            src={"/image-1.jpg"}
            alt={post.title}
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
