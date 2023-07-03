import { ButtonStyledProps } from "../interfaces"
import styled from "styled-components"

export const ButtonStyled = styled.button<ButtonStyledProps>`
background-color: ${props => props.colorDefault};
color: ${props => props.colorText};
&:hover {
  background-color: ${props => props.colorHover};
}
`