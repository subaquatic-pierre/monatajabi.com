import React from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";
import { IconAlternate, SectionHeader } from "components/molecules";
import { DescriptionListIcon, Section } from "components/organisms";
import image1 from "assets/images/IMG_3627.jpg";
import image2 from "assets/images/IMG_3612.jpg";
import image3 from "assets/images/IMG_3631.jpg";

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: "fas fa-heart",
    title: "Latest News",
    image: image1,
    subtitle: "Keep up to date with the latest news.",
  },
  {
    icon: "fab fa-sketch",
    title: "Latest Events",
    image: image2,
    subtitle: "Check out and visit during the latest events.",
  },
  {
    icon: "fa fa-calculator",
    title: "Up To Date",
    image: image3,
    subtitle:
      "Everything you need to know in one place, up to date news and events.",
  },
];
const Services = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Join me for the latest events&nbsp;
      <Typography component="span" variant="inherit" color="primary">
        and reviews
      </Typography>
    </Typography>
  );

  const subtitle =
    "This is where you can experience the latest of what is happening.";

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: "h2",
            color: "textPrimary",
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={"fade-up"}>
              <DescriptionListIcon
                align="center"
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={theme.palette.primary.main}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default Services;
