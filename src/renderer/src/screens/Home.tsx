import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export function Home(){
   return(
      <Flex 
         justifyContent="center"
         alignItems="center"
         h="100vh"
         bg="#D9D9D9"
      >
         <SimpleGrid
           columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
           spacing={50}
         >
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"
               _active={{
                  bg: "#0b3153"
               }}  
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">Registrar Peça</Text>
            </Box>
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"
               _active={{
                  bg: "#0b3153"
               }} 
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">Busca peça</Text>
            </Box>
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"  
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               _active={{
                  bg: "#0b3153"
               }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">Registrar Coloborador</Text>
            </Box>
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"
               _active={{
                  bg: "#0b3153"
               }} 
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">Acompanhar</Text>
            </Box>
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"
               _active={{
                  bg: "#0b3153"
               }}  
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">planilha de Produto</Text>
            </Box>
            <Box 
               w={300} 
               h={140} 
               bg="#0C3C68" 
               cursor="pointer" 
               rounded={10} 
               justifyContent="center" 
               alignItems="center" 
               display="flex"
               _active={{
                  bg: "#0b3153"
               }}
               _hover={{
                     transform: "scale(1.07)", 
                 }}
               transition="transform 0.4s ease-out" 
>
               <Text color="white" userSelect="none">Costureiras</Text>
            </Box>
            


         </SimpleGrid>
      </Flex>
   )
}