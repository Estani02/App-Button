
export interface DataButton {
  id: number
  name: string
  colorDefault: string
  colorHover: string
  colorText: string
  size: string
  text: string | null
  icon: string | null
  clicks: number
}

export interface Props {
  data: DataButton[]
  onDataUpdate: (data: any) => void
}