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
import New from '@/components/New'
import Women from '@/components/women'
import Gallery from '@/components/Gallery'

import Footern from '@/components/Footern'
import Header from '@/components/Header'
export default function WIT() {
  return (
    <div className="md:max-xl:flex">
      <link
        rel="shortcut icon"
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        type="image/x-icon"
      />
      <Header />

      <New />
      <Women />
      <Gallery />
      <Footern />
    </div>
  )
}
