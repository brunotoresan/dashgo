import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function Header(){
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			mx="auto" // horizontal margin
			mt="4"
			px="6"
			align="center"
		>
			<Text
				fontSize="3xl"
				fontWeight="bold"
				letterSpacing="tight"
				w="64"
			>
				dashgo
				<Text as="span" ml="1" color="pink.500">.</Text>
			</Text>

			{/* since we will have an icon and an input the best way
			    is to make the element that wraps them looks like an input
					to users click. The div is a label because if the persons clicks
					in the icon the input will also receive focus  */}
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
				/>
				<Icon as={RiSearchLine} fontSize="20" />
			</Flex>
		</Flex>
	)
}