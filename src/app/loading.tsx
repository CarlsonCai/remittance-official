export default function Loading() {
  return (
    <div
      className="bg-background flex min-h-[40vh] flex-1 items-center justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="size-8 animate-pulse rounded-full bg-sky-200" />
    </div>
  );
}
