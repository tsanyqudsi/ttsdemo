import { useState } from 'react'
import MyCrossword from 'mycrossword';
import 'mycrossword/dist/index.css';
import { data } from './data/data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyCrossword id="crossword-1" data={data} />
  )
}

export default App
