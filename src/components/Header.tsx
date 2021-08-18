import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

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

			{/* since we will have an icon and an input, the best way
			    is to make the element that wraps them looks like an input
					for users to click. The div is a label because if the persons clicks
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
			
			<Flex
				align="center"
				ml="auto" // places in the extreme right
			>

				<HStack 
					spacing="8"
					mx="8"
					pr="8"
					py="1"
					color="gray.300"
					borderRightWidth={1}
					borderColor="gray.700"
				>
					<Icon as={RiNotificationLine} fontSize="20" />
					<Icon as={RiUserAddLine} fontSize="20" />
				</HStack>

				<Flex align="center">
					<Box mr="4" textAlign="right">
						<Text>Bruno Toresan</Text>
						<Text 
							color="gray.300" 
							fontSize="small"
						>
							brunotoresan@gmail.com
						</Text>
					</Box>
				</Flex>

				<Avatar
					size="md"
					name="Bruno Toresan"
					src="https://github.com/brunotoresan.png"
				/>

			</Flex>

		</Flex>
	)
}