export default function NotFound() {
  return (
    <div className="text-center max-w-[736px] mx-auto">
      <img src="../../public/assets/images/confused-emoji.webp" className="size-16 mx-auto mt-32" alt="" />
      <p className="text-white dark:text-black font-semibold text-2xl mt-11">
        No Definitions Found
      </p>
      <p className="mt-6 text-[#757575] dark:text-blac">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
