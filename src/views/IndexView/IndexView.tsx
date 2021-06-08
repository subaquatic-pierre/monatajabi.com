import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import { Section, SectionAlternate, Footer } from "components/organisms";
import { ConnectWithMe, Promotion, Services, Hero } from "./components";

const useStyles = makeStyles(() => ({
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
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
