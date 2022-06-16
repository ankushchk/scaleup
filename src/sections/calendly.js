import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

const Calendly = () => {
  return (
    <Box as="section" sx={styles.calendlyStyle}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">Let's Talk</Text>
            <Heading as="h3">Book A Free Strategy Call</Heading>
            <Text as="p">
              This is a free, and non-binding strategy call with Scale UP. In
              this call we will elaborate on marketing, design or programming
              strategies we could tailor and implement for your particular
              business, in order to heavily boost the growth of your business
              and online sales. Simply locate a time-slot that would suit your
              calendar, and lock it in. We’re looking forward to talking to you.
            </Text>
            <Link path="#" sx={styles.button}>
              Contact Us
            </Link>
          </Box>
          <Box sx={styles.popup}>
            <div style={{ height: "800px" }}>
              <iframe
                src="https://calendly.com/ankushchauhan/30min?hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Calendly;

const styles = {
  calendlyStyle: {
    mt: ["-90px", null, null, null, "0"],
    py: ["50px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 38.5%"],
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 0.5,
    },
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "#02073E",
      fontSize: ["16px", null, null, "18px"],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  popup: {
    flex: ["0 0 100%", null, null, null, "0 0 61.5%"],
  },
};
