import { Card } from "../Card";
import { Grid, StatusContainer } from "./Status.style";
import { ListType } from "../../pages/Transactions";


interface TypeStatus {
  list: ListType[]
}


export function Status({ list }:TypeStatus) {
  let values = [0,0,0]

  list.map((i) => {
    if(i.value > 0) {
      values[0] = values[0] + i.value
    }else {
      values[1] = values[1] + i.value
    }
    values[2] = values[2] + i.value
  })

  return (
    <StatusContainer>   
      <Grid>
        <Card 
          value={values[0]}
          legend={'Entradas'}
          positive={values[0] > 1}
          variation={'01'}
        />
        <Card 
          value={values[1]}
          legend={'Saídas'}
          positive={values[1] > 1}
          variation={'01'}
        />
        <Card 
          value={values[2]}
          legend={'Total'}
          positive={values[2] > 1}
          variation={'02'}
        />
      </Grid>
    </StatusContainer>
  )
}