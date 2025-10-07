import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Dialog
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation()


  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "primary.main",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
          }
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer"
          }}
          onClick={() => setOpen(true)}
        >
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 0.6s ease",
              "&:hover": {
                transform: "scale(1.08)"
              }
            }}
          />
        </Box>

        {/* Contenido */}
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography gutterBottom variant="h5" component="h3">
            {project.title}
          </Typography>

          {project.description.map((desc, i) => (
            <ul key={i} style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </li>
            </ul>
          ))}
        </CardContent>

        {/* Botones */}
        <CardActions sx={{ p: 2, mt: "auto" }}>
          <Button
            size="small"
            href={project.repo}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{ color: "#fff" }}
          >
            {t("repository")}
          </Button>
          <Button
            size="small"
            href={project.demo}
            target="_blank"
            sx={{ color: "#fff" }}
          >
            {t("demo")}
          </Button>
        </CardActions>
      </Card>

      {/* Modal con imagen completa */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            maxWidth: "900px",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: 2
          }}
        />
      </Dialog>
    </>
  );
}

export default ProjectCard;