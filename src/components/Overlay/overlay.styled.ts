import styled from "styled-components";


interface ContainerStyledType {
  show: boolean
}
export const ContainerStyled = styled.div<ContainerStyledType>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease-in;
  ${(props) => props.show ? '' : 'display: none;'}
`

export const FormStyled = styled.form`
  width: 100%;
  max-width: 500px;
  height: 478px;
  background-color: #202024;
  border-radius: 6px;
  padding: 3rem;
  
  font-family: 'Roboto';
  color: #fdfdfd;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`
export const InputModal = styled.input`
  width: 100%;
  background: #121214;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 1rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  color: #fdfdfd;

  &::placeholder {
    color: #7C7C8A;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`
export const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;  
`
export const Radio = styled.div`
  width: 100%;
  height: 50px; 
  background: #29292e;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  & input[type='radio'] {
    appearance: none;
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;

    &:checked {
      border: 2px solid #00B37E;
      border-radius: 6px;
    }
  }
`

export const ButtonStyled = styled.button`
  background: #00875F;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: #fdfdfd;

  &:active {
    transition: scale 0.2s ease-in;
    transform: scale(0.95);
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  padding: 0.2rem;
  color: #7C7C8A;
  border: none;

  position: absolute;
  top: 1rem;
  right: 1rem;
`