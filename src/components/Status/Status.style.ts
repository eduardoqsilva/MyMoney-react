import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -70px;

  @media only screen and (min-width: 600px) {
    ::-webkit-scrollbar {
      width: 30px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #35363a;
    }
  }

  @media (max-width: 900px) {
    justify-content: start;
    overflow-x: scroll;  
  }
`

export const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 900px;
  padding: 0.5rem 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
`