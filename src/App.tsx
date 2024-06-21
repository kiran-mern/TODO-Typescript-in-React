import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageHeader from './components/ImageHeader'
import { ItemList } from './components/ItemList'

function App() {
  const [item,setItem] = useState<string[]>([])
  const [inputValue,setInputValue]=useState<string>('')
  const handleSubmit=(event: React.FormEvent)=>{
    event.preventDefault()
    setItem((prev)=>[...prev,inputValue])
    setInputValue('')
  }

  const handleDelete=(value: string)=>{
    setItem((prev)=>(
      prev.filter((data)=>data !==value)
    ))
  }

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader/>
      <div className='w-[350px]'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <input type='text'  className='w-full p-2 rounded-sm mb-2 '
          value={inputValue}
           onChange={(event)=>setInputValue(event.target.value)}/>
          <button type='submit'  className='bg-gray-700 w-full p-2'>Add </button>
        </form>
        <div className=" h-52 overflow-y-auto">
          {/* <ItemList/> */}
          {item.map((data)=>(
            <div
            key={data}
             className='flex justify-between items-center' >
            <p>{data}</p>
            <button onClick={()=>handleDelete(data)}>pppp</button>
          </div>

          ))}

        </div>

      </div>
    </div>
   
  )
}

export default App
