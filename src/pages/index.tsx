import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      w="100vw" // width
      h="100vh" // height
      align="center" // alignItems
      justify="center" // justifyContent
    >
      <Flex 
        as="form" // Flex are divs by default this one is a <form>
        width="100%" 
        maxWidth={360} // in px
        bg="gray.800" // background color
        p="8" // padding of 2rem: https://chakra-ui.com/docs/theming/theme
        borderRadius={8} // in px
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button 
          type="submit"
          mt="6" // margin-top of 1.5rem / 24px
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
