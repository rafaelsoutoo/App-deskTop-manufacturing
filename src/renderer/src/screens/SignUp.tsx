import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function SignUp(){
    return(
      <Flex 
        justifyContent="center"
        alignItems="center"
        minH="100vh" 
>
      <Link to="/">
        <Button>
          <Text>Voltar</Text>
        </Button>
      </Link>
      </Flex>
    );
}   