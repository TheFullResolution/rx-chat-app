import styled from 'react-emotion'

export const Button = styled('button')`
  padding: ${props => props.theme.marginS} ${props => props.theme.marginM};
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.backgroundColor};
  border-radius: 3px;
  font-size: inherit;
  &:hover {
      background-color: ${props => props.theme.primaryColorHover};
  }
`
