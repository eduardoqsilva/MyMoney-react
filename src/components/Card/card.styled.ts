import styled, { css } from "styled-components";

interface CardStyledType {
  positive: boolean
  variation: '01' | '02'
}

export const CardStyled = styled.div<CardStyledType>`
  width: 100%;
  height: 137px;
  border-radius: 6px;
  padding: 24px;
  
  font-family: 'Roboto', sans-serif;
  background-color: #323238;
  color: #E1E1E6;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${(props) => props.variation === '01' ? ''
    : `${props.positive 
          ? `border: 2px solid #00b37e;`
          : `border: 2px solid #F75A68;`
        }`
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & svg {
      ${(props) => props.variation === '01' 
        ? `color: ${ props.positive ? '#00b37e' : '#F75A68'};
          ${props.positive ? '' 
          : css`transform: rotate(180deg);`};`
        : css`color: #E1E1E6;`
      }
    }
  }
  & h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 140%;
    color:${(props) => props.variation === '01' ? ''
      : `${props.positive 
          ? `#00b37e`
          : `#F75A68`
        }`
    };
  }
`