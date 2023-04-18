import { Container, HeaderStyled } from "./header.styled";

export function Header() {
  return (
      <Container>
        <HeaderStyled>
          <h2>My Money</h2>
          <button>Adicionar</button>
        </HeaderStyled>
      </Container>
   
  )
}