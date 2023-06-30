
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
        className={`border border-solid h-fit rounded-lg ${type === 'color' ? 'h-[40px] w-[40px] ' : 'px-2 py-1'}`}
      />
    </div>
  )
}
