// imports
import React from "react"
import { Flex, IconButton, Image, Input, Link, useColorMode } from "@chakra-ui/react"
import { getCloudinaryImagePath } from "./App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialLinks } from "../data/socialLinks"
import axios from "axios"
import { customAlphabet } from "nanoid"
import { useState } from "react"

// images
const logotypeWhiteSrcName = "/brand/resource-logotype-white_osat1c.svg"
const logotypeBlackSrcName = "/brand/resource-logotype-black_lsczap.svg"

// learn more
const learnTitle = {
  title: "Learn more",
  href: "",
  isExternal: false,
}
const blog = {
  title: "Blog",
  href: "/blog",
  isExternal: false,
}
const news = {
  title: "News",
  href: "/",
  isExternal: false,
  icon: "",
}
const whitepaper = {
  title: "Whitepaper",
  href: "https://resource-network.gitbook.io/resource-technical/",
  isExternal: true,
}
const about = {
  title: "About",
  href: "/about",
  isExternal: false,
}
const learnMore = [learnTitle, about, blog, news, whitepaper]
// join us
const joinTitle = {
  title: "Join us",
  href: "",
  isExternal: false,
}
const careers = {
  title: "Careers",
  href: "/careers",
  isExternal: false,
}
const joinUs = [joinTitle, careers]
// resources
const resourcesTitle = {
  title: "Resources",
  href: "",
  isExternal: false,
}
const faq = {
  title: "FAQ",
  href: "/faq",
  isExternal: false,
}
const brandAssets = {
  title: "Brand Assets",
  href: "/brand",
  isExternal: false,
}
const contact = {
  title: "Contact",
  href: "mailto:hello@resourcenetwork.co",
  isExternal: true,
}
const resources = [resourcesTitle, faq, brandAssets, contact]
// trade
const tradeTitle = {
  title: "Trade",
  href: "",
  isExternal: false,
}
const matcha = {
  title: "Matcha",
  href: "https://matcha.xyz/markets/42220/0x74c0c58b99b68cf16a717279ac2d056a34ba2bfe",
  isExternal: true,
}
const uniswap = {
  title: "Uniswap",
  href: "https://uniswap.org",
  isExternal: true,
}
const pancakeswap = {
  title: "Pancakeswap",
  href: "https://pancakeswap.finance/swap",
  isExternal: true,
}
const ubeswap = {
  title: "Ubeswap",
  href: "https://app.ubeswap.org/#/farm/0x74c0C58B99b68cF16A717279AC2d056A34ba2bFe/0x918146359264C492BD6934071c6Bd31C854EDBc3/0xF4662e4E254006939c2198cb6F61635b03fd14Eb",
  isExternal: true,
}
const gateio = {
  title: "Gate.io",
  href: "https://www.gate.io/trade/source_usdt",
  isExternal: false,
}
const trade = [tradeTitle, matcha, uniswap, pancakeswap, ubeswap, gateio]

// for email capture
const nanoid = customAlphabet("1234567890abcdef", 10)
const apiKey = process.env.REACT_APP_CIO_API_KEY
const siteId = process.env.REACT_APP_CIO_SITE_ID
const writeToken = process.env.REACT_APP_SEGMENT_WRITE_KEY

export const Footer = () => {
  const [email, setEmail] = useState()
  const [submitted, setSubmitted] = useState(false)

  const { colorMode } = useColorMode()
  const textColor = colorMode === "light" ? "black" : "white"
  const logotypeSrcName = colorMode === "light" ? logotypeBlackSrcName : logotypeWhiteSrcName

  // HANDLERS

  const handleChange = (e) => {
    const { value } = e.target
    const emailState = value.trim().toLowerCase()
    setEmail(emailState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await captureFormSubmissionEmail(email)
      setSubmitted(true)
      setEmail("")
    } catch (e) {
      console.log("Error capturing email: ", e)
    }
  }

  // for email capture
  const captureFormSubmissionEmail = async (email) => {
    const customerIOConfig = {
      method: "POST",
      url: "https://track.customer.io/api/v1/forms/resource_protocol_email/submit",
      crossDomain: true,
      mode: "CORS",
      headers: {
        "Content-Type": "text/plain",
      },
      auth: {
        username: siteId,
        password: apiKey,
      },
      data: JSON.stringify({
        data: {
          email: email,
          id: nanoid(),
        },
      }),
    }

    const segmentConfig = {
      method: "POST",
      url: "https://api.segment.io/v1/track",
      crossDomain: true,
      mode: "CORS",
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: writeToken,
        password: "",
      },
      data: JSON.stringify({
        userId: nanoid(),
        event: "EmailCapture-ResourceProtocolMarketing",
        properties: {
          email: email,
          tags: "ReSource Protocol Marketing Capture",
        },
      }),
    }

    try {
      return await Promise.all([axios(segmentConfig), axios(customerIOConfig)])
    } catch (e) {
      console.log("Error submitting to segment & customerio: ", e)
    }
  }

  // RENDERS

  const renderLogotype = () => {
    return <Image src={getCloudinaryImagePath(logotypeSrcName)} alt="resource logotype" w="128px" alignSelf="flex-start" />
  }

  const renderIconButton = (button) => {
    return (
      <IconButton
        as={Link}
        href={button.href}
        icon={<FontAwesomeIcon icon={button.icon} size={"lg"} />}
        aria-label={button.ariaLabel}
        mr={1}
        bgColor="none"
        key={button.title}
        isExternal
        _hover={{
          color: button.brandColor,
        }}
      />
    )
  }

  const renderSocialIcons = () => {
    return (
      <Flex direction="row" wrap="wrap" alignSelf="flex-start" mt={8} ml={-2}>
        {socialLinks.map((socialLink) => renderIconButton(socialLink))}
      </Flex>
    )
  }

  const renderLinkList = (list) => {
    return (
      <Flex direction="column" align="flex-start" justify="flex-start" className="footer-title" mr={16} mt={8}>
        {list.map((item) => (
          <Link
            href={item.href}
            isExternal={item.isExternal}
            color={textColor}
            key={item.title}
            mb={4}
            _hover={{
              "text-decoration": "none",
              color: "primaryActive",
            }}
          >
            {item.title}
          </Link>
        ))}
      </Flex>
    )
  }

  const renderSubscribe = () => {
    return (
      <Flex direction="column" align="flex-start" justify="flex-start" className="footer-title" mr={16} mt={8}>
        <Link
          color={textColor}
          mb={4}
          _hover={{
            "text-decoration": "none",
            color: "primaryActive",
          }}
        >
          Subscribe to our newsletter
        </Link>
        <Flex direction="row" align="center" justify="flex-start">
          <Input placeholder="Email" size="md" type="email" value={email} id="email" onChange={handleChange} />
          <Input
            ml={2}
            px={4}
            w="min-content"
            minW="none"
            type="submit"
            id="submit"
            bgColor="primary"
            color="white"
            cursor="pointer"
            textDecoration="none"
            value={submitted ? "Submitted!" : "Submit"}
            onClick={handleSubmit}
            _active={{
              bgColor: "primaryActive",
              textDecoration: "none",
            }}
            _hover={{
              bgColor: "primaryActive",
              textDecoration: "none",
            }}
            _focus={{
              bgColor: "primaryActive",
              textDecoration: "none",
            }}
          />
        </Flex>
      </Flex>
    )
  }

  // MAIN

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      py={[12, 12, 12, 16]}
      px={[16, 16, 24, 32]}
      bgColor="rgba(149, 127, 239, 0.1)"
      borderBottom="24px solid rgba(149, 127, 239, 0.2)"
    >
      {renderLogotype()}
      {renderSocialIcons()}
      <Flex direction="row" w="full" align="flex-start" justify="space-between" mt={4} wrap="wrap">
        {renderLinkList(learnMore)}
        {renderLinkList(joinUs)}
        {renderLinkList(resources)}
        {renderLinkList(trade)}
        {renderSubscribe()}
      </Flex>
    </Flex>
  )
}

export default Footer
