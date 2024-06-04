import { useDictionary } from "./hooks/useDictionary"

function App() {
  const {fe} = useDictionary()
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
      <div>
        <input type="text" />
      </div>

      {/* Definicion */}
      <div>
        <div>
          <h1>Keyboard</h1>
          <p>silabas</p>
        </div>
        <button className="bg-purple-600 rounded-full">
          <img src="/public/assets/images/icon-play.svg" alt="" />
        </button>
      </div>


    </>
  )
}

export default App
