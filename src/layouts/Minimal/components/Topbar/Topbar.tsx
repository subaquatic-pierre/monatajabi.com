import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Toolbar, Typography, Button } from "@material-ui/core";
import logoSmall from "assets/images/logo-small.png";
import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 8),
    },
  },
  logoContainer: {
    width: 40,
    height: 40,
    [theme.breakpoints.up("md")]: {
      width: 60,
      height: 60,
    },
  },
  logoText: {
    padding: theme.spacing(0, 2),
    "& a:hover": {
      textDecoration: "none",
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  connectButton: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
}));

interface Props {
  themeMode: string;
  className?: string;
}

const Topbar = ({ themeMode, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const handleConnectClick = () => {
    const el = document.getElementById("connectSection");
    window.scrollTo(el.offsetLeft, el.offsetTop);
  };

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="Mona Tajabi">
          <Image
            className={classes.logoImage}
            src={logoSmall}
            alt="Mona Tajabi"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.logoText}>
        <Link href="/">
          <Typography variant="h4" color="secondary">
            Mona Tajarbi
          </Typography>
        </Link>
      </div>
      <Button
        onClick={handleConnectClick}
        variant="contained"
        className={classes.connectButton}
        color="primary"
      >
        Connect
      </Button>
    </Toolbar>
  );
};

export default Topbar;
