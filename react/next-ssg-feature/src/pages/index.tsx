import { Fragment } from "react";
import { GetStaticProps } from "next";

export default function Home({ org }) {
  return (
    <Fragment>
      <h1>GitHub - {org.login}</h1>
      <h3>{org.description}</h3>
      <p>
        <a href={org.blog}>{org.blog}</a>
      </p>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await fetch("https://api.github.com/orgs/rocketseat");

  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10,
  };
};
