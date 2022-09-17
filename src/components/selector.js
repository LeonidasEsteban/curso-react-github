import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--button-bg);
  color: var(--white);
  padding-inline: 1rem;
`

function Selector({ children }) {
  return (
    <SelectorStyled>
      {children}
    </SelectorStyled>
  )
}

export default Selector
