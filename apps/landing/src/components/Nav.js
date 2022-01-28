// imports
import React from 'react'
import {
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton, MenuDivider, MenuGroup,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react'
import { getCloudinaryImagePath } from "./App"
import { socialLinks, featuredSocialLinks } from "../data/socialLinks";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faSun,
  faMoon,
  faBars
} from '@fortawesome/free-solid-svg-icons'

// images
const logotypeWhiteSrcName = "/brand/resource-logotype-white_osat1c.svg"
const logotypeBlackSrcName = "/brand/resource-logotype-black_lsczap.svg"

// nav menu data
const pressInquiries = {
  title: 'Press Inquiries',
  href: 'mailto:hello@resourcenetwork.co',
  isExternal: true,
  icon: '',
}
const inTheNews = {
  title: 'ReSource in the News',
  href: '/',
  isExternal: false,
  icon: '',
}
const mediaAssets = {
  title: 'Media Assets',
  href: '/brand',
  isExternal: false,
  icon: '',
}
const pressMenu = {
  title: 'Press',
  menuItems: [pressInquiries, inTheNews, mediaAssets],
}
const communityMenu = {
  title: 'Community',
  menuItems: socialLinks
}
const blogButton = {
  title: 'Blog',
  href: '/blog',
  isExternal: false
}
const whitepaperButton = {
  title: 'Whitepaper',
  href: 'https://resource-network.gitbook.io/resource-technical/',
  isExternal: true
}
const jobsButton = {
  title: 'Jobs',
  href: '/jobs',
  isExternal: false
}

// export
export const Nav = () => {
  // state
  const { colorMode, toggleColorMode } = useColorMode()

  // color mode helpers
  const colorModeIcon = colorMode === 'light' ? faSun : faMoon
  const colorModeIconColor = colorMode === 'light' ? 'blue' : 'yellow'
  const textColor = colorMode === 'light' ? 'black' : 'white'
  const logotypeSrcName = colorMode === 'light' ? logotypeBlackSrcName : logotypeWhiteSrcName
  const menuGroupTitleColor = colorMode === 'light' ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255, 0.33)'

  // render logotype
  const renderLogotype = () => {
    return (
      <Image
        w = { 'auto' }
        src = { getCloudinaryImagePath(logotypeSrcName) }
        alt = { 'resource logotype' }
      />
    )
  }

  // render menu item
  const renderMenuItem = (menuItem) => {
    return (
      menuItem.icon ?
        <MenuItem
          icon = {<FontAwesomeIcon icon={menuItem.icon} size={'lg'} fixedWidth />}
          as = {Link}
          key = {menuItem.title}
          href = {menuItem.href}
          outline = 'none'
          color = { textColor }
          boxShadow = 'none'
          isExternal = {menuItem.isExternal}
          _active = {{
            outline: 'none',
            boxShadow: 'none'
          }}
          _hover = {{
            outline: 'none',
            boxShadow: 'none',
            textDecoration: 'none',
            color: menuItem.brandColor
          }}
          _focus = {{
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          { menuItem.title }
        </MenuItem>
      :
        <MenuItem
          as = {Link}
          key = {menuItem.title}
          href = {menuItem.href}
          outline = {'none'}
          color = { textColor }
          boxShadow = {'none'}
          isExternal = {menuItem.isExternal}
          _active = {{
            outline: 'none',
            boxShadow: 'none'
          }}
          _hover = {{
            outline: 'none',
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'primaryActive'
          }}
          _focus = {{
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          { menuItem.title }
        </MenuItem>
    )
  }

  // render menu
  const renderMenu = (menu) => {
    return (
      <Menu>
        <MenuButton
          color = { textColor }
          as = { Button }
          rightIcon = {
            <FontAwesomeIcon icon = { faChevronDown } size = { 'xs' } />
          }
          bgColor = {'none'}
          _hover = {{
            color: 'primaryActive',
            bgColor: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}
          _active = {{
            color: 'primaryActive',
            outline: 'none',
            boxShadow: 'none',
            bgColor: 'none'
          }}
          _focus = {{
            color: textColor,
            outline: 'none',
            boxShadow: 'none',
            bgColor: 'none'
          }}
          _expanded = {{
            color: 'primaryActive',
            outline: 'none',
            boxShadow: 'none',
            bgColor: 'none'
          }}
        >
          {menu.title}
        </MenuButton>

        <MenuList
          boxShadow = {'none'}
          backdropFilter = 'blur(10px)'
          bgColor = 'primaryBg'
          m = { 2 }
          ml = { -2 }
          p = { 4 }
          border={'none'}
          outline={'none'}
          borderTop={'1px solid #7161EF'}
          borderRadius={'0'}
        >
          { menu.menuItems.map( menuItem =>
            renderMenuItem(menuItem)
          ) }
        </MenuList>
      </Menu>
    )
  }

  // render button
  const renderButton = (button) => {
    return (
      <Button
        as = { Link }
        href = { button.href }
        isExternal = { button.isExternal }
        outline = { 'none' }
        textDecoration = { 'none' }
        bgColor = { 'none' }
        _hover = {{
          color: 'primaryActive',
          textDecoration: 'none',
        }}
        _focus = {{
          bgColor: 'none',
          color: 'primaryActive',
          textDecoration: 'none',
        }}
        _active = {{
          bgColor: 'none',
          color: 'primaryActive',
          textDecoration: 'none',
        }}
      >
        { button.title }
      </Button>
    )
  }

  // render icon button
  const renderIconButton = button => {
    return (
      <IconButton
        as = { Link }
        href = { button.href }
        icon= { <FontAwesomeIcon icon={ button.icon } size={ 'lg' } /> }
        aria-label = { button.ariaLabel }
        bgColor = 'none'
        mx = { 1 }
        isExternal
        _hover = {{
          color: button.brandColor
        }}
      />
    )
  }

  const renderColorModeButton = () => { return (
    <Button
      onClick={ toggleColorMode }
      color = { colorModeIconColor }
      bgColor = 'primaryBg'
      ml = { 4 }
      _hover = {{
        color: textColor,
        bgColor: 'primaryBg'
      }}
      _after={{
        outline: 'none'
      }}
    >
      <FontAwesomeIcon icon= { colorModeIcon } size = { '1x' } />
    </Button>
  ) }

  const renderDropdownMenu = () => { return (
    <Menu>
      <MenuButton
        color = { textColor }
        as = { Button }
        rightIcon = {
          <FontAwesomeIcon icon = { faBars } size = { 'lg' } />
        }
        bgColor = {'none'}
        _hover = {{
          color: 'primaryActive',
          bgColor: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
        _active = {{
          color: 'primaryActive',
          outline: 'none',
          boxShadow: 'none',
          bgColor: 'none'
        }}
        _focus = {{
          color: textColor,
          outline: 'none',
          boxShadow: 'none',
          bgColor: 'none'
        }}
        _expanded = {{
          color: 'primaryActive',
          outline: 'none',
          boxShadow: 'none',
          bgColor: 'none'
        }}
      />

      <MenuList
        bgColor = 'primaryBg'
        m = { 2 }
        ml = { -2 }
        p = { 4 }
        border = 'none'
        outline = 'none'
        borderTop = '1px solid #7161EF'
        borderRadius = '0'
        boxShadow = 'none'
         backdropFilter = { 'blur(10px)' }
      >
        <MenuGroup
          title = 'Blog'
          color = { menuGroupTitleColor }
        >
          { renderMenuItem(blogButton) }
        </MenuGroup>
        <MenuDivider color = {menuGroupTitleColor} />
        <MenuGroup
          title = 'Press'
          color = { menuGroupTitleColor }
        >
          { pressMenu.menuItems.map( menuItem =>
            renderMenuItem(menuItem)
          ) }
        </MenuGroup>
        <MenuDivider color = {menuGroupTitleColor} />
        <MenuGroup
          title = 'Community'
          color = { menuGroupTitleColor }
        >
          { communityMenu.menuItems.map( menuItem =>
            renderMenuItem(menuItem)
          ) }
        </MenuGroup>
        <MenuDivider color = {menuGroupTitleColor} />
        <MenuGroup
          title = 'Whitepaper'
          color = { menuGroupTitleColor }
        >
          { renderButton(whitepaperButton) }
        </MenuGroup>
        <MenuDivider color = {menuGroupTitleColor} />
        <MenuGroup
          title = 'Jobs'
          color = { menuGroupTitleColor }
        >
          { renderButton(jobsButton) }
        </MenuGroup>
      </MenuList>
    </Menu>
  ) }

  return (
    <Flex
      direction = 'row'
      wrap = 'nowrap'
      alignItems = 'center'
      justifyContent = 'space-between'
      w = 'full'
      align = 'center'
      bgColor = 'primaryBg'
      p = {4}
      px = { [8, 8, 12, 16] }
      zIndex = { 100 }
    >
      <Link w={ '128px' } href={ '/' } >
        {renderLogotype()}
      </Link>
      <Flex
        display = { ['none', 'none', 'none', 'flex'] }
      >
        {renderButton(blogButton)}
        {renderMenu(pressMenu)}
        {renderMenu(communityMenu)}
        {renderButton(whitepaperButton)}
        {renderButton(jobsButton)}
      </Flex>
      <Flex
        display = { ['none', 'none', 'none', 'flex'] }
        direction = { 'row' }
        justify = { 'flex-end' }
      >
        { featuredSocialLinks.map( link => (
          renderIconButton(link)
        )) }
        { renderColorModeButton() }
      </Flex>
      <Flex
        display = { ['flex', 'flex', 'flex', 'none'] }
        direction = { 'row' }
        justify = { 'flex-end' }
      >
        { renderDropdownMenu() }
        { renderColorModeButton() }
      </Flex>
    </Flex>
  )
}

export default Nav;