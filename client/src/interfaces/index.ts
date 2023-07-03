import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

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

export interface ButtonStyledProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  colorDefault?: string;
  colorText?: string;
  colorHover?: string;
  size?: 'sm' | 'md' | 'lg';
}