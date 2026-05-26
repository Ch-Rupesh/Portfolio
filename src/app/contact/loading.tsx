export default function ContactLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-44 animate-pulse rounded-xl bg-gray-200" />
        <div className="h-4 w-64 animate-pulse rounded bg-gray-100" />
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="h-6 w-36 animate-pulse rounded-lg bg-gray-200" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-1.5">
              <div className="h-4 w-16 animate-pulse rounded bg-gray-100" />
              <div className={`animate-pulse rounded-xl bg-gray-100 ${i === 3 ? "h-28" : "h-11"}`} />
            </div>
          ))}
          <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                <div className="h-5 w-36 animate-pulse rounded-lg bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
