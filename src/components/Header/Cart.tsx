import { Flex, Avatar, Text, Box, Link, IconButton } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

interface CartProps {
  amount: number;
  totalPrice: string;
}

export default function Cart({ amount, totalPrice }: CartProps) {
  return (
    <Flex gap={2} align="center">
      <IconButton
        aria-label="Search database"
        as={IoMdCart}
        padding={2}
        size="md"
        borderRadius={"6px"}
        backgroundColor="yellow.200"
        color="yellow.500"
      />

      <Box>
        <Text fontSize={"sm"} color="gray.700">
          Total
        </Text>
        <Link href={"#"} _hover={{ textDecoration: "underline" }}>
          <Text fontSize={"md"} color="gray.800">
            {totalPrice}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}
