import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IconProps } from "phosphor-react/dist/lib";

interface IconBoxProps {
  text: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  bgcolor: string;
}

export default function IconBox({ text, icon, bgcolor }: IconBoxProps) {
  return (
    <HStack>
      <Box padding={2} backgroundColor={bgcolor} borderRadius={99} boxSize={8}>
        <Icon as={icon} color="base.background" />
      </Box>
      <Text fontSize={"text.RegularM"} color="base.text">
        {text}
      </Text>
    </HStack>
  );
}
