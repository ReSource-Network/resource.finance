import React from 'react'
import {Flex, Heading, Image, Text, useColorMode} from "@chakra-ui/react";
import {getCloudinaryImagePath} from "./App";

const Problem = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'

  const renderImage = () => {
    return (
      <Image
        src = { getCloudinaryImagePath('resource-card_zc4jll.png') }
        w = { ['33vw', '36vw', '40vw', '50vw'] }
        ml = { [-2, -2, -2, 0] }
        mb = { [4, 4, 8, 0] }
        h = 'full'
        mr = { [0, 0, 0, 16, 24, 32] }
        fit = 'contain'
      />
    )
  }

  const renderText = () => {
    return (
      <Flex
        direction = 'column'
        align = 'flex-start'
        justify = 'center'
      >
        <Heading
          fontSize = { ['lg', 'xl', '2xl', '3xl'] }
          mb = { 4 }
          color = { textColor }
          h = { 'auto' }
        >
          Reclaiming power from centralized banks and a movement against consolidation of wealth
        </Heading>
        <Text
          fontSize = { ['sm', 'md', 'lg', 'xl'] }
          color = { textColor }
        >
          Creditworthy businesses gain access to interest-free credit, through a decentralized network of underwriters, growing their business without decreasing their bottom line.
        </Text>
      </Flex>
    )
  }

  return (
    <Flex
      direction = { ['column', 'column', 'column', 'row'] }
      justify = 'space-between'
      align = { 'flex-start' }
      p = { [8, 8, 12, 16] }
      mx = { [8, 8, 12, 16] }
      my = { [16, 16, 24, 32] }
      bgColor = 'primaryBg'
      borderRadius = 'xl'
    >
      { renderImage() }
      { renderText() }
    </Flex>
  )
}

export default Problem;