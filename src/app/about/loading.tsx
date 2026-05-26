export default function AboutLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-40 animate-pulse rounded-xl bg-gray-200" />
        <div className="h-4 w-72 animate-pulse rounded bg-gray-100" />
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-gray-100" />
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-gray-100" />
          ))}
        </div>
      </div>
      <div className="mt-28 space-y-12">
        <div className="mx-auto h-8 w-52 animate-pulse rounded-xl bg-gray-200" />
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-36 animate-pulse rounded-2xl bg-gray-100" />
        ))}
      </div>
    </div>
  );
}
