// Root loading skeleton — shown while the home page is loading
export default function RootLoading() {
  return (
    <main className=\"relative flex min-h-screen flex-col overflow-hidden\">
      <section className=\"relative z-10 flex flex-1 items-center justify-center px-6 py-20 md:px-12 lg:px-20\">
        <div className=\"mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20\">
          {/* Left text skeleton */}
          <div className=\"flex flex-1 flex-col items-center gap-5 lg:items-start\">
            <div className=\"h-3 w-16 animate-pulse rounded-full bg-gray-200\" />
            <div className=\"h-10 w-72 animate-pulse rounded-xl bg-gray-200 sm:w-96\" />
            <div className=\"h-6 w-48 animate-pulse rounded-lg bg-gray-100\" />
            <div className=\"space-y-2\">
              <div className=\"h-4 w-80 animate-pulse rounded bg-gray-100\" />
              <div className=\"h-4 w-64 animate-pulse rounded bg-gray-100\" />
            </div>
            <div className=\"mt-3 flex gap-4\">
              <div className=\"h-11 w-36 animate-pulse rounded-full bg-gray-200\" />
              <div className=\"h-11 w-32 animate-pulse rounded-full bg-gray-100\" />
            </div>
            <div className=\"mt-4 flex gap-3\">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className=\"h-10 w-10 animate-pulse rounded-full bg-gray-100\" />
              ))}
            </div>
          </div>
          {/* Right avatar skeleton */}
          <div className=\"h-64 w-64 animate-pulse rounded-full bg-gray-200 sm:h-80 sm:w-80 lg:h-96 lg:w-96\" />
        </div>
      </section>
    </main>
  );
}
