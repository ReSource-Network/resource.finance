import React from 'react'
import {getCloudinaryImagePath} from "./App";
import {Button, Flex, Heading, Image, Link, Text, useColorMode} from "@chakra-ui/react";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

// data
const solutionImgSrc = 'decentralized_rcol8j.png'
const solutionBullets = [
  'Decentralized credit approval',
  'Access to credit on favorable terms',
  'Incentivizations for regenerative business'
]

export const Solution = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'

  // render header
  const renderHeader = () => { return (
    <Heading
      color = { textColor }
      fontSize = { ['lg', 'xl', '2xl', '3xl'] }
    >
      Building a new financial system for the circular economy
    </Heading>
  ) }

  // render bullets
  const renderBullets = () => { return (
    <Flex
      direction = 'column'
      align = 'flex-start'
      justify = 'flex-start'
      mt = { 4 }
    >
      { solutionBullets.map(bullet => (
        <Flex
          direction = 'row'
          align = 'center'
          justify = 'center'
          key = { bullet }
          mb = { 2 }
        >
          <FontAwesomeIcon
            icon = { faCheckCircle }
            color = { textColor }
            size = 'lg'
            style = {{ marginRight: '8px' }}
            display = 'inline-block'
          />
          <Text
            display = 'inline-block'
            color = { textColor }
            fontSize = { ['sm', 'md', 'lg', 'xl'] }
          >
            { bullet }
          </Text>
        </Flex>
      ) ) }
    </Flex>
  ) }

  // render buttons
  const renderButtons = () => { return (
    <Flex
      direction = { 'row' }
      align = { 'flex-start' }
      mt = { 8 }
    >
      <Button
        as = { 'Link' }
        href = { 'https://resource-network.gitbook.io/resource-technical/' }
        borderWidth = { '1px' }
        borderColor = { textColor }
        bgColor = { 'none' }
        color = { textColor }
        cursor = { 'pointer' }
        mr = { 4 }
        textDecoration = 'none'
        isExternal
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
        <FontAwesomeIcon icon = { faBookOpen } style={{marginRight: '8px'}} />
        Whitepaper
      </Button>
      <Button
        as = { Link }
        href = { 'https://youtu.be/zPGoLcptHYo' }
        isExternal
        bgColor = { 'primary' }
        color = { 'white' }
        cursor = { 'pointer' }
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
        <FontAwesomeIcon icon = { faYoutube } style={{marginRight: '8px'}} />
        How it works
      </Button>
    </Flex>
  ) }

  return (
    <Flex
      direction = { ['column-reverse', 'column-reverse', 'row', 'row'] }
      align = { ['flex-start', 'flex-start', 'center', 'center'] }
      justify = 'space-between'
      mx = { [8, 8, 12, 16] }
      my = { [16, 16, 24, 32] }
    >
      <Flex
        direction = 'column'
        align = 'flex-start'
        justify = 'flex-start'
        mr = { [0, 0, 12, 16] }
      >
        { renderHeader() }
        { renderBullets() }
        { renderButtons() }
      </Flex>
      <Image
        src = { getCloudinaryImagePath(solutionImgSrc) }
        w = { ['auto', 'auto', '67%', '56%', '50%'] }
        borderRadius = '3xl'
        mb = { [12, 12, 0, 0] }
      />
    </Flex>
  )
}

export default Solution;