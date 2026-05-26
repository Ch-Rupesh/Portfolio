export default function SkillsLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-52 animate-pulse rounded-xl bg-gray-200" />
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-xl bg-gray-200" />
              <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="h-7 w-16 animate-pulse rounded-full bg-gray-100" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
