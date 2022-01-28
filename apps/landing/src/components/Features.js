import React from 'react'
import { getCloudinaryImagePath } from './App'
import {Flex, Heading, Image, Text, useColorMode} from "@chakra-ui/react";

const stablecoins = {
  title: 'A new class of stablecoins',
  body: 'ReSource stablecoins derive value from the goods and services traded with them, instead of artificaial pegging.'
}
const inclusive = {
  title: 'Inclusive, fair, and reliable',
  body: 'Instead of relying on traditional metrics, underwriters can use a variety of reputation mechanisms to prove credit worthiness.'
}
const crytpo = {
  title: 'Crypto for the real world',
  body: 'The only crypto that doesn’t require fintech training, ReSource is tied to real enterprises, with real customers and products.'
}
const text = [ inclusive, stablecoins, crytpo ]

export const Features = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'
  const globeImgSrc = 'Frame_gd8tds.png'

  const renderText = () => { return (
    <Flex
      direction = 'column'
    >
      { text.map( copy => (
        <Flex
          direction = 'column'
          m = { 4 }
          key = { copy.title }
        >
          <Heading
            color = { textColor }
            fontSize = { ['lg', 'xl', '2xl', '3xl'] }
            mb = { 2 }
          >
            { copy.title }
          </Heading>
          <Text
            color = { textColor }
            fontSize = { ['sm', 'md', 'lg', 'xl'] }
          >
            { copy.body }
          </Text>
        </Flex>
      ) ) }
    </Flex>
  ) }

  return (
    <Flex
      direction = { ['column', 'column', 'column', 'row'] }
      align = { ['flex-start', 'flex-start', 'flex-start', 'center'] }
      justify = 'space-between'
      mx = { [8, 8, 12, 16] }
      my = { [16, 16, 24, 32] }
      p = { [8, 8, 12, 16] }
      borderRadius = 'xl'
      bgColor = 'primaryBg'
    >
      <Image
        boxSize = {['200px', '200px', '400px', '400px', '500px']}
        fit = 'contain'
        src = { getCloudinaryImagePath(globeImgSrc) }
        mr = { [0, 0, 0, 16] }
        mb = { [4, 4, 8, 0] }
      />
      { renderText() }
    </Flex>
  )
}

export default Features