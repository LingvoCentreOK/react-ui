import React from "react";
import {
  CardMedia,
  Typography,
  Paper,
  CardContent,
  useTheme,
} from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { TeamMemberProps } from "../../../types";

const TeamMemberItem: React.FC<TeamMemberProps> = ({ name, info, image }) => {
  return <TeamMemberCard name={name} info={info} image={image} />;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, info, image }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        width: "350px",
        backgroundColor: "#00000000",
        p: "0.3vw",
        m: "0 auto",
        ml: "11vw",
        cursor: "pointer",
        [theme.breakpoints.down("lg")]: {
          ml: "8vw",
        },
        [theme.breakpoints.down("lg")]: {
          ml: "7vw",
        },
        [theme.breakpoints.down("mlg")]: {
          ml: "5vw",
        },
        [theme.breakpoints.down("xlg")]: {
          p: "0.5vw",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          m: "0 auto",
        },
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt="img"
        sx={{
          maxWidth: "156px",
          maxHeight: "156px",
          borderRadius: "50%",
          mt: "2px",
          mr: "5%",
          objectFit: "cover",
          [theme.breakpoints.down("xlg")]: {
            maxWidth: "16vw",
            maxHeight: "16vw",
          },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "42vw",
            maxHeight: "42vw",
            m: "auto 2vw",
          },
        }}
      />
      <CardContent
        sx={{
          flex: "0 1 auto",
          p: "0px",
          [theme.breakpoints.down("xlg")]: {
            maxWidth: "15.6vw",
            maxHeight: "15.6vw",
          },
          [theme.breakpoints.down("sm")]: {
            p: "5px 0px",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          color="primary.contrastText"
          sx={{
            m: "0px",
            fontFamily: "Maven Pro, sans-serif",
            letterSpacing: "2px",
            textAlign: "left",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "3.33vw",
              letterSpacing: "0.2vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "10vw",
              letterSpacing: "0vw",
              mt: "0vw",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          color="primary.contrastText"
          sx={{
            width: "min-content",
            lineHeight: "24px",
            fontWeight: "400",
            fontFamily: "Maven Pro, sans-serif",
            letterSpacing: "2px",
            textAlign: "left",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "2vw",
              letterSpacing: "0.2vw",
              lineHeight: "2.4vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "6vw",
              letterSpacing: "0.4vw",
              lineHeight: "6.2vw",
            },
          }}
        >
          {info}
        </Typography>
      </CardContent>
    </Paper>
  );
};

export default TeamMemberItem;
