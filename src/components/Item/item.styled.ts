import styled from "styled-components";

export const ItemWrapperStyled = styled.div`
  width: 100%;

  background-color: #29292e;
  border-radius: 6px;

  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 100px;
  grid-template-rows: 100%;
  align-items: center;
  padding: 24px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: #C4C4CC;
`
export const TextTitleStyled = styled.span`

`
interface ValueType {
  positive: boolean
}
export const ValueStyled = styled.span<ValueType>`
  color: ${(props) => props.positive? '#00B37E' : '#F75A68'};
`
export const TagStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  & svg {
    display: none;
  }

  @media (max-width: 600px) {
    & svg {
      display: block;
    }
  }
`
export const DateStyled = styled.span`
  justify-self: end;
`