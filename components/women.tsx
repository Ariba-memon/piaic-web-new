'use client'
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '@/components/Section'
export default function WithLargeQuote() {
  return (
    <>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
      >
        <Text
          // fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          // maxW={'2xl'}
          className="text-justify "
        >
          <h2 className="text-4xl font-bold text-green-700 text-center m-4 p-4 font-sans md:font-serif underline decoration-green-900">
            WOMEN INCLUSION IN TECHNOLOGY
          </h2>
          <p className="text-justify  font-light m-2 p-4 bg-gradient-to-r from-green-100">
            The Women Empowerment Division of the Presidential Initiative for
            Artificial Intelligence & Computing is committed to the empowerment
            and autonomy of women in Pakistan. The single most important channel
            for the empowerment of women is education. The Women Empowerment
            Division is committed to providing the best technical education in
            the world with the flexibility to allow just about anyone to
            participate and improve their lives. The primary objective of the
            Women Empowerment Division is to provide a platform via which women
            can receive education and training to jumpstart their careers in the
            global technology industry. The Women Inclusion in Technology
            project is the largest initiative on women education in Pakistan.
            The main of the project is to drive female participation in the
            technology industry in Pakistan from less than 5% to 30% over the
            next two years. Via this project, PIAIC is propagating awareness and
            training on the latest, most state-of-the-art technologies to women
            in Pakistan. The Women Empowerment Division will aid highly skilled
            women in technology to establish themselves as entrepreneurs and
            leaders in the technology industry not only in Pakistan but also
            around the world.
          </p>
        </Text>
      </Stack>
      <Section />
    </>
  )
}
