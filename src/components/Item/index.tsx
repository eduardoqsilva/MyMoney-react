import { TagSimple } from "@phosphor-icons/react";
import { Format } from "../../constants/format";
import { DateStyled, ItemWrapperStyled, TagStyled, TextTitleStyled, ValueStyled } from "./item.styled";

interface ItemType {
  title: string
  value: number
  tag: string
  date: string
}
export function Item({title, value, tag, date}:ItemType) {
  const positive = value < 0 ? false : true

  return (
    <ItemWrapperStyled>
      <TextTitleStyled>
        {title}
      </TextTitleStyled>
      <ValueStyled positive={positive}>
        {Format.format(value)}
      </ValueStyled>
      <TagStyled>
        <TagSimple size={25}/>
        {tag}
      </TagStyled>
      <DateStyled>
        {date}
      </DateStyled>
    </ItemWrapperStyled>
  )
}