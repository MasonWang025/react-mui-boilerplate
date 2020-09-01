import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Box,
  Container,
  Fab,
  Zoom,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MUI Boilerplate
          </Typography>
          <Hidden xsDown>
            <Button color="inherit">Login</Button>
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          {[...new Array(50)]
            .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
            .join("\n")}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} className={classes.backToTop}>
        {children}
      </div>
    </Zoom>
  );
}
