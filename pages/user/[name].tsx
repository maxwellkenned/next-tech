import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

const UserId = ({ name }) => {

  return <h1>Name: {name}</h1>;
};

export default UserId;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { name: "1" } },
        { params: { name: "2" } },
        { params: { name: "3" } },
      ]

  return {
    paths ,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
  const {name} = params

  return {
    props: {
      name
    },
  };
};
