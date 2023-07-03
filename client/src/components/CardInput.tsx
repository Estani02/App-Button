
interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  value: string
  label: string
  name: string
  placeholder: string
  type?: string
}

export const CardInput = ({ handleChange, value, label, name, placeholder, type = 'text' }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <label htmlFor={name}>{name !== 'icon' ? `* ${label}` : label}</label>
      <input
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`border border-solid rounded-lg ${type === 'color' ? 'h-10 w-10' : 'px-2 py-1 h-fit'}`}
      />
    </div>
  )
}
