import styled from 'styled-components'

const LayoutStyled = styled.main`

`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
