import { Flex, Avatar, Text, Box, Link, IconButton } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

interface CartProps {
  amount: number;
  totalPrice: string;
}

export default function Cart({ amount, totalPrice }: CartProps) {
  return (
    <Flex gap={2} align="center">
      <Link href="#">
        <IconButton
          aria-label="Search database"
          as={IoMdCart}
          padding={2}
          size="md"
          borderRadius={"6px"}
          backgroundColor="yellow.light"
          color="yellow.dark"
        />
      </Link>

      <Box>
        <Text fontSize={"sm"} color="gray.700">
          Total
        </Text>
        <Text fontSize={"md"} color="gray.800">
          {totalPrice}
        </Text>
      </Box>
    </Flex>
  );
}
