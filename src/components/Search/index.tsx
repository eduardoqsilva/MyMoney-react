import { FileSearch, MagnifyingGlass } from "@phosphor-icons/react";
import { SearchButton, SearchInput, SearchWrapperStyled } from "./search.styled";

export function Search() {
  return (
    <SearchWrapperStyled>
      <SearchInput  placeholder="Busque uma transação" />
      <SearchButton>
        <MagnifyingGlass weight="bold" size={20}/>
        Buscar
      </SearchButton>
    </SearchWrapperStyled>
  )
}