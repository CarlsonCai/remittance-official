export default function Loading() {
  return (
    <div
      className="flex min-h-[40vh] flex-1 items-center justify-center bg-background"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-8 w-8 animate-pulse rounded-full bg-sky-200" />
    </div>
  );
}
