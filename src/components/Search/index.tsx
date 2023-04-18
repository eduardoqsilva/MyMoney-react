import { FileSearch, MagnifyingGlass } from "@phosphor-icons/react";
import { ChangeEvent } from "react";
import { SearchButton, SearchInput, SearchWrapperStyled } from "./search.styled";

interface SearchType {
  setSearch: (str:string) => void
}

let value = ''

export function Search({setSearch}:SearchType) {

  const current = (e:ChangeEvent<HTMLInputElement>) => {
    value = e.currentTarget.value
  }

  return (
    <SearchWrapperStyled>
      <SearchInput  placeholder="Busque uma transação"  onChange={(e) => current(e)}/>
      <SearchButton onClick={() => setSearch(value.trim())}>
        <MagnifyingGlass weight="bold" size={20}/>
        Buscar
      </SearchButton>
    </SearchWrapperStyled>
  )
}