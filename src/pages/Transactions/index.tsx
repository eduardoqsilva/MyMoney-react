import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { Overlay } from "../../components/Overlay";
import { Search } from "../../components/Search";
import { Status } from "../../components/Status";
import { ItemContainer } from "./Transactions.styled";


export interface ListType {
  title: string
  value: number
  tag: string
  date: string
}

export function Transactions() {

  const [list, setList] = useState<ListType[]>([
    {title: 'Salário', value: 5000, tag: 'Salário', date: '10/04/2023'},
    {title: 'Fone de ouvido', value: -500, tag: 'Compras', date: '18/04/2023'}
  ])
  const [search, setSearch] = useState('')
  const [overlay, setOverlay] = useState(false)

  const filterList = list.filter((item) => {
    if(item.title.toLowerCase().includes(search) 
        || item.tag.toLowerCase().includes(search)) {
      return item
    }
  })
  
  function handleSetItemList(value:ListType) {
    setList(prev => [value, ...prev])
  }

  // useEffect(() => {console.table(filterList)},[filterList])

  return (
    <div>
      <Overlay setList={handleSetItemList} show={overlay} setShow={setOverlay}/>
      <Header setShow={setOverlay}/>
      <Status list={list}/>
      <Search setSearch={setSearch}/>
      <ItemContainer>
        {filterList.map((item, i) => {
          return (
            <Item
              key={i + item.title}
              title={item.title}
              value={item.value}
              tag={item.tag}
              date={item.date}
            />
          )
        })}    
      </ItemContainer>
    </div>
  )
}