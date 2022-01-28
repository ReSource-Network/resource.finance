// imports
import React from 'react'
import { getCloudinaryImagePath } from "./App";
import {Button, Flex, Heading, Image, Link, Text, useColorMode} from "@chakra-ui/react";


export const Preview = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'
  const previewImgSrc = colorMode === 'light' ? 'preview_wrl08d.png' : 'preview-dark_z6xyj3.png'

  const renderHeading = () => { return (
    <Heading
      textAlign = 'center'
      fontSize = '3xl'
      color = { textColor }
      mb = { 2 }
    >
      Live Product
    </Heading>
  ) }

  const renderText = () => { return (
    <Text
      textAlign = 'center'
      fontSize = { ['sm', 'md', 'lg', 'xl'] }
      color = { textColor }
      mb = { 8 }
    >
      Join the decentralized circular economy and get interest-free credit for your business
    </Text>
  ) }

  const renderButtons = () => { return (
    <Flex
      direction = 'row'
      align = 'center'
      justify = 'center'
      mb = { 16 }
    >
      <Button
        as = { Link }
        href = 'https://resourcenetwork.co'
        isExternal
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
        Learn more
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
  ) }

  const renderImage = () => { return (
    <Image
      src = { getCloudinaryImagePath(previewImgSrc) }
      alt = 'resource market app preview'
    />
  ) }

  return (
    <Flex
      direction = 'column'
      align = 'center'
      justify = 'center'
      mx = { [8, 8, 12, 16] }
      my = { [16, 16, 24, 32] }
    >
      { renderHeading() }
      { renderText() }
      { renderButtons() }
      { renderImage() }
    </Flex>
  )
}

export default Preview;