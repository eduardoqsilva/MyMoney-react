import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { Search } from "../../components/Search";
import { Status } from "../../components/Status";
import { ItemContainer } from "./Transactions.styled";

export function Transactions() {
  return (
    <div>
      <Header />
      <Status />
      <Search />
      <ItemContainer>
        <Item 
          title={"Salário"}
          value={5000}
          tag={"salário"}
          date={"20/04/2023"}
        />
        <Item 
          title={"Salario"}
          value={5000}
          tag={"salário"}
          date={"20/04/2023"}
        />
      </ItemContainer>
    </div>
  )
}