import { Stack } from "@chakra-ui/react";
import Head from "next/head";

import CoffeList from "../components/CoffeList";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Delivery | Home</title>
      </Head>
      <Stack maxWidth={1440} paddingInline={24}>
        <Header />
        <Banner />
        <CoffeList />
      </Stack>
    </>
  );
}
