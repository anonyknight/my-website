import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import BookSVG from "@site/static/img/book.svg";
import BlogSVG from "@site/static/img/blog.svg";

import PropTypes from "prop-types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Techs",
    image: <BookSVG />,
    description: "My software engineering career structured notes",
    path: "/docs/techs",
  },
  {
    title: "Readings",
    image: <BookSVG />,
    description: "My life-long learning structured notes",
    path: "/docs/readings",
  },
  {
    title: "Blogs",
    image: <BlogSVG />,
    description: "My random thoughts about study, work and life.",
    path: "/blog",
  },
  //   {
  //     title: "About Me",
  //     image: (
  //       <img
  //         src={require("@site/static/img/DinganWang.jpg").default}
  //         className={styles.featureImg}
  //       />
  //     ),
  //     description: <>Welcome to my Internet home.</>,
  //     path: "/about_me",
  //   },
];

function Feature({ image, title, description, path }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{image}</div>
      <div className="text--center">
        <Link className="rounded-lg" to={path}>
          <Heading as="h1">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function getFeature(props) {
  return (
    <Feature
      key={props.title}
      image={props.image}
      title={props.title}
      description={props.description}
      path={props.path}
    />
  );
}

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => getFeature(props))}
        </div>
      </div>
    </section>
  );
}

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} />
      </div>
    </header>
  );
}
