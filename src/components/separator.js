import styled from 'styled-components'

const SeparatorStyled = styled.div`
  border-block-end: 1px solid var(--grey);
  margin-block: 1.5rem;
`

function Separator() {
  return (
    <SeparatorStyled>
    </SeparatorStyled>
  )
}

export default Separator
