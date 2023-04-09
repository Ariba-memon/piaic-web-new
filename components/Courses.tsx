'use client'
import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:max-xl:flex">
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {children}
      </Stack>
    </div>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <h2 className="text-4xl font-bold text-green-700 text-center m-4 p-4 font-sans md:font-serif underline decoration-green-900">
            Avaliable Programs
          </h2>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>A.I</TestimonialHeading>
              <TestimonialText>
                A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
                PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE
                OF AI
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1614133961.jpg'
              }
              name={'Artifical Intelligence'}
              title={'Course At PIAIC'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading> Cloud Native Web</TestimonialHeading>
              <TestimonialText>
                A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE
                BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF
                MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://miro.medium.com/max/1400/1*uBRKS8PLggKJ9ims9884qQ.jpeg'
              }
              name={'Cloud Native  Web'}
              title={'Course At PIAIC'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Blockchain</TestimonialHeading>
              <TestimonialText>
                A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
                GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH
                AND SMART CONTRACTS
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg'
              }
              name={'Blockchain'}
              title={'Course At PIAIC'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Internet of Things</TestimonialHeading>
              <TestimonialText>
                A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE
                BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF
                THINGS AND AI
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.zdnet.com/a/img/resize/fe3cd4335dd088e466578422640b646f641609ec/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=crop&height=675&width=1200'
              }
              name={'Internet of Things'}
              title={'Course At PIAIC'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
