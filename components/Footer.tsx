"use client"
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
        
      <svg
        height={32}
       
        xmlns=""
        {...props}>
        <path
          
          fill="currentColor"
        />
        <path
        
          fill="#2F855A"
        />
      </svg>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            
            <Stack align={'flex-start'}>
              <ListHeader>Navigation</ListHeader>
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About us</Link>
             
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
              
            
            </Stack>
            
            
         
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'https://www.facebook.com/piaic/'} isExternal>Facebook</Link>
              <Link href={'https://www.youtube.com/@PIAIC'} isExternal>Youtube</Link>
          
              <Link href={'https://api.whatsapp.com/send?phone=923082220203&data=AWD--vOdsIHAE4FejmfxtMhsl9zDQqtagWbPR37yxt20kx2_J7Pyom1243lAd8DrkdUz6yPBKp4bvmuRlvXZs5-zfiIkuwVgHsXSjwXAibVWkSPKgY4dMIm2l91CGlqZg46Qy1UlYVwxMXLSrU3yNOek7NdXYfCui3Na6dHK9WQKnXFKM94NRwP5SJIsLlpyA0vAsynRJXw4rj4z1SCBGXPT7BdhxjDADe3BZ2kImZWDjUF35gxVOs8bV3r9q2dX0Y47GS4QQnW36EZfehLvBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1GSFUowt30ThZQexX4vzM6fh3y6xCDmmBDtRP9xtc5ceBFCH9tBgdjzC8'} isExternal>Whatsapp</Link>
              <Link href={'https://www.linkedin.com/company/piaicofficial/'}isExternal>LinkedIn</Link>
            </Stack>
            <Stack align={'flex-start'}>
                <Image
                width='50'
                height='40' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/640px-PIAIC_Logo.svg.png' />
            </Stack>

          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'} fontFamily='poppins'>
            © 2023 PIAIC Website Made By Ariba Memon
          </Text>
        </Box>
      </Box>
    );
  }