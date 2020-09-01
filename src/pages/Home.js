import React from "react";
import { Button, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div className="home page">
      <Typography>Home Page</Typography>
      <Button variant="outlined" color="secondary">
        First button
      </Button>
    </div>
  );
}
