import { Button as ChakraButton, Center, Flex, Heading, Spinner, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ShoppingCart, CheckCircle } from "phosphor-react";

export default function Button() {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const toast = useToast();

  function handleClick() {
    const spinnerDelay = 1000; // milliseconds
    const successDelay = 3000; // milliseconds

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAdded(true);
      toast({
        position: "bottom-right",
        title: "Produto adicionado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        setAdded(false);
      }, successDelay);
    }, spinnerDelay);
  }

  return (
    <ChakraButton
      backgroundColor={added ? "green.mid" : "purple.dark"}
      _hover={added ? { backgroundColor: "green.mid" } : { backgroundColor: "purple.mid" }}
      padding={2}
      fontSize="components.ButtonG"
      color="white"
      onClick={handleClick}
      width="100%"
    >
      {!(loading || added) && (
        <Center gap={2}>
          ADICIONAR AO CARRINHO
          <ShoppingCart size={16} weight="bold" />
        </Center>
      )}
      {loading && (
        <Center>
          <Spinner />
        </Center>
      )}

      {added && (
        <Center>
          ADICIONADO COM SCESSO
          <CheckCircle size={32} weight="bold" />
        </Center>
      )}
    </ChakraButton>
  );
}
