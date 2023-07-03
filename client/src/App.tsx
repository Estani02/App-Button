import { useEffect, useState } from 'react'
import Button from "./components/Button"
import api from './api'
import { DataButton } from './interfaces'
import { CreationForm } from './components/CreationForm'


function App() {
  const [data, setData] = useState<DataButton[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/buttons').then((res) => {
      setData(res.data)
    })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.error)
        } else {
          setError('Servidor desconectado')
        }
      })
  }, [])

  return (
    <div className='h-screen flex flex-col items-center mt-12 gap-28'>
      <header>
        <h1 className='text-3xl underline'>CONTROL DE BOTÓNES</h1>
      </header>
      {error && <p className='text-red-500'>{error}</p>}
      <CreationForm onDataUpdate={setData} />
      <Button onDataUpdate={setData} data={data} />
    </div>
  )
}

export default App
