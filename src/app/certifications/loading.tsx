export default function CertificationsLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-48 animate-pulse rounded-xl bg-gray-200" />
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center gap-5">
            <div className="h-20 w-20 animate-pulse rounded-2xl bg-gray-200" />
            <div className="h-7 w-72 animate-pulse rounded-xl bg-gray-200" />
            <div className="h-4 w-48 animate-pulse rounded bg-gray-100" />
            <div className="h-8 w-28 animate-pulse rounded-full bg-gray-100" />
            <div className="w-full max-w-md space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
