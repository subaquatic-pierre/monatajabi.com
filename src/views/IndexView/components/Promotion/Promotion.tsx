import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Typography } from "@material-ui/core";
import { HeroSideImage } from "components/organisms";
import image1 from "assets/images/IMG_3634.jpg";
import image2 from "assets/images/IMG_3629.jpg";
import image3 from "assets/images/IMG_3626.jpg";

const useStyles = makeStyles(theme => ({
  sideImageSection: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5, 0),
    },
  },
}));

const Promotion = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <div className={classes.sideImageSection}>
        <HeroSideImage data-aos="fade-right" imageSrc={image1}>
          <Grid container data-aos="fade-left" spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                Something important about this event
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                This is where we can add a few more words about what is
                happening and how to get involved.
              </Typography>
            </Grid>
          </Grid>
        </HeroSideImage>
      </div>
      <div className={classes.sideImageSection}>
        <HeroSideImage reverse data-aos="fade-left" imageSrc={image2}>
          <Grid container data-aos="fade-right" spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                Something important about this event
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                This is where we can add a few more words about what is
                happening and how to get involved.
              </Typography>
            </Grid>
          </Grid>
        </HeroSideImage>
      </div>
      <div className={classes.sideImageSection}>
        <HeroSideImage data-aos="fade-right" imageSrc={image3}>
          <Grid container data-aos="fade-left" spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                Something important about this event
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ color: isMd ? "inherit" : "white" }}
              >
                This is where we can add a few more words about what is
                happening and how to get involved.
              </Typography>
            </Grid>
          </Grid>
        </HeroSideImage>
      </div>
    </div>
  );
};

export default Promotion;
