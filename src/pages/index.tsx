import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Delivery | Home</title>
      </Head>
      <Header />
    </>
  );
}
