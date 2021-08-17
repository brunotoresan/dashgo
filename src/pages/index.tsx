import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
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
        {/* another option is the placeholder attribute in the input */}
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">
              E-mail
            </FormLabel>

            <Input 
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>

          {/* another option is the placeholder attribute in the input */}
          <FormControl>
            <FormLabel htmlFor="password">
              Senha
            </FormLabel>
            <Input
              id="password" 
              name="password" 
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}   
              size="lg"      
            />
          </FormControl> 
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
