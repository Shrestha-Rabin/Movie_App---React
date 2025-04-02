import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'

function App() {

  const [searchTerm, setSearchterm] = useState("");

  return (
    <>
      <main>
        <div className='pattern'></div>

        <div className='wrapper'>
          <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1><span className='text-gradient'>Movies</span> For You</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchterm={setSearchterm} />
        </div>
      </main>
    </>
  )
}

export default App
