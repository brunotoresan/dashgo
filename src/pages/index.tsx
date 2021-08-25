import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup' // https://github.com/jquense/yup
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors }  = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha"
            error={errors.password}
            {...register('password')} 
          />
        </Stack>

        <Button 
          type="submit"
          mt="6" // margin-top of 1.5rem / 24px
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
