"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const projects = [
  {
    title: "Prime Up Clicks",
    subtitle:
      "Marketplace para compra e venda de fotografias profissionais, com foco em performance, organização e experiência do usuário.",
    image: "/projetos/primeupclicks.PNG",
    tags: ["Marketplace", "Fotografia", "Plataforma Web"],
    status: "em_desenvolvimento",
    live: "https://example.com",
  },

  {
    title: "Pernas na Areia – 2ª Edição",
    subtitle:
      "Plataforma web desenvolvida para gerenciamento de inscrições e organização de torneio esportivo.",
    image: "/projetos/pernasnaareia.png",
    tags: ["Inscrições", "Evento", "Plataforma Web"],
    status: "concluido",
    live: "https://pernasnaareia.vercel.app/",
  },

  {
    title: "Vento Musical",
    subtitle:
      "Plataforma web desenvolvida para divulgação do projeto Vento Musical do IFPB, apresentando registros fotográficos, informações institucionais e integrantes envolvidos.",
    image: "/projetos/ventomusical.png",
    tags: ["Projeto Institucional", "Cultura", "Plataforma Web"],
    status: "concluido",
    live: "https://ventomusicalifpb.vercel.app/",
  },
];

export default function Projetos() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [showAll, setShowAll] = useState(false);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) =>
      a.title.localeCompare(b.title, "pt-BR", { sensitivity: "base" }),
    );
  }, []);

  const VISIBLE_COUNT = 6;
  const visible = showAll
    ? sortedProjects
    : sortedProjects.slice(0, VISIBLE_COUNT);

  const hasMore = sortedProjects.length > VISIBLE_COUNT;

  return (
    <Box
      id="projetos"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              {/* HEADER */}
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", color: "text.secondary" }}
                >
                  PROJETOS
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    fontSize: { xs: 30, sm: 38, md: 44 },
                  }}
                >
                  Alguns trabalhos com{" "}
                  <Box
                    component="span"
                    sx={{
                      backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    visual marcante
                  </Box>{" "}
                  e base sólida.
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 900,
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                  }}
                >
                  Projetos selecionados que mostram foco em interface,
                  performance e estrutura preparada para evoluir.
                </Typography>
              </Stack>

              <Divider />

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
                {visible.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </Box>

              {/* BOTÃO */}
              {hasMore && (
                <Stack direction="row" justifyContent="center" pt={2}>
                  <Button
                    variant="outlined"
                    onClick={() => setShowAll((v) => !v)}
                    endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  >
                    {showAll ? "Mostrar menos" : "Ver mais"}
                  </Button>
                </Stack>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function ProjectCard({ project }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const cardBg = isDark
    ? alpha(theme.palette.background.default, 0.35)
    : theme.palette.background.paper;

  const softSurface = isDark
    ? alpha(theme.palette.background.paper, 0.25)
    : alpha(theme.palette.background.default, 0.6);

  const statusConfig = {
    concluido: {
      label: "Concluído",
      color: theme.palette.success.main,
      bg: alpha(theme.palette.success.main, 0.12),
    },
    em_desenvolvimento: {
      label: "Em desenvolvimento",
      color: theme.palette.warning.main,
      bg: alpha(theme.palette.warning.main, 0.14),
    },
  };

  const status = statusConfig[project.status];

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: { xs: 2.6, md: 3 } }}>
        <Stack spacing={1.8}>
          {/* IMAGEM */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: softSurface,
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {status && (
              <Chip
                label={status.label}
                size="small"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontWeight: 800,
                  fontSize: 11,
                  borderRadius: 999,
                  color: status.color,
                  backgroundColor: status.bg,
                  border: `1px solid ${alpha(status.color, 0.4)}`,
                  backdropFilter: "blur(6px)",
                }}
              />
            )}
          </Box>

          {/* TEXTO */}
          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              {project.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
              {project.subtitle}
            </Typography>
          </Box>

          {/* TAGS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {(project.tags || []).slice(0, 3).map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  borderRadius: 999,
                  fontWeight: 700,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: softSurface,
                }}
              />
            ))}
          </Box>

          {/* LINK */}
          {project.status === "concluido" && (
            <Stack direction="row" justifyContent="center">
              <IconButton
                component="a"
                href={project.live}
                target="_blank"
                rel="noreferrer"
                sx={{
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: softSurface,
                  transition: "transform 140ms ease, box-shadow 140ms ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 0 0 3px ${alpha(
                      theme.palette.primary.main,
                      isDark ? 0.1 : 0.12,
                    )}`,
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
