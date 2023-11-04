import { GithubCard, IntroCard } from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-full grid grid-cols-2 gap-3">
        <IntroCard></IntroCard>
        <GithubCard></GithubCard>
      </div>
    </main>
  );
}
