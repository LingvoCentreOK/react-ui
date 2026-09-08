import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../shared/scrollToSection";

type NavLink = {
  id: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Головна" },
  { id: "about", label: "Про нас" },
  { id: "team", label: "Команда" },
  { id: "achievements", label: "Досягнення" },
  { id: "news", label: "Новини" },
  { id: "languages", label: "Мови" },
  { id: "elementId", label: "Контакти" },
];

const navLinkSx = {
  color: "#fff",
  fontFamily: "Maven Pro, sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  cursor: "pointer",
  position: "relative" as const,
  padding: "6px 2px",
  whiteSpace: "nowrap" as const,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #ff8177, #8437fd)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.25s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
};

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => (): void => {
    const wasDrawerOpen = isDrawerOpen;
    setIsDrawerOpen(false);

    const performScroll = (): void => {
      if (location.pathname === "/") {
        scrollToSection(id);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    };

    // The mobile drawer locks page scroll while it's closing (MUI's exit
    // transition); wait for it to finish before scrolling the page.
    if (wasDrawerOpen) {
      setTimeout(performScroll, 350);
    } else {
      performScroll();
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled ? "rgba(134, 116, 170, 0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.18)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", px: { xs: "16px", md: "48px" } }}
      >
        <Box
          onClick={handleNavClick("home")}
          sx={{
            cursor: "pointer",
            fontFamily: "Maven Pro, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "1px",
            color: "#fff",
          }}
        >
          LingvoCentre
        </Box>

        {isMobile ? (
          <>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{ color: "#fff" }}
              aria-label="Відкрити меню"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                sx={{
                  width: "260px",
                  height: "100%",
                  background: "linear-gradient(180deg, #8674AA, #6b5c8f)",
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", p: "8px" }}
                >
                  <IconButton
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{ color: "#fff" }}
                    aria-label="Закрити меню"
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {NAV_LINKS.map((link) => (
                    <ListItemButton
                      key={link.id}
                      onClick={handleNavClick(link.id)}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          sx: {
                            color: "#fff",
                            fontFamily: "Maven Pro, sans-serif",
                            letterSpacing: "0.5px",
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.id}
                onClick={handleNavClick(link.id)}
                sx={navLinkSx}
              >
                {link.label}
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
