import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 212px;
  background-color: #121214;
`
export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fdfdfd;
  padding: 2rem 1.5rem;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: #FFFFFF;

  & button {
    padding: 0.66rem 1.25rem;
    background-color: #00875F;
    border-radius: 6px;
    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: #FFFFFF;

    &:active {
      transform: scale(0.95);
      transition: scale 0.2s ease-in;
    }
  }
`
