import { useEffect, useState } from 'react'
import Button from "./components/Button"
import api from './api'
import { DataButton } from './interfaces'
import { CreationForm } from './components/CreationForm'


function App() {
  const [data, setData] = useState<DataButton[]>([])

  useEffect(() => {
    api.get('/buttons').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className='h-screen flex flex-col items-center mt-12 gap-28'>
      <header>
        <h1 className='text-3xl underline'>CONTROL DE BOTÓNES</h1>
      </header>
      <CreationForm onDataUpdate={setData} />
      <Button onDataUpdate={setData} data={data} />
    </div>
  )
}

export default App
