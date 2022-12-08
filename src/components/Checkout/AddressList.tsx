import { Flex, Box, Text, Stack, Center } from "@chakra-ui/react";
import { Package, Pencil } from "phosphor-react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

interface AddressListProps {
  addressList: {
    id: number;
    name: string;
    address: string;
  }[];
}

export default function AddressList({ addressList }: AddressListProps) {
  const [value, setValue] = useState("1");
  console.log("🚀 / AddressList / value", value);

  return (
    <Stack>
      <RadioGroup onChange={setValue} value={value}>
        <Stack>
          {addressList.map((address) => {
            return (
              <Center key={address.id} borderBottomWidth={1} padding={4} gap={4}>
                <Package size={32} weight="fill" />
                <Box>
                  <Text fontSize="text.RegularS" color="base.text">
                    {address.name}
                  </Text>
                  <Text fontSize="text.RegularM" color="base.title" marginBottom={1}>
                    {address.address}
                  </Text>
                </Box>
                <Pencil size={24} />
                <Radio value={String(address.id)}></Radio>
              </Center>
            );
          })}
        </Stack>
      </RadioGroup>
    </Stack>
  );
}
