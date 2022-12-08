import { Grid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import AddressList from "../components/Checkout/AddressList";
import Card from "../components/Checkout/Card";
import { BiMap } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";

import Header from "../components/Header";

const addressList = [
  {
    id: 0,
    name: "Casa",
    address: "Rua João Daniel Martinelli, 102, Farrapo - Porto Alegre, RS",
  },
  {
    id: 1,
    name: "Trabalho",
    address: "Rua João Daniel Martinelli, 102, Farrapo - Porto Alegre, RS",
  },
];

export default function checkout() {
  return (
    <>
      <Head>
        <title>Coffee Delivery | Home</title>
      </Head>
      <Stack maxWidth={1440} paddingInline={24}>
        <Header />
        <Grid templateColumns="2fr 1fr">
          <Stack>
            <Card
              title="Endereço de Entrega"
              description="Selecione o endereço onde deseja receber seu pedido"
              icon={BiMap}
              iconColor="yellow.dark"
            >
              <AddressList addressList={addressList} />
            </Card>
            <Card
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={FiDollarSign}
              iconColor="purple.mid"
            >
              {/* <PaymentSelect /> */}
            </Card>
          </Stack>
        </Grid>
      </Stack>
    </>
  );
}
