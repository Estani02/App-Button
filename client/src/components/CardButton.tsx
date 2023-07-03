import api from "../api"
import { Props } from "../interfaces"
import { ButtonStyled } from "./ButtonStyled"

const CardButton = ({ data, onDataUpdate }: Props) => {

  const handleClick = (id: number) => {
    api.post(`/buttons/${id}/clicks`).then(() => {
      api.get('/buttons').then((res) => {
        onDataUpdate(res.data)
      })
    })
  }

  const handleDelete = (id: number) => {
    api.delete(`/buttons/${id}`).then(() => {
      api.get('/buttons').then((res) => {
        onDataUpdate(res.data)
      })
    })
  }

  return (
    <div className="grid grid-cols-3 px-16 gap-36">
      {data.map((button) =>
      (
        <div className="flex flex-col w-fit px-4 justify-center items-center gap-2 border border-solid py-5 relative rounded-md" key={button.id}>
          <button onClick={() => handleDelete(button.id)} className="absolute top-1 right-1 bg-red-600 hover:bg-red-400 transition-colors duration-200 text-white px-2 rounded-md">X</button>
          <h3>{button.name}</h3>
          <div className="h-12 w-full flex flex-col justify-center items-center">
            <span className="text-sm whitespace-nowrap">Número de Cliks</span>
            <span className="text-red-700 uppercase">{button.clicks}</span>
          </div>
          <ButtonStyled
            onClick={() => handleClick(button.id)}
            className={`${button.size === 'sm' ? 'py-2 px-4 text-sm' : button.size === 'md' ? 'py-3 px-6 text-md' : 'py-4 px-8 text-lg'} rounded-md w-fit transition-colors duration-300 flex`}
            colorDefault={button.colorDefault}
            colorText={button.colorText}
            colorHover={button.colorHover}
          >
            {button.icon && <img src={button.icon} alt={button.name} className="w-5 h-5 mr-2" />}
            {button.text}
          </ButtonStyled>
        </div>
      ))}
    </div>
  )
}

export default CardButton