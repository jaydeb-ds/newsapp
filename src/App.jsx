import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import { useState } from 'react'


function App() {
  const [search, setSearch] = useState('india')
  return (
    <>
      <Navbar setSearch={setSearch}/>
      <NewsBoard search={search}/>
    </>
  )
}

export default App
