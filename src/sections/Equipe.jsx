"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const team = [
  {
    name: "Apollo Borges",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/apollo.jpeg",
    linkedin: "https://www.linkedin.com/in/apollo-borges-9358b939b/",
    github: "https://github.com/ImPollic",
  },
  {
    name: "Henrique Bruno",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/henrique.jpg",
    linkedin: "https://www.linkedin.com/in/henrique-costa-4522073a0",
    github: "https://github.com/rickcsta",
  },
  {
    name: "Hyoran Gabriel",
    role: "Marketing",
    photo: "/equipe/hyoran.jpeg",
    instagram: "https://www.instagram.com/hyoran_bidu/",
  },
  {
    name: "Yago Jordas",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/yago.jpeg",
    linkedin:"https://www.linkedin.com/in/yago-jordas-do-nascimento-pereira-b641223a3",
    github: "https://github.com/yago-jnp",
  },
  {
    name: "José Alan",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/alan.jpeg",
    github: "https://github.com/alnbr202",
  },
  {
    name: "Elias Soares",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/elias.jpg",
    github: "https://github.com/Elias23zx",
  },
  {
    name: "Daniel Martins",
    role: "Desenvolvedor FullStack",
    photo: "/equipe/danielM.jpeg",
    linkedin:"https://www.linkedin.com/in/daniel-martins-cordeiro-894ab7336",
    github: "https://github.com/danielmc-2409",
  },
];

export default function Equipe() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [showAll, setShowAll] = useState(false);

  const sortedTeam = useMemo(() => {
    return [...team].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }),
    );
  }, []);

  const VISIBLE_COUNT = 6;
  const visible = showAll ? sortedTeam : sortedTeam.slice(0, VISIBLE_COUNT);
  const hasMore = sortedTeam.length > VISIBLE_COUNT;

  return (
    <Box
      id="equipe"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* CARD PRINCIPAL (wrapper) */}
        <Card
          sx={{
            borderRadius: 4,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDark
              ? alpha(theme.palette.background.paper, 0.55)
              : theme.palette.background.paper,
            backdropFilter: isDark ? "blur(14px)" : "none",
            boxShadow: isDark
              ? "0 18px 55px rgba(0,0,0,0.45)"
              : "0 18px 55px rgba(2,6,23,0.10)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 6 } }}>
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", color: "text.secondary" }}
                >
                  EQUIPE
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    fontSize: { xs: 30, sm: 38, md: 44 },
                    color: "text.primary",
                  }}
                >
                  Pessoas que entregam com{" "}
                  <Box
                    component="span"
                    sx={{
                      backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    padrão de produto
                  </Box>
                  .
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 900,
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                  }}
                >
                  Nosso time combina engenharia e design para criar experiências
                  modernas, rápidas e confiáveis. Trabalhamos com processos
                  simples, comunicação clara e foco total em qualidade.
                </Typography>
              </Stack>

              <Divider sx={{ borderColor: theme.palette.divider }} />

              {/* GRID */}
              <Box
                sx={{
                  display: "grid",
                  justifyContent: "center",
                  gap: { xs: 2.5, sm: 3, md: 4 },
                  gridTemplateColumns: {
                    xs: "minmax(0, 420px)",
                    sm: "repeat(2, minmax(0, 360px))",
                    md: "repeat(3, minmax(0, 320px))",
                  },
                }}
              >
                {visible.map((m) => (
                  <Box key={m.name} sx={{ width: "100%" }}>
                    <TeamCard member={m} />
                  </Box>
                ))}
              </Box>

              {/* VER MAIS */}
              <Stack direction="row" justifyContent="center" sx={{ pt: 2 }}>
                {hasMore && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setShowAll((v) => !v)}
                    endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  >
                    {showAll ? "Mostrar menos" : "Ver mais"}
                  </Button>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function TeamCard({ member }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const cardBg = isDark
    ? alpha(theme.palette.background.default, 0.35)
    : theme.palette.background.paper;

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: cardBg,
        backdropFilter: isDark ? "blur(10px)" : "none",
        boxShadow: isDark
          ? "0 10px 22px rgba(0,0,0,0.22)"
          : "0 10px 22px rgba(2,6,23,0.08)",
        overflow: "hidden",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            isDark ? 0.1 : 0.08,
          )}, ${alpha(theme.palette.secondary.main, isDark ? 0.1 : 0.08)})`,
          opacity: 0,
          transition: "opacity 180ms ease",
          pointerEvents: "none",
        },

        "&:hover::before": { opacity: 1 },
      }}
    >
      <CardContent sx={{ p: { xs: 2.6, md: 3 } }}>
        <Stack spacing={1.8}>
          {/* FOTO */}
          <Box
            sx={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: isDark
                ? alpha(theme.palette.background.paper, 0.35)
                : alpha(theme.palette.background.default, 0.6),
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={member.photo}
              alt={member.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: isDark
                  ? "contrast(1.05) saturate(1.05)"
                  : "contrast(1.02) saturate(1.02)",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </Box>

          {/* NOME + ROLE */}
          <Box>
            <Typography
              sx={{ fontWeight: 900, fontSize: 18, color: "text.primary" }}
            >
              {member.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
              {member.role}
            </Typography>
          </Box>

          {/* CONTATOS */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", pt: 0.5 }}
          >
            {member.linkedin && (
              <SocialBtn href={member.linkedin} label="LinkedIn">
                <LinkedInIcon fontSize="small" />
              </SocialBtn>
            )}

            {member.github && (
              <SocialBtn href={member.github} label="GitHub">
                <GitHubIcon fontSize="small" />
              </SocialBtn>
            )}

            {member.instagram && (
              <SocialBtn href={member.instagram} label="Instagram">
                <InstagramIcon fontSize="small" />
              </SocialBtn>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function SocialBtn({ href, label, external = true, children }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <IconButton
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark
          ? alpha(theme.palette.background.paper, 0.25)
          : alpha(theme.palette.background.default, 0.6),
        transition: "transform 140ms ease, box-shadow 140ms ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, isDark ? 0.1 : 0.12)}`,
        },
        "&:active": { transform: "translateY(0px)" },
      }}
    >
      {children}
    </IconButton>
  );
}
