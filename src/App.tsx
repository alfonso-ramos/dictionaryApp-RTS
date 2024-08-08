import { useState, useEffect } from "react";
import { useDictionary } from "./hooks/useDictionary";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import SearchInput from "./components/SearchInput";
import WelcomeMessage from "./components/WelcomeMessage";
import WordDetails from "./components/WordDetails";
import SourceLinks from "./components/SourceLinks";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [theme, setTheme] = useState(true);
  const [font, setFont] = useState("font-sans");
  const [hasSearched, setHasSearched] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const changeFont = (font: string) => {
    setFont(font);
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

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    if (searchWord.trim()) {
      fetchDictionary(searchWord);
      setHasSearched(true);
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
    <div className={`mx-auto px-6 ${font}`}>
      <Header theme={theme} changeTheme={changeTheme} changeFont={changeFont} />

      <SearchInput
        value={searchWord}
        onChange={handleInputChange}
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
      />

      {!hasSearched && !loading && <WelcomeMessage />}

      {loading && <Spinner/>}
      {notFound && <p>Word not found.</p>}
      {error && <p>{error}</p>}

      {word && (
        <div className="max-w-[736px] mx-auto">
          <WordDisplay word={word} phonetic={phonetic} playAudio={playAudio} />
          <WordDetails meanings={word.meanings} />
          <SourceLinks sourceUrls={word.sourceUrls} />
        </div>
      )}
    </div>
  );
}

export default App;
