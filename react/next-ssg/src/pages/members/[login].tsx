import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Members({ user }) {
  const { isFallback } = useRouter();

  return (
    <Fragment>
      {isFallback ? (
        <div>Carregando dados</div>
      ) : (
        <Fragment>
          <div>{user.name}</div>
          <img
            src={user.avatar_url}
            alt="login"
            width="80"
            style={{ borderRadius: "50%" }}
          />
          <div>{user.bio}</div>
        </Fragment>
      )}
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://api.github.com/orgs/rocketseat/members`
  );

  const data = await response.json();

  const paths = data.map((member: any) => {
    return {
      params: { login: member.login },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { login } = ctx.params;

  const response = await fetch(`https://api.github.com/users/${login}`);

  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
};
