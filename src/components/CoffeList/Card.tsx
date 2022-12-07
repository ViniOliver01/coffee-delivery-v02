import { Badge, Flex, VStack, Image, Heading, Text, Center } from "@chakra-ui/react";
import Button from "./Button";
import Select from "./Select";

interface CoffeeProps {
  coffee: {
    id: number;
    type: string[];
    name: string;
    image: string;
    description: string;
    price: number;
  };
}

export default function Card({ coffee }: CoffeeProps) {
  return (
    <VStack
      backgroundColor="base.card"
      width={"256px"}
      borderRadius="6px 36px 6px 36px"
      paddingInline={5}
      paddingBottom={5}
    >
      <Image src={coffee.image} marginTop={"-10%"} />
      <Flex gap={1}>
        {coffee.type.map((type) => {
          return (
            <Badge
              color="yellow.dark"
              backgroundColor="yellow.light"
              paddingInline={2}
              paddingBlock={1}
              borderRadius={99}
            >
              {type}
            </Badge>
          );
        })}
      </Flex>

      <Heading fontSize={"title.S"} color={"base.subtitle"}>
        {coffee.name}
      </Heading>
      <Text fontSize={"text.RegularS"} color={"base.label"} textAlign="center">
        {coffee.description}
      </Text>
      <Center gap={2}>
        <Text fontSize={"text.BoldL"} fontWeight={"bold"}>
          R$
        </Text>
        <Heading fontSize={"title.L"}>
          {/* {coffee.price} */}
          9,90
        </Heading>
      </Center>
      <Select />
      <Button />
    </VStack>
  );
}
