import { useState, useEffect } from "react";
import { useDictionary } from "./hooks/useDictionary";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";

function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme === false) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const { word, fetchDictionary, loading, notFound, error } = useDictionary();

  const phonetic = word?.phonetics?.find(
    (phonetic) => phonetic.audio && phonetic.text
  );
  const synonym = word?.meanings?.find((meaning) => meaning.synonyms?.[0]);

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mx-auto px-6">
      <Header theme={theme} changeTheme={changeTheme} />

      <div className="max-w-[736px] mx-auto bg-gray-300 flex p-2">
        <input
          type="text"
          value={searchWord}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Introduce una palabra"
          className="w-full bg-none h-[16] rounded-xl"
        />
        <button onClick={handleSearch}>
          <img src="/public/assets/images/icon-search.svg" alt="Buscar" />
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {notFound && <p>Word not found.</p>}
      {error && <p>{error}</p>}

      {word && (
        <WordDisplay word={word} phonetic={phonetic} playAudio={playAudio} />
      )}

      {word?.meanings?.map((meaning, index) => (
        <div key={index}>
          <div className="flex">
            <p>{meaning.partOfSpeech}</p>
            <div className="w-full border-b border-gray-900"></div>
          </div>
          <p>Meaning</p>
          <ul className="list-disc marker:text-purple-500 ml-7">
            {meaning.definitions.map((def, defIndex) => (
              <li key={defIndex}>{def.definition}</li>
            ))}
          </ul>
          {synonym && <p className="text-purple-500">{synonym.synonyms.join(", ")}</p>}
        </div>
      ))}
      {word?.sourceUrls && (
        <p><a href={word.sourceUrls[0]} target="_blank" rel="noopener noreferrer">Source</a></p>
      )}
    </div>
  );
}

export default App;
