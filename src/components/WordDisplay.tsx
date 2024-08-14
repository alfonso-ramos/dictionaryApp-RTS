import { Word, Phonetic } from "../types";

type WordDisplayProps = {
  word: Word;
  phonetic?: Phonetic;
  playAudio: (url: string) => void;
};

export default function WordDisplay({
  word,
  phonetic,
  playAudio,
}: WordDisplayProps) {
  return (
    <div className="flex justify-between mt-14 max-w-[736px] mx-auto mb-7">
      <div>
        <h1 className="font-bold text-white dark:text-black text-6xl">
          {word.word}
        </h1>
        {phonetic && (
          <p className="text-purple-700 text-2xl mt-3">{phonetic.text}</p>
        )}
      </div>
      {phonetic?.audio && (
        <button
          onClick={() => playAudio(phonetic.audio)}
          aria-label="Play pronunciation"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              className="size-16"
            >
              <g fill="#A445ED" fill-rule="evenodd">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
