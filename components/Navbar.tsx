import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={6} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={8} w={'full'} maxW={'md'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              className="text-justify"
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",

                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,

                zIndex: -1,
              }}
            ></Text>
            <br />{' '}
            {/* <Text className='text-justify text-5xl' color={'green.400'} as={'inline'}>
            Presidential Initiative
            
             for Artificial Intelligence & Computing (PIAIC)
            </Text> */}
          </Heading>
          <h2 className="text-4xl font-bold text-green-700">
            Presidential Initiative for Artificial Intelligence & Computing
            (PIAIC)
          </h2>
          <Text
            className="text-justify bg-gradient-to-r from-green-100"
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'ButtonText'}
          >
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}></Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          className="animate-pulse"
          src={'https://alvidental.com/wp-content/uploads/2017/02/000.png'}
        />
      </Flex>
    </Stack>
  )
}
