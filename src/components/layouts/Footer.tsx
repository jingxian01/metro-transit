import { Box, Divider, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <Box mt={8}>
      <Divider />
      <Divider mb="2vh" />
      <Box textAlign="center" fontSize="sm">
        <Text textAlign="center" mb={2} alignItems="center">
          Page built by Jingxian Chai.{" "}
          <Link href="https://jxian.dev" target="_blank" color="blue.400">
            website
          </Link>
        </Text>
        <Text textAlign="center">
          This page is built using TypeScript NextJS with Chakra-UI and deployed at Vercel with
          the help of NexTrip API.{" "}
          <Link
            href="https://github.com/jingxian01/metro-transit"
            target="_blank"
            color="blue.400"
          >
            source
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
