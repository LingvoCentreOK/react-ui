import React, { Fragment } from "react";
import { Box, Grid, Typography, useTheme, Link } from "@mui/material";
import { ContactInfo, ContactInformationProps } from "../../../types";
import { Link as OffSetLink } from "react-scroll";
import phoneIcon from "../../../assets/icons/contact_block_icons/phone-icon.png";
import facebookIcon from "../../../assets/icons/contact_block_icons/facebook-icon.png";
import instagramIcon from "../../../assets/icons/contact_block_icons/instagram-icon.png";
import gmailIcon from "../../../assets/icons/contact_block_icons/gmail-icon.png";
import adressIcon from "../../../assets/icons/contact_block_icons/adress-icon.png";

const ContactsInformationComponent: React.FC = () => {
  const theme = useTheme();

  const contactInfoContextString: [string][] = [
    ["м. Черкаси,"],
    ["вул. Байди-Вишнивецького 37,"],
    [" 5й поверх"],
  ];
  const contactInformation: ContactInformationProps = {
    title: "ЯК З НАМИ ЗВ’ЯЗАТИСЬ",
    infos: [
      {
        contactIcon: phoneIcon ? phoneIcon : "phone icon",
        сontactInfoContext: "+380123456789",
        linkToImplementContact: "tel:+380123456789",
      },
      {
        contactIcon: facebookIcon ? facebookIcon : "facebook icon",
        сontactInfoContext: "facebook.com",
        linkToImplementContact: "https://www.facebook.com",
      },
      {
        contactIcon: instagramIcon ? instagramIcon : "instagram icon",
        сontactInfoContext: "instagram.com",
        linkToImplementContact: "https://www.instagram.com",
      },
      {
        contactIcon: gmailIcon ? gmailIcon : "gmail icon",
        сontactInfoContext: "gmail@gmail.com",
        linkToImplementContact: "mailto:gmail@gmail.com",
      },
      {
        contactIcon: adressIcon ? adressIcon : "adress icon",
        сontactInfoContext: contactInfoContextString.map(
          (infoContext, index) => (
            <Fragment key={index}>
              {infoContext}
              <br />
            </Fragment>
          )
        ),
        linkToImplementContact: "makerElementId",
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vw",
          clipPath: "polygon(0 0, 100vw 0, 100vw 45vw, 0 80vw, 0 85vw)",
          [theme.breakpoints.down("sm")]: {
            clipPath: "polygon(0 0, 100vw 0, 100vw 105vw, 0 140vw, 0 145vw)",
            height: "182vw",
          },
        }}
      >
        <Box
          sx={{
            p: "172px 5px",
            justifyContent: "space-around",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              p: "8vw 5px",
            },
            [theme.breakpoints.down("sm")]: {
              p: "8vw 0px",
            },
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              id="elementId"
              color="primary.contrastText"
              sx={{
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                WebkitBoxDirection: "normal",
                fontSize: "48px",
                fontWeight: "500",
                lineHeight: "56px",
                textAlign: "justify",
                color: "primary.contrastText",
                cursor: "default",
                [theme.breakpoints.down("xl")]: {
                  fontSize: "3vw",
                  letterSpacing: "0.2vw",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "4.8vw",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "9.4vw",
                  lineHeight: "36px",
                  pb: "10vw",
                  width: "56%",
                },
              }}
            >
              {contactInformation.title}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 1, md: 2 }}
              sx={{
                overflow: "hidden",
                maxWidth: "1200px",
                [theme.breakpoints.down("xl")]: {
                  maxWidth: "86%",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "96%",
                },
              }}
            >
              {contactInformation.infos &&
                contactInformation.infos.map(
                  (
                    contact: ContactInfo,
                    index: number
                  ): React.JSX.Element | null => {
                    if (contact) {
                      return (
                        <Grid
                          key={index}
                          item
                          xs={12}
                          sm={6}
                          sx={{
                            display: "flex",
                            mt: "8vw",
                            pl: index % 2 === 0 ? "0%" : "8%",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "3vw",
                              letterSpacing: "0.2vw",
                              mt: "6vw",
                            },
                            [theme.breakpoints.down("xlg")]: {
                              fontSize: "2.9vw",
                              letterSpacing: "0.2vw",
                            },
                            [theme.breakpoints.down("xlg")]: {
                              fontSize: "2.8vw",
                              letterSpacing: "0.2vw",
                            },
                            [theme.breakpoints.down("sm")]: {
                              pl: "12%",
                              fontSize: "5vw",
                              lineHeight: "23.5px",
                              maxWidth: "74vw",
                              m: "0.2vw auto 0",
                            },
                          }}
                        >
                          {index === 4 ? (
                            <OffSetLink
                              to={`${contact.linkToImplementContact}`}
                              smooth={true}
                              duration={1000}
                              offset={400}
                            >
                              <Box sx={{ display: "flex", cursor: "pointer" }}>
                                <Box
                                  component="img"
                                  src={contact.contactIcon}
                                  title={`${contact.contactIcon}`}
                                  alt={`${contact.contactIcon}`}
                                  sx={{
                                    width: "77px",
                                    height: "77px",
                                    m: "auto 36px auto 0",
                                    [theme.breakpoints.down("xl")]: {
                                      width: "5vw",
                                      height: "5vw",
                                      m: "auto 2vw auto 0",
                                    },
                                  }}
                                />
                                <Typography
                                  gutterBottom
                                  variant="h4"
                                  color="primary.contrastText"
                                  sx={{
                                    fontFamily: "Maven Pro, sans-serif",
                                    fontWeight: 500,
                                    my: "auto",
                                    [theme.breakpoints.down("lg")]: {
                                      fontSize: "3vw",
                                    },
                                    [theme.breakpoints.down("mlg")]: {
                                      fontSize: "2.9vw",
                                    },
                                    [theme.breakpoints.down("xlg")]: {
                                      fontSize: "2.8vw",
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                      fontSize: "5vw",
                                    },
                                  }}
                                >
                                  {contact.сontactInfoContext}
                                </Typography>
                              </Box>
                            </OffSetLink>
                          ) : (
                            <Link
                              href={contact.linkToImplementContact}
                              target="_blank"
                              rel="noopener noreferrer"
                              component="a"
                              underline="none"
                              sx={{
                                display: "flex",
                                cursor: "pointer",
                              }}
                            >
                              <Box
                                component="img"
                                src={contact.contactIcon}
                                title={`${contact.contactIcon}`}
                                alt={`${contact.contactIcon}`}
                                sx={{
                                  width: "77px",
                                  height: "77px",
                                  m: "auto 36px auto 0",
                                  [theme.breakpoints.down("xl")]: {
                                    width: "5vw",
                                    height: "5vw",
                                    m: "auto 2vw auto 0",
                                  },
                                }}
                              />
                              <Typography
                                gutterBottom
                                variant="h4"
                                color="primary.contrastText"
                                sx={{
                                  fontFamily: "Maven Pro, sans-serif",
                                  fontWeight: 500,
                                  my: "auto",
                                  [theme.breakpoints.down("lg")]: {
                                    fontSize: "3vw",
                                  },
                                  [theme.breakpoints.down("mlg")]: {
                                    fontSize: "2.9vw",
                                  },
                                  [theme.breakpoints.down("xlg")]: {
                                    fontSize: "2.8vw",
                                  },
                                  [theme.breakpoints.down("sm")]: {
                                    fontSize: "5vw",
                                  },
                                }}
                              >
                                {contact.сontactInfoContext}
                              </Typography>
                            </Link>
                          )}
                        </Grid>
                      );
                    }
                    return null;
                  }
                )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsInformationComponent;
