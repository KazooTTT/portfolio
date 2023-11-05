import { GithubCard } from "./components/GithubCard";
import { IntroCard } from "./components/IntroCard";
import { NewestPosts } from "./components/NewestPosts";
import { PicturesWall } from "./components/PicturesWall";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-full grid grid-cols-4 gap-3">
        <IntroCard></IntroCard>
        <GithubCard></GithubCard>
        <PicturesWall></PicturesWall>
        <NewestPosts></NewestPosts>
      </div>
    </main>
  );
}
