import { useLoaderData } from "react-router-dom";

export default function Github() {
  const profile = useLoaderData();

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center justify-center px-4 py-16">
      <article className="grid w-full max-w-3xl gap-8 rounded-2xl bg-slate-900 p-8 text-white shadow-xl sm:grid-cols-[auto_1fr] sm:p-12">
        <img
          className="h-36 w-36 rounded-full border-4 border-orange-500 object-cover"
          src={profile.avatar_url}
          alt={`${profile.login}'s GitHub avatar`}
        />
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            GitHub profile
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            {profile.name || profile.login}
          </h1>
          <p className="mt-2 text-slate-300">@{profile.login}</p>
          <p className="mt-6 max-w-xl text-slate-200">
            {profile.bio || "Building and learning in public with React."}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>{profile.public_repos} public repositories</span>
            <span>{profile.followers} followers</span>
            <span>{profile.following} following</span>
          </div>
          <a
            className="mt-8 inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile
          </a>
        </div>
      </article>
    </main>
  );
}
