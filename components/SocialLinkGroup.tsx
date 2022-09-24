import { useTheme } from "@emotion/react";
import { Anchor, createStyles } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons";
import React from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: "4px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: "background-color 100ms ease-in-out",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const links = [
  {
    link: "https://wa.me/905551234567",
    content: <IconBrandWhatsapp />,
    color: "#25D366",
  },
  {
    link: "https://tr-tr.facebook.com/NASA",
    content: <IconBrandFacebook />,
    color: "#4267B2",
  },
  {
    link: "https://www.instagram.com/nasa",
    content: <IconBrandInstagram />,
    color: "#E1306C",
  },
];

const SocialLinkGroup: React.FC = () => {
  const theme = useTheme();
  const { classes } = useStyles();

  return (
    <>
      {links.map((link) => (
        <Anchor
          href={link.link}
          key={link.link}
          className={classes.link}
          target="_blank"
          sx={{
            color: link.color,
            "&:hover": { color: "#fff", backgroundColor: link.color },
          }}
        >
          {link.content}
        </Anchor>
      ))}
    </>
  );
};

export default SocialLinkGroup;
