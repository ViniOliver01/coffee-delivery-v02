import { Stack, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "./Card";

interface CoffeeProps {
  id: number;
  type: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

export default function CoffeList() {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]);
  console.log("🚀 / CoffeList / coffeeList", coffeeList);

  useEffect(() => {
    api
      .get("/coffee")
      .then((response) => setCoffeeList(response.data))
      .catch((erro) => {
        console.error("Erro: " + erro);
      });
  }, []);
  return (
    <Stack paddingBlock={8}>
      <Heading marginBottom={14}>Nossos cafés</Heading>
      <Grid rowGap={16} columnGap={8} templateColumns="repeat(3, 1fr)">
        {coffeeList.map((coffee) => {
          return <Card coffee={coffee} />;
        })}
      </Grid>
    </Stack>
  );
}
