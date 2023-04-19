import {
  Flex,
  Grid,
  Link,
  Text,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

import Divider from "../components/divider";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="./rocketseat.svg" alt="Rocketseat" />
        <Heading size="2xl" lineHeight="shorter" marginTop="16">
          Faça seu login na plataforma
        </Heading>
      </Flex>
      <Flex
        gridArea="form"
        height="100%"
        background="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding="16"
      >
        <Input
          type="text"
          border="none"
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="E-Mail"
        />
        <Input
          type="password"
          border="none"
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Senha"
          marginTop="2"
        />
        <Link
          alignSelf="flex-start"
          marginTop="2"
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{
            color: "purple.500",
          }}
        >
          Esqueci minha senha
        </Link>
        <Button
          marginTop="6"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          _hover={{
            backgroundColor: "purple.600",
          }}
        >
          ENTRAR
        </Button>
        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop="6">
          Não tem uma conta?{" "}
          <Link
            color="purple.600"
            fontWeight="600"
            _hover={{ color: "purple.500" }}
          >
            Registre-se
          </Link>
          <Divider />
          <Flex alignItems="center">
            <Text fontSize="sm">Ou entre com</Text>
            <Button
              height="50px"
              flex="1"
              backgroundColor="gray.600"
              marginLeft="6"
              borderRadius="md"
              _hover={{ backgroundColor: "purple.500" }}
            >
              GITHUB
            </Button>
          </Flex>
        </Text>
      </Flex>
    </Grid>
  );
}
