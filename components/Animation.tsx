'use client'
import {
  Container,
  chakra,
  shouldForwardProp,
  Text,
  Heading,
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Card from '@/components/Card'
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function App() {
  return (
    <div className="md:max-xl:flex">
      <>
        {' '}
        <Text
          className="text-justify bg-gradient-to-r from-green-900"
          fontStyle="revert"
          fontSize="20"
          backgroundColor="green.400"
          fontFamily="Roboto"
          color="white"
          alignItems="center"
          padding="10"
          margin="0 auto"
        >
          Admissions are now open in Web 3.0 & Metaverse Program in Karachi ,
          Lahore , Islamabad For Queries contact PIAIC helpline{' '}
          <b>03082220203</b>
        </Text>
        {/* <Card /> */}
        {/* <blockquote className="text-2xl font-semibold italic text-center text-green-900">
          Certified
          <br />
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block">
            <span className="relative text-white">Web 3.0</span>
          </span>
          <br />
          and Metaverse Developer:
        </blockquote> */}
      </>
    </div>
  )
}
