import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";

interface ThemeToggleButtonProps {}

export const ThemeToggleButton: NextPage<ThemeToggleButtonProps> = ({}) => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme mode toggle"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};
