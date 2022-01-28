// import
import React from 'react'
import { Flex, Heading, Image, Link, useColorMode } from "@chakra-ui/react";
import { getCloudinaryImagePath } from "./App";

// stakeholders
const celoStarter = {
  href: "https://celostarter.net",
  pngSrcName: "stakeholders/celo-starter_s9gvpb.png",
  pngWhiteSrcName: 'logos/cstarter-w_k9mm7s.png',
  altText: "celo starter logo"
}
const futurePerfectVentures = {
  href: "https://www.futureperfectventures.com",
  pngSrcName: "stakeholders/future-perfect-ventures_ynfyvv.png",
  pngWhiteSrcName: "logos/fpv-logo-white_iimkof.png",
  altText: "future perfect ventures logo",
}
const followTheSeed = {
  href: "https://followtheseed.vc",
  pngSrcName: "stakeholders/follow-the-seed_czxcpk.png",
  pngWhiteSrcName: "logos/follow-the-seed-white_i26mqu.png",
  altText: "follow the seed logo",
}
const davoaCapital = {
  href: "https://www.davoa.capital",
  pngSrcName: "stakeholders/davoa_jv2heg.png",
  pngWhiteSrcName: "logos/davoa-logo-white_ftd432.png",
  altText: "davoa capital logo",
}
const exNetworkCapital = {
  href: "https://exnetworkcapital.com",
  pngSrcName: "stakeholders/exnetwrok-capital_y1cbtk.png",
  pngWhiteSrcName: "logos/exnetwrok-logo-white_tbvq5z.png",
  altText: "ex network capital logo",
}
const floriVentures = {
  href: "https://www.floriventures.com",
  pngSrcName: "stakeholders/flori-ventures-black_hhccxx.png",
  pngWhiteSrcName: "logos/flori-ventures-logo-white_vuhm9z.png",
  altText: "flori ventures logo",
}
const ngcVentures = {
  href: "https://ngc.fund/home",
  pngSrcName: "stakeholders/ngc_tnz9kt.png",
  pngWhiteSrcName: "logos/ngc-logo-white_bhn4qn.png",
  altText: "ngc ventures logo",
}
const eutopiaVentures = {
  href: "https://eutopia.vc",
  pngSrcName: "stakeholders/eutopia-vc-logo_apaxlc.png",
  pngWhiteSrcName: "logos/eutopia-vc-logo-white_flwz7a.png",
  altText: "Eutopia Ventures logo",
}
const dsrvLabs = {
  href: "https://www.dsrvlabs.com/",
  pngSrcName: "stakeholders/dsrv-logo_ogw8pl.png",
  pngWhiteSrcName: "logos/dsrv-logo-white_dgnffa.png",
  altText: "DSRV Labs logo",
}
const stakeholders = {
  title: 'Stakeholders',
  logos: [
    celoStarter,
    davoaCapital,
    eutopiaVentures,
    exNetworkCapital,
    ngcVentures,
    floriVentures,
    futurePerfectVentures,
    followTheSeed,
    dsrvLabs,
  ]
}

// partners
const celo = {
  href: "https://celo.org/",
  pngSrcName: "celo-logo_ibvhry.png",
  pngWhiteSrcName: 'logos/celo-logo-white_qvxpw3.png',
  altText: "celo logo",
}
const teller = {
  href: "https://teller.finance/",
  pngSrcName: "teller-logo_lscjwc.png",
  pngWhiteSrcName: 'logos/teller-logo-white_jp2g3w.png',
  altText: "teller finance logo",
}
const blockchainAtBerkeley = {
  href: "https://blockchain.berkeley.edu/",
  pngSrcName: "blockchain-at-berkeley-logo_n0s2zi.png",
  pngWhiteSrcName: 'logos/bab-logo-white_psk3ux.png',
  altText: "blockchain at berkeley logo",
}
const irta = {
  href: "https://irta.com/",
  pngSrcName: "irta-logo_j5fvfq.png",
  pngWhiteSrcName: 'logos/irta-logo-white_a2waed.png',
  altText: "irta logo",
}
const doaMaker = {
  href: "https://daomaker.com/",
  pngSrcName: "doa-maker-logo_e2itef.png",
  pngWhiteSrcName: 'logos/doa-maker-logo-white_pftz3q.png',
  altText: "doa maker logo",
}
const partners = {
  title: 'Partners',
  logos: [ celo, teller, doaMaker, blockchainAtBerkeley, irta ]
}

// audits
const hacken = {
  href: "/ReSourceNetwork_Hacken_Audit_Report.pdf",
  pngSrcName: "hacken-logo_nou9j8.png",
  pngWhiteSrcName: "hacken-white_q5nwic.png",
  altText: "hacken logo",
}
const ambisafe = {
  href: "https://ambisafe.com/",
  pngSrcName: "ambisafe_jb4vkz.png",
  pngWhiteSrcName: "logos/ambisafe-logo-white_sww2ev.png",
  altText: "ambisafe logo",
}
const audits = {
  title: 'Audits',
  logos: [ hacken, ambisafe ]
}

export const Trustworthy = () => {

  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.400' : 'gray.500'

  const renderLogos = logoGroup => { return (
    <Flex
      direction = 'column'
      align = 'center'
      mb = { 16 }
      className = 'trustworthy-group'
    >
      <Heading
        fontSize = 'lg'
        fontWeight = 'semibold'
        fontStyle = 'italic'
        textTransform = 'uppercase'
        color = { textColor }
      >
        { logoGroup.title }
      </Heading>
      <Flex
        direction = 'row'
        align = 'center'
        justify = 'center'
        wrap = 'wrap'
      >
        { logoGroup.logos.map(logo => (
          <Flex
            direction = 'row'
            key = { logo.altText }
            w = { [36, 36, 40] }
            h = { 16 }
            mx = { 6 }
            align = 'center'
            justify = 'center'
          >
            <Link
              href = { logo.href }
              mt = { 4 }
              isExternal
              _hover = {{
                opacity: '0.5'
              }}
            >
              <Image
                src = { getCloudinaryImagePath( colorMode === 'light' ? logo.pngSrcName : logo.pngWhiteSrcName ) }
                alt = { logo.altText }
                maxH = { 8 }
                maxW = { [36, 36, 48] }
              />
            </Link>
          </Flex>
        ) ) }
      </Flex>
    </Flex>
  ) }

  return (
    <Flex
      direction = 'column'
      align = 'center'
      justify = 'space-between'
      mx = { [8, 8, 12, 16] }
      my = { [16, 16, 24, 32] }
      p = { [8, 8, 12, 16] }
      borderWidth = { 2 }
      borderRadius = '3xl'
      borderColor = 'primaryBg'
    >
      { renderLogos(partners) }
      { renderLogos(stakeholders) }
      { renderLogos(audits) }
    </Flex>
  )
}

export default Trustworthy;
