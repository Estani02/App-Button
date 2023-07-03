import { useState } from 'react'
import api from '../api'
import { CardInput } from './CardInput'
import { ButtonStyled } from './ButtonStyled'

interface Props {
  onDataUpdate: (data: any) => void
}

const defaultData = {
  name: '',
  text: '',
  colorDefault: '',
  colorHover: '',
  colorText: '',
  size: 'md',
  icon: ''
}

export const CreationForm = ({ onDataUpdate }: Props) => {
  const [data, setData] = useState(defaultData)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api.post('/buttons', data).then(() => {
      api.get('/buttons').then((res) => {
        onDataUpdate(res.data)
      })
      setData(defaultData)
    })
      .catch((err) => {
        setError(err.response.data.error)
        console.log(error);

      })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-10'>
      <ButtonStyled
        colorDefault={data.colorDefault}
        colorText={data.colorText}
        colorHover={data.colorHover}
        className={`${data.size === 'sm' ? 'py-2 px-4 text-sm' : data.size === 'md' ? 'py-3 px-6 text-md' : 'py-4 px-8 text-lg'} rounded-md w-fit transition-colors duration-300 flex`}
      >
        {data.icon && <img src={data.icon} alt={data.name} className="w-5 h-5 mr-2" />}
        {data.text}
      </ButtonStyled>
      <div className="flex flex-row items-end gap-10">
        <CardInput
          handleChange={handleChange}
          value={data.name}
          label='Nombre'
          name='name'
          placeholder='Nombre del botón'
        />
        <CardInput
          handleChange={handleChange}
          value={data.text}
          label='Texto'
          name='text'
          placeholder='Texto del botón'
        />
        <CardInput
          handleChange={handleChange}
          value={data.colorDefault}
          type='color'
          label='Color'
          name='colorDefault'
          placeholder='Color del botón'
        />
        <CardInput
          handleChange={handleChange}
          value={data.colorHover}
          type='color'
          label='Color Hover'
          name='colorHover'
          placeholder='Color Hover del botón'
        />
        <CardInput
          handleChange={handleChange}
          value={data.colorText}
          type='color'
          label='Color Texto'
          name='colorText'
          placeholder='Color del texto del botón'
        />

        <div className="flex flex-col gap-2 items-center">
          <label htmlFor="size">* Tamaño</label>
          <select
            value={data.size}
            onChange={handleChange}
            className="border border-solid"
            name="size"
            id="size"
            defaultValue={data.size}
          >
            <option value="sm">Pequeño</option>
            <option value="md">Mediano</option>
            <option value="lg">Grande</option>
          </select>
        </div>

        <CardInput
          handleChange={handleChange}
          value={data.icon}
          label='Icono'
          name='icon'
          placeholder='Dirección del imagen'
        />
      </div>
      {error && <span className="text-red-500">*{error}</span>}
      <button className="bg-[#74d95d] text-white py-2 px-4 rounded-md w-fit hover:bg-[#5ba34b] transition-colors duration-300">Crear botón</button>
    </form>
  )
}
