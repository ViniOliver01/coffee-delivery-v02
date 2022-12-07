import { Box, Center, IconButton, Text, useToast } from "@chakra-ui/react";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

export default function Select() {
  const [amount, setAmount] = useState(1);
  const toast = useToast()
  
  function handleAdd() {
    setAmount(amount + 1);
  }
  function handleRemove() {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      toast({
        position: "bottom-right",
        title: "Quantidade invalida",
        status: "warning",
        duration: 3000,
        isClosable: false,
      });
    }
  }

  return (
    <Center width="100%" height={10}>
      <IconButton
        aria-label="Subtrair Produto"
        variant="outline"
        colorScheme="purple"
        border="none"
        backgroundColor="white"
        icon={<Minus size={16} weight="bold" />}
        onClick={handleRemove}
      />
      <Center height="100%" width="100%" backgroundColor="base.button">
        <Text fontSize="text.BoldL" fontWeight="bold">
          {amount}
        </Text>
      </Center>
      <IconButton
        aria-label="Adicionar Produto"
        variant="outline"
        colorScheme="purple"
        border="none"
        backgroundColor="white"
        icon={<Plus size={16} weight="bold" />}
        onClick={handleAdd}
      />
    </Center>
  );
}
