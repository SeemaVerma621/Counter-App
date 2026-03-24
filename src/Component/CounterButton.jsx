import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
const CounterButton = ({setCount}) => {
  return (
    
       <div className='bottom flex justify-between gap-2'>
          <button className='p-3 bg-gray-200 rounded font-bold' onClick={()=>{
            setCount(prev=> prev + 1)
          }}><Plus /></button>
          <button className='p-3 bg-gray-200 rounded font-bold' onClick={()=>{
            setCount(prev=> Math.max(prev - 1, 1))
          }}><Minus /></button>
           <button className='p-3 bg-gray-200 rounded font-bold' onClick={()=>{
            setCount(0)
          }}>Clear</button>
       </div>
  )
}

export default CounterButton
