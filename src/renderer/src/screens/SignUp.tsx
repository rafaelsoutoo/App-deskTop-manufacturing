import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '@renderer/services/api';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { AppError } from '@renderer/utils/appError';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
}

const signUpSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      console.log(name, email, password)
      await api.post('/user/register', { name, email, password });

      toast({
        title: 'Conta criada com sucesso!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      reset();
    } catch (error) {
      setIsLoading(false);
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível criar a conta. Por favor, tente mais tarde.';

      toast({
        title,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex
      bg='#D9D9D9'
      justifyContent="center"
      alignItems="center"
      display='flex'
      flexDirection='column'
      minHeight='100vh'
    >
      <Box
        justifyContent='center'
        alignItems='center'
        display='flex'
        w={['90%', '40%', '50%', '30%']}
        mt='20px'
        h={['auto', 'auto', 'auto']}
        bg='#0C3C68'
        rounded='20'
        p={[4, 6, 8]}
      >
        <VStack as="form" onSubmit={handleSubmit(handleSignUp)}>
          <Heading color='white' fontSize={32} mb={5}>Cadastro</Heading>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nome"
                _placeholder={{ color: 'gray.400' }}
                bg='#D9D9D9'
                _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}
                color='black'
                rounded="10"
                isInvalid={!!errors.name}
                errorBorderColor="red.300"
              />
            )}
          />
          <Text color="red.300" fontSize="sm">
            {errors.name?.message}
          </Text>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="E-mail"
                _placeholder={{ color: 'gray.400' }}
                bg='#D9D9D9'
                _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}
                color='black'
                rounded="10"
                isInvalid={!!errors.email}
                errorBorderColor="red.300"
              />
            )}
          />
          <Text color="red.300" fontSize="sm">
            {errors.email?.message}
          </Text>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Senha"
                type="password"
                _placeholder={{ color: 'gray.400' }}
                bg='#D9D9D9'
                _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}
                color='black'
                rounded="10"
                isInvalid={!!errors.password}
                errorBorderColor="red.300"
              />
            )}
          />
          <Text color="red.300" fontSize="sm">
            {errors.password?.message}
          </Text>
          <Button
            mt={5}
            bg="black"
            color="white"
            px={10}
            _hover={{ bg: '#1c1c1c' }}
            isLoading={isLoading}
            type="submit"
          >
            <Text fontSize={20} fontWeight={1}>Registrar</Text>
          </Button>
          <Link to="/">
            <Text
              mt={2}
              textDecoration="underline"
              color="gray.400"
              _hover={{ color: 'white' }}
            >
              Voltar
            </Text>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
}