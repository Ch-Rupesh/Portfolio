// Coding Profiles page loading skeleton
export default function CodingProfilesLoading() {
  return (
    <div className=\"mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28\">
      {/* Section heading skeleton */}
      <div className=\"flex flex-col items-center gap-3\">
        <div className=\"h-9 w-52 animate-pulse rounded-xl bg-gray-200\" />
      </div>

      {/* Profile cards skeleton */}
      <div className=\"mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4\">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className=\"rounded-2xl border border-gray-100 bg-white p-6 shadow-sm\"
          >
            <div className=\"flex flex-col items-center gap-4\">
              <div className=\"h-16 w-16 animate-pulse rounded-2xl bg-gray-200\" />
              <div className=\"h-5 w-24 animate-pulse rounded-lg bg-gray-200\" />
              <div className=\"h-4 w-32 animate-pulse rounded bg-gray-100\" />
              <div className=\"h-9 w-28 animate-pulse rounded-full bg-gray-200\" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
