import Head from "next/head";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Hulu 2.0 </title>
      </Head>
      <Header />
      <Nav />
    </div>
  );
}
