export default function Loading() {
  return (
    <div
      className="bg-background flex min-h-(--size-min-height-loading) flex-1 items-center justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="size-(--size-loading-spinner) animate-pulse rounded-full bg-sky-200" />
    </div>
  );
}
