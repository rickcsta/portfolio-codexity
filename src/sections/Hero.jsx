"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Modal,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const INSTAGRAM_URL = "https://instagram.com/codexityofc/";

  const EMAIL_TO = "codexity2026@gmail.com";
  const EMAIL_SUBJECT = "Contato - Codexity";
  const EMAIL_BODY = "Olá, gostaria de falar com a Codexity.";

  const mailtoHref =
    `mailto:${EMAIL_TO}` +
    `?subject=${encodeURIComponent(EMAIL_SUBJECT)}` +
    `&body=${encodeURIComponent(EMAIL_BODY)}`;

  const WHATSAPP_TO = "558396538298";
  const WHATSAPP_MESSAGE = "Olá, gostaria de falar com a Codexity.";

  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_TO}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: {
          xs: `url(${isDark ? "/hero-mobile-dark.png" : "/hero-mobile-light.png"})`,
          md: `url(${isDark ? "/hero-desktop-dark.png" : "/hero-desktop-light.png"})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 640 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.08,
              mb: 2,
              fontSize: { xs: 38, sm: 46, md: 56 },
            }}
          >
            Onde código encontra{" "}
            <Box
              component="span"
              sx={{
                backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              inteligência
            </Box>
            .
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 4 }}>
            Somos a Codexity — uma empresa focada em soluções digitais
            inteligentes, resilientes e escaláveis.
          </Typography>

          <Button variant="contained" onClick={handleOpen}>
            Falar com a Codexity
          </Button>
        </Box>
      </Container>

      {/* MODAL GLASS */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: alpha("#000", 0.4),
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            p: 2,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 520,
              borderRadius: 3,
              backdropFilter: "blur(16px)",
              backgroundColor: alpha(theme.palette.background.paper, 0.65),
              border: `1px solid ${alpha("#fff", isDark ? 0.08 : 0.25)}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
                py: 1.5,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Falar com a Codexity
              </Typography>

              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                Escolha um canal:
              </Typography>

              <Stack spacing={1.5}>
                {" "}
                <Button
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  href={mailtoHref}
                  onClick={handleClose}
                >
                  E-mail
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<InstagramIcon />}
                  href={INSTAGRAM_URL}
                  onClick={handleClose}
                >
                  Instagram
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  href={WHATSAPP_LINK}
                  onClick={handleClose}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
}
