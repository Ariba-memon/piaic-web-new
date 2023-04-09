'use client'
import { Carousel, LeftButton, RightButton } from 'chakra-ui-carousel'
import {
  Link,
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
} from '@chakra-ui/react'
import Footer from '@/components/Footer'
import President from '@/components/President'

import Header from '@/components/Header'

export default function About() {
  return (
    <div className="md:max-xl:flex">
      <link
        rel="shortcut icon"
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        type="image/x-icon"
      />

      <Header />
      <President />

      <Footer />
    </div>
  )
}
