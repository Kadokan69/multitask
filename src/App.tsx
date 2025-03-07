import { useState } from 'react'
import { Header } from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page_wrapper'>
      <Header />
      <main>
        <h1>Vite + React</h1>
      </main>
    </div>
  )
}

export default App
