import { Flex, Input, Icon } from '@chakra-ui/react'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox(){

  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    /* since we will have an icon and an input, the best way
    is to make the element that wraps them looks like an input
    for users to click. The div is a label because if the persons clicks
    in the icon the input will also receive focus  */
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}