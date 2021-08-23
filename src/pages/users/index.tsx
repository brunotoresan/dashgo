import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function Userlist() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {/* flex 1 to take as much space as possible */}
        <Box flex={isWideVersion ? '1' : 'initial'} borderRadius={8} bg="gray.800" p={isWideVersion ? '8' : '0'}>
          <Flex mb="8" justify="space-between" align="center" p={isWideVersion ? '0' : '4'}>
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                cursor="pointer"
                mr={isWideVersion ? '0' : '1.5'}
              >
                { isWideVersion && 'Criar novo' }
              </Button>           
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Bruno Toresan</Text>
                    <Text fontSize="sm" color="gray.300">brunotoresan@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>17 de Setembro, 2021</Td> }
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    { isWideVersion && 'Editar' }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Bruno Toresan</Text>
                    <Text fontSize="sm" color="gray.300">brunotoresan@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>17 de Setembro, 2021</Td> }
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    { isWideVersion && 'Editar' }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Bruno Toresan</Text>
                    <Text fontSize="sm" color="gray.300">brunotoresan@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>17 de Setembro, 2021</Td> }
                <Td>
                  <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      cursor="pointer"
                    >
                      { isWideVersion && 'Editar' }
                    </Button>
                </Td>
              </Tr>                            
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}