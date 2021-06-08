import React from "react";
import { makeStyles, Grid, colors, Container } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { CardPromo } from "components/organisms";

const useStyles = makeStyles(theme => ({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  headerSection: {
    maxWidth: "600px",
  },
  fontWeight900: {
    fontWeight: 900,
  },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    "& > div": {
      minWidth: "250px",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(8),
    },
  },
}));

const ConnectWithMe = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  const title = "Connect with me";
  const subtitle =
    "Follow me on any of my social media channels to stay up to date with the latest news and events";
  return (
    <>
      <div className={classes.headerContainer} {...rest}>
        <SectionHeader
          className={classes.headerSection}
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: "h2",
            color: "textPrimary",
            className: classes.fontWeight900,
          }}
        />
      </div>
      <Container maxWidth="xl">
        <Grid container className={classes.sectionContainer} spacing={4}>
          <Grid item xs={12} sm={3}>
            <CardPromo
              link="https://instagram.com/mona_tajarbi?utm_medium=copy_link"
              align="center"
              subtitle="Instagram"
              description="Follow me on Instagram for my latest pictures."
              fontIconClass="fab fa-instagram fa-4x"
              color={colors.deepOrange}
              variant="outlined"
              withShadow
              liftUp
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardPromo
              align="center"
              link="https://vm.tiktok.com/ZMeEkMAmc/"
              subtitle="TikTok"
              description="Follow my latest TikTok videos and get the latest content."
              fontIconClass="fab fa-tiktok fa-3x"
              color={colors.deepPurple}
              variant="outlined"
              withShadow
              liftUp
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardPromo
              align="center"
              link="https://wa.me/message/ACOQXTRL4LMCL1"
              subtitle="WhatsApp"
              description="Message me directly on WhatsApp for any further details."
              fontIconClass="fab fa-whatsapp fa-4x"
              color={colors.green}
              variant="outlined"
              withShadow
              liftUp
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardPromo
              align="center"
              link="https://www.snapchat.com/add/tajarbi-live"
              subtitle="Snapchat"
              description="Check out my latest snaps on Snapchat and stay up to date."
              fontIconClass="fab fa-snapchat-ghost fa-4x"
              color={colors.amber}
              variant="outlined"
              withShadow
              liftUp
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ConnectWithMe;
