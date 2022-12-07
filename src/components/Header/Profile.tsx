import { Flex, Avatar, Text, Box, Link } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

interface ProfileProps {
  user: {
    name: string;
    image: string;
  };
}

export default function Profile({ user }: ProfileProps) {
  return (
    <Flex gap={2}>
      <Avatar size="md" src={user.image} icon={<AiOutlineUser fontSize="1.5rem" />} />
      <Box>
        <Text fontSize={"sm"} color="gray.700">
          Olá, {user.name}
        </Text>
        <Link href={"#"} _hover={{ textDecoration: "underline" }}>
          <Text fontSize={"md"} color="gray.800">
            Minha conta
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}
