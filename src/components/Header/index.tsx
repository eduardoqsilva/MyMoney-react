import { Container, HeaderStyled } from "./header.styled";

interface HeaderType {
  setShow: (value:boolean) => void
}
export function Header({setShow}:HeaderType) {
  return (
      <Container>
        <HeaderStyled>
          <h2>My Money</h2>
          <button onClick={() => setShow(true)}>Adicionar</button>
        </HeaderStyled>
      </Container>
   
  )
}