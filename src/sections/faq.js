import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "How much does it cost for a single project or marketing campaign?",
    contents: (
      <div>
        It depends on the type of project and the type of marketing campaign, we
        usually charge $200 - $10,000 for a project or marketing campaign.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "How you accept the payment?",
    contents: (
      <div>
        We accept the payment through Stripe, and Paypal. We also accept payment
        in other mediums as the time permits.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "How long does it take complete the marketing campaign and the project at your company?",
    contents: (
      <div>
        It depends on the type of project and the type of marketing campaign, we
        generally take 1-2 weeks for small projects and 3-4 weeks for large
        projects.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "If I make a mistake, how do I get back the money?",
    contents: (
      <div>
        If you make a mistake, we will refund you the money within 3-4 days.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "If I pay with a credit card, how do I know if it was successful?",
    contents: (
      <div>We will send you an email after the payment is successful.</div>
    ),
  },
  {
    isExpanded: false,
    title: "Do you also do SEO for websites?",
    contents: <div>Yes, we do SEO for websites.</div>,
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <a href="mailto:ac.ankushchauhan.2006@gmail.com">
              <Box sx={styles.askButton}>Ask your Question</Box>
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
