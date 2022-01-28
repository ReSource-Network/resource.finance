import { faDiscord, faGithub, faLinkedin, faMedium, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const twitter = {
  title: "Twitter",
  href: "https://twitter.com/ReSource_Fi",
  isExternal: true,
  icon: faTwitter,
  ariaLabel: "Twitter page",
  brandColor: "#1DA1F2",
}
const telegram = {
  title: "Telegram",
  href: "https://t.me/theresourcenetwork",
  isExternal: true,
  icon: faTelegram,
  ariaLabel: "Telegram invite",
  brandColor: "#0088cc",
}
const discord = {
  title: "Discord",
  href: "https://discord.gg/q4fJjWqD6g",
  isExternal: true,
  icon: faDiscord,
  ariaLabel: "Discord invite",
  brandColor: "#7289da",
}
const medium = {
  title: "Medium",
  href: "https://re-source.medium.com/",
  isExternal: true,
  icon: faMedium,
  ariaLabel: "Medium blog",
  brandColor: "#00ab6c",
}
const youtube = {
  title: "YouTube",
  href: "https://www.youtube.com/channel/UCphf6BYgfUDccb4OEmj_oqg",
  isExternal: true,
  icon: faYoutube,
  ariaLabel: "YouTube channel",
  brandColor: "#FF0000",
}
const linkedin = {
  title: "LinkedIn",
  href: "https://www.linkedin.com/company/resourcenetwork/",
  isExternal: true,
  icon: faLinkedin,
  ariaLabel: "LinkedIn profile",
  brandColor: "#0077b5",
}
const github = {
  title: "GitHub",
  href: "https://github.com/ReSource-Network/",
  isExternal: true,
  icon: faGithub,
  ariaLabel: "github profile",
  brandColor: "#6cc644",
}

export const socialLinks = [discord, telegram, twitter, medium, youtube, linkedin, github]
export const featuredSocialLinks = [discord, medium, twitter]
