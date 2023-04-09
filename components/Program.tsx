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
              'https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://t4spartners.com/wp-content/uploads/2021/11/cloud-native-app-dev-3685936-FFFFFF.png'
              }
             
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Cloud Native & Web (CNC)
              </Heading>
              <Text color={'gray.500'} margin='4' >   A one year (CNC) program designed for absolute beginners....</Text>
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
              'https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg'
              }
             
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Artificial Intelligence
              </Heading>
              <Text color={'gray.500'} margin='4' >  A one year A.I program designed for absolute beginners .</Text>
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