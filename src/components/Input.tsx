type Input={
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}
const Input = ({inputValue,setInputValue}: Input) => {
  return (
    <input type='text'  className='w-full p-2 rounded-sm mb-2 '
          value={inputValue}
           onChange={(event)=>setInputValue(event.target.value)}
           placeholder="Add new item"/>
  )
}

export default Input