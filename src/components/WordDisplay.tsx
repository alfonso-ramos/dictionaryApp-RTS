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
    <div className="flex justify-between max-w-[736px] mx-auto">
      <div>
        <h1 className="font-bold text-3xl">{word.word}</h1>
        {phonetic && (
          <p className="text-purple-700 text-2xl">{phonetic.text}</p>
        )}
      </div>
      {phonetic?.audio && (
        <button
          onClick={() => playAudio(phonetic.audio)}
          className="bg-purple-100 rounded-full"
          aria-label="Play pronunciation"
        >
          <img src="/public/assets/images/icon-play.svg" alt="Play" />
        </button>
      )}
    </div>
  );
}
