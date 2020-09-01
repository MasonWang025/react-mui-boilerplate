import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

export default function About() {
  return (
    <div className="home page">
      <Box
        style={{
          height: `calc(100vh - ${window.innerWidth > 600 ? 64 : 56}px)`,
        }}
      >
        <Container>
          <Grid>
            <Typography variant="h3">About page</Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              illum.
            </p>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
