import { useState } from "react";
import { useDictionary } from "./hooks/useDictionary";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import SearchInput from "./components/SearchInput";
import WelcomeMessage from "./components/WelcomeMessage";
import WordDetails from "./components/WordDetails";
import SourceLinks from "./components/SourceLinks";
import Spinner from "./components/Spinner/Spinner";
import NotFound from "./components/NotFound";

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const { word, fetchDictionary, loading, error } = useDictionary();

  const handleSearch = () => {
    fetchDictionary(searchWord);
    setHasSearched(true);
  };

  const phonetic = word?.phonetics?.find(
    (phonetic) => phonetic.audio && phonetic.text
  );

  const playAudio = (url: string) => {
    new Audio(url).play();
  };

  return (
    <ThemeProvider>
      <div className="mx-auto px-6">
        <Header />

        <SearchInput
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onSearch={handleSearch}
        />

        {!hasSearched && !loading && <WelcomeMessage />}

        {loading && <Spinner />}

        {error ? (
          <NotFound />
        ) : (
          word && (
            <div className="max-w-[736px] mx-auto">
              <WordDisplay
                word={word}
                phonetic={phonetic}
                playAudio={playAudio}
              />
              <WordDetails meanings={word.meanings} />
              <SourceLinks sourceUrls={word.sourceUrls} />
            </div>
          )
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
