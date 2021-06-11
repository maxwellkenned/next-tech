import { GetStaticProps } from "next";

const HelloWord = ({ name }) => {
  return <h1>Hello World, {name}</h1>;
};

export default HelloWord;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: "Maxwell Steel",
    },
  };
};
