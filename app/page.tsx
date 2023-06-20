'use client'

import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Animation from '../components/Animation'
import Courses from '../components/Courses'
import Videos from '../components/Videos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function Home() {
  return (
    <>
      <Header />

      <link
        rel="shortcut icon"
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        type="image/x-icon"
      />

      <Navbar />
      <Animation />
      <br />
      <Card />

      <Courses />
      <br />
      <br />
      <Videos />
      <Footer />
    </>
  )
}
