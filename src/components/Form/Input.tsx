import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
	name: string
	label?: string
}

export function Input({ name, label, ...rest}: InputProps){
	return (
		<FormControl>
			{/* another option is the placeholder attribute in the input */}
			{ !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

			<ChakraInput 
				id={name}
				name={name}
				type="email"
				focusBorderColor="pink.500"
				bgColor="gray.900"
				variant="filled"
				_hover={{
					bgColor: 'gray.900'
				}}
				size="lg"
				{...rest}
			/>
		</FormControl>
	)
}