import { useState } from "react";
import { useDictionary } from "./hooks/useDictionary";

function App() {
  const { word, loading, notFound, fetchDictionary } = useDictionary();
  const phonetic = word.phonetics.find(
    (phonetic) => phonetic.audio && phonetic.text
  );
  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    if (searchWord.trim()) {
      fetchDictionary(searchWord);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <div className="mx-auto px-6">
      <header className="flex justify-around">
        <img src="/public/assets/images/logo.svg" alt="logo" />
        <div>
          <select name="" id="">
            <option value="">mono</option>
            <option value="">arial</option>
            <option value="">serif</option>
          </select>
          <p>switchcolor</p>
        </div>
      </header>

      


      <input
        type="text"
        value={searchWord}
        onChange={handleInputChange}
        placeholder="Introduce una palabra"
      />
      <button onClick={handleSearch}>Buscar</button>


      
      <div className="flex border-2 justify-between border-red-600">
        <div>
          <h1 className="font-bold text-3xl">{word.word}</h1>
          <h1>{phonetic?.text}</h1>
        </div>
        <button
          onClick={() => playAudio(phonetic?.audio!)}
          className="bg-purple-600 rounded-full">
          <img src="/public/assets/images/icon-play.svg" alt="" />
        </button>
      </div>

      

      {
        word.meanings.map(meaning => (
          <>
            <div className="flex">
              <p>{meaning.partOfSpeech}</p>
              <div className=" w-full border-b border-gray-900"></div>
            </div>
            <p>Meaning</p>
            <ul className="list-disc marker:text-purple-500 ml-7">
              {meaning.definitions.map(e => (
                <li>{e.definition}</li>
              ))}
            </ul>
            {word.meanings.map(s => (
              <p className="text-purple-500">synonyms: {s.synonyms}</p>
            ))}
          </>
        ))
      }
      <p>{word.sourceUrls}</p>
    </div>
  );
}

export default App;
