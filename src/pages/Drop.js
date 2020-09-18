import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page>
      <Container>
        <Grid>
          <Typography variant="h3">Drop page</Typography>
          <Typography variant="body1">
            Dropdown routes are supported in <b>mobile and desktop</b>.
          </Typography>
        </Grid>
      </Container>
    </Page>
  );
}
