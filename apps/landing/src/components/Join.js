// imports
import React from 'react'
import {Button, Flex, Heading, Image, Link, Text, useColorMode} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {getCloudinaryImagePath} from "./App";

// data
const ubeswap = {
  imgSrc: 'ubeswap_n6d4q3.png',
  href: 'https://app.ubeswap.org/#/farm/0x74c0C58B99b68cF16A717279AC2d056A34ba2bFe/0x918146359264C492BD6934071c6Bd31C854EDBc3/0xF4662e4E254006939c2198cb6F61635b03fd14Eb',
  ariaLabel: 'ubeswap logo'
}
const uniswap = {
  imgSrc: 'uniswap_vhs8gv.png',
  href: 'https://uniswap.org',
  ariaLabel: 'uniswap logo'
}
const pancakeswap = {
  imgSrc: 'pancakeswap_nv9bzf.png',
  href: 'https://pancakeswap.finance/swap',
  ariaLabel: 'pancakeswap logo'
}
const gateio = {
  imgSrc: 'gateio_kujgzo.png',
  href: 'https://www.gate.io/trade/source_usdt',
  ariaLabel: 'gatio logo'
}
const matcha = {
  imgSrc: 'matcha_sch4ny.png',
  href: 'https://matcha.xyz/markets/42220/0x74c0c58b99b68cf16a717279ac2d056a34ba2bfe',
  ariaLabel: 'matcha logo'
}
const icons = [matcha, uniswap, pancakeswap, ubeswap, gateio]

const discordColor = '#7289da'
const discordColorHover = 'rgba(114, 137, 218, 0.5)'

export const Join = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'

  const renderJoinCommunity = () => { return (
    <Flex
      direction = 'column'
      align = 'flex-start'
      justify= 'center'
      my = { [8, 8, 12, 16] }
      ml = { [8, 8, 12, 16] }
      mr = { [8, 8, 4] }
      p = { [8, 8, 12, 16] }
      boxShadow = 'xl'
      w = { ['auto', 'auto', '50%'] }
    >
      <Heading
        fontSize = { ['lg', 'xl', '2xl', '3xl'] }
        color = { textColor }
        mb = { 2 }
      >
        Join the community
      </Heading>
      <Text
        color = { textColor }
        fontSize = { ['sm', 'md', 'lg', 'xl'] }
        mb = { 8 }
      >
        Learn more about ReSource, chat with the team and others in the community.
      </Text>
      <Button
        as = { Link }
        href = { 'https://app.resourcenetwork.co' }
        isExternal
        bgColor = { discordColor }
        color = { 'white' }
        cursor = { 'pointer' }
        textDecoration = 'none'
        _active = {{
          bgColor: discordColorHover,
          textDecoration: 'none'
        }}
        _hover = {{
          bgColor: discordColorHover,
          textDecoration: 'none'
        }}
        _focus = {{
          bgColor: discordColorHover,
          textDecoration: 'none'
        }}
      >
        <FontAwesomeIcon
          icon = { faDiscord }
          style = {{ marginRight: '8px' }}
          color = { 'white' }
        />
        Discord
      </Button>
    </Flex>
  )}

  const renderStake = () => { return (
    <Flex
      direction = 'column'
      align = 'flex-start'
      justify= 'space-between'
      my = { [8, 8, 12, 16] }
      mr = { [8, 8, 12, 16] }
      ml = { [8, 8, 4] }
      p = { [8, 8, 12, 16] }
      w = { ['auto', 'auto', '50%'] }
      boxShadow = 'xl'
    >
      <Flex
        direction = 'column'
      >
        <Heading
          fontSize = { ['lg', 'xl', '2xl', '3xl'] }
          color = { textColor }
          mb = { 2 }
        >
          Stake SOURCE
        </Heading>
        <Text
          color = { textColor }
          fontSize = { ['sm', 'md', 'lg', 'xl'] }
          mb = { 8 }
        >
          SOURCE, the fuel of the ReSource economy is available here:
        </Text>
      </Flex>
      <Flex
        direction = 'row'
      >
        { icons.map(icon => (
          <Button
            as = { Link }
            key = { icon.ariaLabel }
            href = { icon.href }
            bgColor = 'none'
            p = { 0 }
            mr = { [1, 2, 3, 4] }
            _hover = {{
              'opacity': '0.5'
            }}
            isExternal
          >
            <Image
              boxSize = {['30px', '30px', '36px', '40px']}
              src = { getCloudinaryImagePath(icon.imgSrc) }
            />
          </Button>
        ))}
      </Flex>
    </Flex>
  ) }

  return (
    <Flex
      direction = {['column', 'column', 'row']}
    >
      { renderJoinCommunity() }
      { renderStake() }
    </Flex>
  )
}

export default Join;