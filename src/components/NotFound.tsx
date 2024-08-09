export default function NotFound() {
  return (
    <div className="text-center">
      <p>😕</p>
      <p className="text-white dark:text-black font-semibold">
        No Definitions Found
      </p>
      <p className="text-white dark:text-black">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
