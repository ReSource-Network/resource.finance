import React from 'react'
import {Button, Flex, Heading, Image, Link, useColorMode} from "@chakra-ui/react";
import { getCloudinaryImagePath } from "./App";

export const Hero = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'
  // const heroImgSrcName = colorMode === 'light' ? 'circles_gqx3zp.png' : 'circles-w_pnswy0.png'
  const heroImgSrcName = colorMode === 'light' ? 'nodes_yeszwt.png' : 'nodes_yeszwt.png'

  const renderHeading = () => {
    return (
      <Heading
        fontSize = { ['3xl', '4xl', '5xl', '6xl'] }
        color = { textColor }
        lineHeight = 'shorter'
      >
        The decentralized, circular economy
      </Heading>
    )
  }

  const renderButtons = () => {
    return (
      <Flex
        direction = { 'row' }
        align = { 'flex-start' }
        mt = { 8 }
      >
        <Button
          as = { Link }
          href = '/stake'
          borderWidth = '1px'
          borderColor = { textColor }
          bgColor = 'none'
          color = { textColor }
          cursor = 'pointer'
          mr = { 4 }
          textDecoration = 'none'
          _focus = {{
            borderColor: 'primaryActive',
            color: 'primaryActive',
            textDecoration: 'none'
          }}
          _active = {{
            borderColor: 'primaryActive',
            color: 'primaryActive',
            textDecoration: 'none'
          }}
          _hover = {{
            borderColor: 'primaryActive',
            color: 'primaryActive',
            textDecoration: 'none'
          }}
        >
          Stake SOURCE
        </Button>
        <Button
          as = { Link }
          href = 'https://app.resourcenetwork.co'
          isExternal
          bgColor = 'primary'
          color = 'white'
          cursor = 'pointer'
          textDecoration = 'none'
          _active = {{
            bgColor: 'primaryActive',
            textDecoration: 'none'
          }}
          _hover = {{
            bgColor: 'primaryActive',
            textDecoration: 'none'
          }}
          _focus = {{
            bgColor: 'primaryActive',
            textDecoration: 'none'
          }}
        >
          Launch app
        </Button>
      </Flex>
    )
  }

  const renderHeroImg = () => {
    return (
      <Image
        src = { getCloudinaryImagePath(heroImgSrcName) }
        w = { '95%' }
        mr = { '-10%' }
      />
    )
  }

  return (
    <Flex
      direction = { 'row' }
      align = { 'center' }
      justify = { 'flex-start' }
      height = { ['30vh', '40vh', '50vh', '60vh'] }
      minH = '400px'
      overflow = { 'visible' }
    >
      <Flex
        direction = { 'column' }
        align = { 'flex-start' }
        justify = { 'center' }
        m = { [8, 8, 12, 16] }
      >
        { renderHeading() }
        { renderButtons() }
      </Flex>
      { renderHeroImg() }
    </Flex>
  )
}

export default Hero;