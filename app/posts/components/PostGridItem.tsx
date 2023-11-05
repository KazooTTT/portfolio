"use client";
import Link from "next/link";
import Image from "next/image";
import { TagLink } from "./TagLink";

export const PostGridItem = ({ post }: { post: PostItem }) => {
  return (
    <Link href={`/posts/${post.catalog}/${post.slug ?? post.title}`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full h-48">
          <Image
            className="rounded-t-lg"
            src={"/image-1.jpg"}
            alt={post.title}
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="p-5">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {post.date} <Link href={`/${post.catalog}`}>#{post.catalog}</Link>
          </time>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>

          <p className="text-base mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {post.desc}
          </p>
          <div className="tags">
            {post.tags.map((tag) => {
              return <TagLink key={tag} tag={tag}></TagLink>;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
