import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { CustomArrowProps } from "../types";

const CustomArrow: React.FC<CustomArrowProps> = ({
  onClick,
  retreatFromLeftSide,
  retreatFromRightSide,
  arrowIcon,
}) => {
  const theme = useTheme();

  const arrowStyles = {
    arrowBackgroundPhoneSize: {
      minWidth: "94px",
      minHeight: "94px",
    },
    arrowSize: {
      width: "64px",
      height: "64px",
    },
  };
  const [sizeStyle, setSizeStyle] = useState(arrowStyles);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < theme.breakpoints.values.xl) {
        setSizeStyle({
          arrowBackgroundPhoneSize: {
            minWidth: "64px",
            minHeight: "64px",
          },
          arrowSize: {
            width: "44px",
            height: "44px",
          },
        });
      }
      if (window.innerWidth < theme.breakpoints.values.lg) {
        setSizeStyle({
          arrowBackgroundPhoneSize: {
            minWidth: "54px",
            minHeight: "54px",
          },
          arrowSize: {
            width: "34px",
            height: "34px",
          },
        });
      }
      if (window.innerWidth < theme.breakpoints.values.mlg) {
        setSizeStyle({
          arrowBackgroundPhoneSize: {
            minWidth: "44px",
            minHeight: "44px",
          },
          arrowSize: {
            width: "24px",
            height: "24px",
          },
        });
      }
      if (window.innerWidth >= theme.breakpoints.values.xl) {
        setSizeStyle({
          arrowBackgroundPhoneSize: {
            minWidth: "94px",
            minHeight: "94px",
          },
          arrowSize: {
            width: "64px",
            height: "64px",
          },
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    theme.breakpoints.values.xl,
    theme.breakpoints.values.lg,
    theme.breakpoints.values.mlg,
  ]);

  return (
    <button
      onClick={() => onClick()}
      style={
        {
          position: "absolute",
          outline: "0",
          zIndex: "1000",
          background: "rgba(0,0,0,0)",
          color: `${theme.palette.primary.contrastText}`,
          left: `${retreatFromLeftSide}`,
          right: `${retreatFromRightSide}`,
          border: "0",
          cursor: "pointer",
          ...sizeStyle.arrowBackgroundPhoneSize,
        } as React.CSSProperties
      }
    >
      <img
        src={arrowIcon}
        alt="Next Arrow"
        style={{
          objectFit: "contain",
          ...sizeStyle.arrowSize,
        }}
      />
    </button>
  );
};

export default CustomArrow;
