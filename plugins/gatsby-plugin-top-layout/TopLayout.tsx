import React from "react";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "leaflet/dist/leaflet.css";
import "assets/css/index.css";
import socialImage from "assets/social.jpg";
import favicon from "assets/favicon.ico";

import "swiper/css/swiper.min.css";
import "aos/dist/aos.css";

interface Props {
  children?: React.ReactNode;
}

export default function TopLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Basic page info */}
        <title>Home - Mona Tajarbi</title>
        <meta name="description" content="Home of Mona Tajarbi" />
        <link rel="shortcut icon" href={favicon} />

        {/* Open graph meta tags */}
        <meta property="og:title" content="Home - Mona Tajarbi" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:description" content="Home of Mona Tajarbi" />
        <meta property="og:url" content="https://www.monatajarbi.com/" />

        {/* Fonts */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600,300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo&family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      {children}
    </React.Fragment>
  );
}
