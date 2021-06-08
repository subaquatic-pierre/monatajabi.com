import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import { Section, SectionAlternate, Footer } from "components/organisms";
import { ConnectWithMe, Promotion, Services, Hero } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    "& .section-alternate__content": {
      [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
        paddingBottom: "10px",
      },
      "& .hero-shaped__right-side": {
        [theme.breakpoints.down("sm")]: {
          minHeight: "200px",
        },
      },
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero themeMode={themeMode} />
      <Services />
      <SectionAlternate>
        <Promotion />
      </SectionAlternate>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section data-aos="fade-up" id="connectSection">
        <ConnectWithMe />
      </Section>
      <Footer />
    </div>
  );
};

export default IndexView;
