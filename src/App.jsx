import { useState } from 'react'

import CounterDisplay from './Component/CounterDisplay'
import CounterButton from './Component/CounterButton'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='min-h-screen bg-blue-100 flex justify-center items-center'>
      <div className='box w-[300px] h-[400px] bg-white rounded-2xl flex flex-col justify-between items-center shadow-2xl p-5'>
     <CounterDisplay count={count}/>
     <CounterButton setCount={setCount}/>
      </div>
    </div>
  )
}

export default App
