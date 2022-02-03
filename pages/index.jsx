import Head from "next/head";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Results } from "../components/Result";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div className="">
      <Head>
        <title> Hulu 2.0 </title>
      </Head>
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
