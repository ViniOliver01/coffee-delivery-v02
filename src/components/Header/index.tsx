import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

import Profile from "./Profile";
import Location from "./Location";
import Cart from "./Cart";

const user = {
  name: "Vinicius",
  image: "https://github.com/ViniOliver01.png",
};
const locationsList = [
  "Porto Alegre, RS",
  "Moema, São Paulo",
  "Jabaquara, São Paulo",
  "Morumbi, São Paulo",
];

export default function Header() {
  return (
    <Flex flex="1" justify={"center"} padding={10}>
      <Flex flex="1" maxWidth={1440}>
        <Flex marginRight="auto" gap={8}>
          <Link href={"#"}>
            <Image src="./Logo.svg" />
          </Link>
          <Location list={locationsList} />
        </Flex>
        <Flex gap={8}>
          <Profile user={user} />
          <Cart amount={7} totalPrice="R$ 12,50" />
        </Flex>
      </Flex>
    </Flex>
  );
}
