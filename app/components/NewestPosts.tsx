import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { mockPosts } from "@/lib/mockData";

export function NewestPosts() {
  return (
    <Card className="col-span-4">
      <CardHeader className="py-2">
        <CardTitle className="text-lg">最新博文</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {mockPosts.map((post) => {
            return (
              <li className="mb-6 ml-4" key={post.title}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {post.date}{" "}
                  <Link href={`/${post.catalog}`}>#{post.catalog}</Link>
                </time>
                <Link
                  href={`/posts/${post.catalog}/${post.slug ?? post.title}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-1">
                  {post.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
