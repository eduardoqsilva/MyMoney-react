import { ArrowCircleUp, Coins } from "@phosphor-icons/react";
import { Format } from "../../constants/format";
import { CardStyled } from "./card.styled";


interface CardType {
  value: number
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
      <h2>{Format.format(value)}</h2>
    </CardStyled>
  )
}