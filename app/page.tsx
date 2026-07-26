export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Your Next.js app is live</h1>
      <p>
        Edit <code>app/page.tsx</code>, push, and Railway redeploys.
      </p>

      <dl>
        <div className="row">
          <dt>Next.js</dt>
          <dd>{process.env.NEXT_RUNTIME_VERSION ?? "16.2.12"}</dd>
        </div>
        <div className="row">
          <dt>Node</dt>
          <dd>{process.version}</dd>
        </div>
        <div className="row">
          <dt>Health check</dt>
          <dd>
            <a href="/api/health">/api/health</a>
          </dd>
        </div>
      </dl>

      <ol>
        <li>
          <strong>Add a page</strong> — create a folder under <code>app/</code> with a{" "}
          <code>page.tsx</code>.
        </li>
        <li>
          <strong>Add an API route</strong> — a <code>route.ts</code> under{" "}
          <code>app/api/</code>.
        </li>
        <li>
          <strong>Add a package</strong> — <code>npm install</code>, then commit the
          lockfile.
        </li>
      </ol>
    </main>
  );
}
