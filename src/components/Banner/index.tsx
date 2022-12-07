import { Box, Flex, Heading, Text, Grid, Image, Center } from "@chakra-ui/react";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import IconBox from "./IconBox";

export default function Banner() {
  return (
    <Center
      height="544px"
      backgroundImage={"url('./Background.svg')"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Grid height="544px" paddingBlock={8} templateColumns="repeat(2, 1fr)" gap={14}>
        <Box>
          <Heading fontSize={"title.XL"} color="base.title">
            Encontre o café perfeito para qualquer hora do dia
          </Heading>
          <Text fontSize={"text.RegularL"} color="base.subtitle" marginTop={4}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Text>
          <Grid marginTop={16} templateColumns="repeat(2, 1fr)" rowGap={5} columnGap={10}>
            <IconBox text="Compra simples e segura" icon={ShoppingCart} bgcolor="yellow.dark" />
            <IconBox text="Embalagem mantém o café intacto" icon={Package} bgcolor="base.text" />
            <IconBox text="Entrega rápida e rastreada" icon={Timer} bgcolor="yellow.mid" />
            <IconBox text="O café chega fresquinho até você" icon={Coffee} bgcolor="purple.mid" />
          </Grid>
        </Box>
        <Center>
          <Image src="./home-cover.png" />
        </Center>
      </Grid>
    </Center>
  );
}
