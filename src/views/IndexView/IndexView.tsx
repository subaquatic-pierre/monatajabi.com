import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import { Section, SectionAlternate, Footer } from "components/organisms";
import {
  ConnectWithMe,
  Features,
  Reviews,
  QuickStart,
  Services,
  Hero,
} from "./components";

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    "& .section-alternate__content": {
      paddingBottom: 0,
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
    <div>
      <Hero themeMode={themeMode} />
      <Services />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section>
        <Reviews />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section id="connectSection">
        <ConnectWithMe />
      </Section>
      <Footer />
    </div>
  );
};

export default IndexView;
