import { Flex, Icon, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HiMapPin } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";

interface LocationProps {
  list: string[];
}

export default function Location({ list }: LocationProps) {
  const [text, setText] = useState<string | null>("Porto Alegre, RS");
  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius={"6px"}
        borderWidth="2px"
        borderColor="purple.500"
        backgroundColor="purple.100"
        color="purple.700"
        padding={2}
        leftIcon={<HiMapPin />}
        rightIcon={<FiChevronDown />}
      >
        <Text>{text}</Text>
      </MenuButton>
      <MenuList borderWidth="2px" borderColor="purple.500" backgroundColor="purple.100">
        {list.map((location, index) => {
          return (
            <>
              <MenuItem
                key={location}
                backgroundColor="purple.100"
                _hover={{ backgroundColor: "purple.200" }}
                color="purple.700"
                onClick={(e) => setText(e.currentTarget.textContent)}
              >
                {location}
              </MenuItem>
              {!(list.length - 1 == index) && <MenuDivider />}
            </>
          );
        })}
      </MenuList>
    </Menu>
  );
}
