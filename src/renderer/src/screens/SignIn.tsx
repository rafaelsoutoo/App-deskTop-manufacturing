import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Input, VStack } from '@chakra-ui/react'

export function SignIn() {
  
  return (
    <Flex
      bg='gray.300'
      justifyContent="center"
      alignItems="center"
      display='flex'
      flexDirection='column'
      minHeight='100vh'  // Garante que o Flex ocupe a altura total da tela

    >
      <Box
        justifyContent='center'
        alignItems='center'
        display='flex'
        w={['90%', '40%', '40%', '30%']}
        mt='20px'
        h={['auto', 'auto', 'auto']}
        bg='#315F6F'
        rounded='20'
        p={[4, 6, 8]}
      >
        <VStack>
          <Heading color='white' mb={5}>Login</Heading>
          <Input
            placeholder="Email"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='gray.700'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}  // Muda a borda e adiciona uma sombra ao focar
            color='white'
           
          />
          <Input
            placeholder="Password"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='gray.700'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}
            color='white'

          />


            <Link to="/SignUp">
              <Button mt={5} >Entrar</Button>
            </Link>
        </VStack>

      </Box>
    </Flex>
  );
}
