import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import ImageHeader from './components/ImageHeader'
import { ItemList } from './components/ItemList'
import Button from './components/Button'
import {type Items} from './Types/utils'


function App() {
  const [items,setItems] = useState<Items[]>([])
  const [inputValue,setInputValue]=useState<string>('')
  const handleSubmit=(event: React.FormEvent)=>{
    event.preventDefault()
    if(inputValue.trim())
    setItems((prev)=>[...prev,{title: inputValue, id: Date.now().toString()}])
    setInputValue('')
  }

  
  

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader/>
      <div className='w-[350px]'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue}/>
         <Button className= "bg-gray-700 w-full p-1">Add </Button>
        </form>
        <div className=" h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems} />
          
        </div>

      </div>
    </div>
   
  )
}

export default App
