import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";

export function Header(){

    return(
        <Box
            bgColor="#D9D9D9"
            h={{ base: '50px', sm: '56px', md: '80px' }}
            w="100%"
            mx="auto"
            position="fixed"
            maxW={2300}
            alignItems="center"
            zIndex="1000"
            boxShadow="0px 2px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(49, 49, 49, 0.349)" 
            display="flex"
        >
            <HStack justifyContent="space-between" px={20}>
                <Flex alignItems="center" gap={2}>
                    <Avatar size='md' />
                    <Text userSelect="none">Fulano Da Silva</Text>
                </Flex>
            </HStack>

        </Box>

    )

}