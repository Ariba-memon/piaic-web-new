"use client"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileWithImage() {
    return (
      <Center py={10}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://storage.googleapis.com/ekrutassets/blogs/images/000/001/974/original/blockchain-adalah-EKRUT.jpg'
              }
             
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              BLOCKCHAIN SPECIALIST
              </Heading>
              <Text color={'gray.500'} margin='4' > A one year blockchain program designed for absolute beginners</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              
                <Text fontSize={'sm'} color={'gray.500'}>
                  
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
               
                <Text fontSize={'sm'} color={'gray.500'}>
                
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'gray.400'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
             Apply Now
            </Button>
          </Box>
        </Box>
        
        <Box
        margin='10'
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://www.zdnet.com/a/img/resize/fe3cd4335dd088e466578422640b646f641609ec/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=crop&height=675&width=1200'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2021/10/Internet-of-Things-Technology-Trends.jpg'
              }
            
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Internet of Things
              </Heading>
              <Text color={'gray.500'} margin='4' > A one fifteen months program designed for absolute beginners .</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              
                <Text fontSize={'sm'} color={'gray.500'}>
                  
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
               
                <Text fontSize={'sm'} color={'gray.500'}>
                
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'gray.400'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
             Apply Now
            </Button>
          </Box>
          
        </Box>
         
  
          
         
      
      </Center>
    );
  }