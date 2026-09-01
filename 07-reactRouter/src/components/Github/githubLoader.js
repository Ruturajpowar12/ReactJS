const githubUsername = "Ruturajpowar12";

export async function githubLoader() {
  const response = await fetch(
    `https://api.github.com/users/${githubUsername}`,
    { headers: { Accept: "application/vnd.github+json" } },
  );

  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? `GitHub user ${githubUsername} was not found.`
        : "GitHub is temporarily unavailable. Please try again later.",
    );
  }

  return response.json();
}
