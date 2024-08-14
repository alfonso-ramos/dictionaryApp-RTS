import { InferOutput } from "valibot";
import { WordSchema } from "../hooks/useDictionary";

type Word = InferOutput<typeof WordSchema>;

type WordDetailsProps = {
  meanings: Word["meanings"];
};

const WordDetails = ({ meanings }: WordDetailsProps) => {
  const synonym = meanings.find((meaning) => meaning.synonyms?.[0]);

  return (
    <>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <div className="flex  my-[30px]">
            <p className="text-white dark:text-black font-semibold text-2xl">{meaning.partOfSpeech}</p>
            <div className="w-full border-b border-gray-900"></div>
          </div>
          <p className="text-[#757575] dark:text-black mb-7">Meaning</p>
          <ul className="list-disc marker:text-purple-500 ml-7">
            {meaning.definitions.map((def, defIndex) => (
              <li className="text-white dark:text-black mb-3" key={defIndex}>{def.definition}</li>
            ))}
          </ul>
          {synonym && <p className="text-purple-500"><span className="text-gray-500">Synonyms</span> {synonym.synonyms.join(", ")}</p>}
          
        </div>
      ))}
    </>
  );
};

export default WordDetails;
