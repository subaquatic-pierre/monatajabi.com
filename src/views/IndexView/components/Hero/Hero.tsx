import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { SectionHeader, TypedText } from "components/molecules";
import { HeroShaped } from "components/organisms";
import image from "assets/images/IMG_3613.jpg";

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    "& .section-header__cta-container": {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        "& .section-header__cta-item-wrapper": {
          width: "100%",
          "&:last-child": {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          "& .MuiButtonBase-root": {
            width: "100%",
          },
        },
      },
    },
  },
  heroShaped: {
    "& .hero-shaped__image": {
      backgroundColor: "white",
    },
    [theme.breakpoints.down("sm")]: {
      "& .hero-shaped__image": {
        position: "relative",
      },
      "& .hero-shaped__wrapper": {
        flexDirection: "column",
      },
    },
  },
  image: {
    background: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "450px auto",
    backgroundPosition: "40% 10%",
    height: "100%",
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      minHeight: "500px",
      backgroundSize: "800px auto",
    },
  },
}));

const Hero = ({
  themeMode = "light",
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const handleConnectClick = () => {
    const el = document.getElementById("connectSection");
    window.scrollTo(el.offsetLeft, el.offsetTop);
  };

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Welcome to the home of
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="primary"
        className={classes.fontWeight900}
        typedProps={{
          strings: ["Mona Tajarbi"],
          typeSpeed: 70,
        }}
      />
    </Typography>
  );

  const subtitle =
    "Follow me on all my social media channels to stay up to date with the latest releases and reviews.";

  const docsButton = (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      onClick={handleConnectClick}
    >
      Follow Me
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: "h2",
        color: "textPrimary",
      }}
      ctaGroup={[docsButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={<div className={clsx(classes.image)} />}
      />
    </div>
  );
};

export default Hero;
