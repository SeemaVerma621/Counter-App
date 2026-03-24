const CounterDisplay = ({count}) => {
  return (
      <div className='top w-[250px] h-[300px] bg-linear-to-t from-[#fee180] to-[#DBFF6F] flex justify-center item-center rounded-2xl'>
          <h1 className='text-center flex justify-center items-center text-8xl font-bold'>{count}</h1>
        </div>
  )
}

export default CounterDisplay
