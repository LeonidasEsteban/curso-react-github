import { isValidElement } from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.button`
  font: var(--button);
  border-radius: .5rem;
  padding-block: .25rem;
  background: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  min-inline-size: 135px;
  gap: .5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    background: var(--white);
    color: var(--button);
  }
`

function Button({ text, link, className, icon }) {
  const component = link ? 'a' : 'button'
  let IconComponent = null
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export default Button
