export default function ProjectsLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-36 animate-pulse rounded-xl bg-gray-200" />
        <div className="h-4 w-56 animate-pulse rounded bg-gray-100" />
      </div>
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 space-y-3">
              <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
              <div className="h-7 w-3/4 animate-pulse rounded-lg bg-gray-200" />
            </div>
            <div className="mb-6 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="h-6 w-16 animate-pulse rounded-full bg-gray-100" />
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-24 animate-pulse rounded-full bg-gray-200" />
              <div className="h-10 w-24 animate-pulse rounded-full bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
