export default function WelcomeMessage() {
  return (
    <div className="mt-6 text-center max-w-[736px] mx-auto">
      <img src="/assets/images/waving-hand.png" className="size-20 mx-auto mt-32 " alt="" />
      <p className="font-semibold text-2xl mt-11 text-white dark:text-black">Welcome to the Dictionary App!</p>
      <p className="mt-6 text-[#757575] dark:text-black">Please enter a word to search.</p>
    </div>
  );
}
