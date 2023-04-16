import { ArrowCircleUp, Coins } from "@phosphor-icons/react";
import { CardStyled } from "./card.styled";


interface CardType {
  value: string
  positive?: boolean
  variation?: '01' | '02'
  legend: string
}
export function Card({ value, positive = true, variation = '01', legend }:CardType) {
  return (
    <CardStyled variation={variation} positive={positive}>
      <div>
        <span>{legend}</span>
        { variation === '01' ? <ArrowCircleUp size={32}/> : <Coins size={32}/>} 
      </div>
      <h2>R$ {value}</h2>
    </CardStyled>
  )
}