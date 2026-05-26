export default function AchievementsLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-64 animate-pulse rounded-xl bg-gray-200" />
      </div>
      <div className="relative mt-12 space-y-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="flex-1">
              <div className="max-w-lg rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 animate-pulse rounded-lg bg-gray-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
