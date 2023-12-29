import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ expanseTotal, incomeTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" label="Income:" value={incomeTotal} />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color="red"
              label="Expences:"
              value={expanseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
