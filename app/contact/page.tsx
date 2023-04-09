'use client'
import { Carousel, LeftButton, RightButton } from 'chakra-ui-carousel'
import {
  Image,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react'
import Works from '@/components/works'
import Header from '@/components/Header'

import Footer from '@/components/Footer'
export default function WIT() {
  return (
    <div className="md:max-xl:flex">
      <link
        rel="shortcut icon"
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        type="image/x-icon"
      />
      <Header />

      <Works />

      <Footer />
    </div>
  )
}
