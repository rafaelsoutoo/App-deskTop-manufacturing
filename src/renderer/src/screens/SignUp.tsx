import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Input, Text, VStack } from '@chakra-ui/react'

export function SignUp() {
  
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
        <VStack>
          <Heading color='white'fontSize={32} mb={5}>Cadastro</Heading>
          <Input
            placeholder="Nome"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='#D9D9D9'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }} 
            color='black'
            rounded="10"
           
          />
          <Input
            placeholder="E-mail"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='#D9D9D9'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}  
            color='black'
            rounded="10"
           
          />

          <Input
            placeholder="Password"
            type="password"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='#D9D9D9'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }} 
            color='black'
            rounded="10"
          />
          
          <Input
            placeholder="Confirm Password"
            type="password"
            _placeholder={{
              color: 'gray.400'
            }}
            bg='#D9D9D9'
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline' }}
            color='black'
            rounded="10"

          />


          <Button mt={5} 
              bg="black"
              color="white"
              px={10}
              _hover={{ bg: '#1c1c1c' }}
          >
            <Text
                fontSize={20}
                fontWeight={1}
            >Registrar</Text>
              </Button>


            <Link to="/">
            <Text
             mt={2}
             textDecoration="underline"
             color="gray.400"
             _hover={{color: 'white'}}
            >
              Voltar
            </Text>
            </Link>
        </VStack>

      </Box>
    </Flex>
  );
}
