import { Link, useRouteError } from "react-router-dom";

export default function GithubError() {
  const error = useRouteError();

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
        GitHub profile unavailable
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        We could not load this profile.
      </h1>
      <p className="mt-4 text-slate-600">
        {error instanceof Error
          ? error.message
          : "Please check your connection and try again."}
      </p>
      <Link
        className="mt-8 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500"
        to="/"
      >
        Return home
      </Link>
    </main>
  );
}
