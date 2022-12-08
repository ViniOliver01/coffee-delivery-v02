import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface CardProps {
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function Card({ title, icon, iconColor, description, children }: CardProps) {
  return (
    <Stack aria-label={title} backgroundColor="base.card" padding={10}>
      <Flex>
        <Icon as={icon} color={iconColor} boxSize={6} />
        <Box marginLeft={2}>
          <Text fontSize="text.RegularM" color="base.subtitle">
            {title}
          </Text>
          <Text fontSize="text.RegularS" color="base.text">
            {description}
          </Text>
        </Box>
      </Flex>
      {children}
    </Stack>
  );
}
