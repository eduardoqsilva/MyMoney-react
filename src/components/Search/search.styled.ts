import styled from "styled-components";

export const SearchWrapperStyled = styled.div`
  display: flex;
  gap: 1rem;
  
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  margin: 0 auto;
  margin-top: 2rem;
`
export const SearchInput = styled.input`
  background: #121214;
  border-radius: 6px;
  padding: 1rem;
  border: none;
  outline: none;
  caret-color: #fdfdfd;
  color: #fdfdfd;
  flex: 1;
  
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;

  &::placeholder {
    color: #7C7C8A;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`
export const SearchButton = styled.button`
  padding: 0.875rem 2rem;
  border: 2px solid #00B37E;
  border-radius: 6px;
  background: transparent;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: #00B37E;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: all 0.1s ease-in;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 580px) {
    padding: 0.6rem 0.4rem;
  }
`