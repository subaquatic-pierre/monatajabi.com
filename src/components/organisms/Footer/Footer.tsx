import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  copy: {
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  footerContainer: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "center",
    minHeight: "100px",
    "& > a": {
      textDecoration: "none",
      color: theme.typography.body1,
    },
    "& > a:hover": {
      textTransform: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Grid container justify="center" direction="column" alignContent="center">
        <Box marginBottom={2}>
          <Typography align="center" className={classes.copy} variant="h6">
            &copy; Mona Tajarbi
          </Typography>
        </Box>
        <Box>
          <Typography align="center" variant="subtitle2" color="inherit">
            <a
              href="https://subaquatic-pierre.com"
              target="_blank"
              rel="noreferrer"
            >
              design &#64; subaquatic-pierre
            </a>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Footer;
