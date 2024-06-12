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
    <>
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
      <hr />
      <input
        type="text"
        value={searchWord}
        onChange={handleInputChange}
        placeholder="Introduce una palabra"
      />
      <button onClick={handleSearch}>Buscar</button>
      <div>
        <div></div>
        <button
          onClick={() => playAudio(phonetic?.audio!)}
          className="bg-purple-600 rounded-full"
        >
          <img src="/public/assets/images/icon-play.svg" alt="" />
        </button>
      </div>

      <h1>{word.word}</h1>
      <h1>{phonetic?.text}</h1>

      {
        word.meanings.map(meaning => (
          <>
            <p>{meaning.partOfSpeech}</p>
            <p>Meaning</p>
            <ul>
              {meaning.definitions.map(e => (
                <li>{e.definition}</li>
              ))}
            </ul>
          </>
        ))
      }
      <p>{word.sourceUrls}</p>
    </>
  );
}

export default App;
