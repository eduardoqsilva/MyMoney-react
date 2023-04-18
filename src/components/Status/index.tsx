import { Card } from "../Card";
import { Grid, StatusContainer } from "./Status.style";

export function Status() {
  return (
    <StatusContainer>   
      <Grid>
        <Card 
          value={17000}
          legend={'Entradas'}
          positive={true}
          variation={'01'}
        />
        <Card 
          value={17000}
          legend={'Saídas'}
          positive={false}
          variation={'01'}
        />
        <Card 
          value={17000}
          legend={'Total'}
          positive={true}
          variation={'02'}
        />
      </Grid>
    </StatusContainer>
  )
}