"use client"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Divider,
  Paper,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List as MuiList,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Snackbar,
  Alert,
  Grow
} from "@mui/material"
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LocationOn as LocationIcon,
  Menu as MenuIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Email, Phone
} from "@mui/icons-material"
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MemoryIcon from '@mui/icons-material/Memory';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useRef, useState } from "react"
import Zoom from '@mui/material/Zoom';
import { useInView } from "../../hooks/useInView"
import { PaperComponent } from "../../components/PaperComponent"
import { useScrollTriggerOnce } from '../../hooks/useScrollTriggerOnce';
import { Trans, useTranslation } from "react-i18next"
import { TranslateDropdown } from "../../components/TranslateDropdown"
import { DownloadPDFFile } from "../../components/DownloadPDFFile"
import ProjectCard from "../../components/ProjectCard"

export const PortfolioPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [experienceRef, isExperienceInView] = useInView();
  const [professionalRef, isProfessionalInView] = useInView();
  const [technologiesRef, isTechnologiesInView] = useInView();
  const [projectsRef, isProjectsInView] = useInView();
  const [messageSnackbar, setMessageSnackbar] = useState("");
  const { t } = useTranslation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSnackbarClose = (bool, snackBarText) => {
    setOpenSnackbar(bool);
    if (snackBarText == "email") {
      setMessageSnackbar(t("emailCopied"));
    } else {
      setMessageSnackbar(t("phoneCopied"));
    }
  }

  const navItems = [
    { name: t("about"), id: "about", icon: <InfoOutlineIcon /> },
    { name: t("experience"), id: "experience", icon: <WorkOutlineIcon /> },
    { name: t("technologiesMenu"), id: "technologies", icon: <MemoryIcon /> },
    { name: t("projectsMenu"), id: "projects", icon: <FolderOpenIcon /> }
  ]

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (mobileOpen) {
      setMobileOpen(false)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", bgcolor: "altSecondary.main" }}>
      <Typography variant="h6" sx={{ my: 2, bgcolor: "altSecondary.main" }}>
        Federico Beltramino
      </Typography>
      <Divider />
      <MuiList>
        {navItems.map((item) => (
          <ListItemButton key={item.name} onClick={() => handleNavClick(item.id)} sx={{ textAlign: "center" }}>
            <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </MuiList>
    </Box>
  )


  return (

    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header/Navbar */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Federico Beltramino
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <Button key={item.name} color="inherit" onClick={() => handleNavClick(item.id)}>
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box
        component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor: "altSecondary.main",
              color: "white",
            }
          }
          }
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          id="about"
          sx={{
            bgcolor: "altSecondary.main",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Grid container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar sx={{ width: 128, height: 128 }} src="/perfil.png" />
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                Federico Beltramino
              </Typography>
            </Grid>

            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mt: 4 }}>
              {t("position")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <LocationIcon color="action" sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body1" color="text.secondary">
                {t("location")}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <Email color="action" sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body1" color="text.secondary">
                frbeltra2@gmail.com
              </Typography>
              <IconButton
                aria-label="Copiar email"
                size="small"
                sx={{ color: "text.secondary" }}
                onClick={() => {
                  navigator.clipboard.writeText("frbeltra2@gmail.com");
                  handleSnackbarClose(true, "email");
                }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <Phone color="action" sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body1" color="text.secondary">
                +34 653 216 841
              </Typography>
              <IconButton
                aria-label="Copiar teléfono"
                size="small"
                sx={{ color: "text.secondary" }}
                onClick={() => {
                  navigator.clipboard.writeText("+34653216841");
                  handleSnackbarClose(true, "phone");
                }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Box>
            <DownloadPDFFile />
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
              <IconButton aria-label="github" href="https://github.com/frbeltramino?tab=repositories" target="_blank" sx={{ color: "text.secondary" }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/federico-beltramino-5b174215b/"
                target="_blank"
                sx={{ color: "text.secondary" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="email"
                sx={{ color: "text.secondary" }}
                onClick={() => {
                  navigator.clipboard.writeText("frbeltra2@gmail.com")
                  handleSnackbarClose(true, "email");
                }}
              >
                <Email fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
              <TranslateDropdown />
            </Box>

          </Container>
        </Box>

        {/* Professional Perfil */}
        <PaperComponent
          paperId="professional"
          paperTitle={t("professionalProfile")}
          paperDescription={t("professionalDescription", { returnObjects: true })}
          paperRef={professionalRef}
          isPaperInView={isProfessionalInView}
        />

        <Box
          id="experience"
          sx={{ py: 8, bgcolor: "altSecondary.main" }}
          ref={experienceRef}
        >
          <Zoom
            in={isExperienceInView}
            style={{ transitionDelay: isExperienceInView ? "500ms" : "0ms" }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                align="center"
                mb={4}
              >
                {t("experience")}
              </Typography>
              <Grid container spacing={4}>
                {t("experiences", { returnObjects: true }).map((exp, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper elevation={2} sx={{ p: 3, bgcolor: "primary.main" }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {exp.company} | {exp.period}
                      </Typography>
                      {exp.description.map((desc, idx) => (
                        <ul key={idx}>
                          <li>
                            <Typography variant="altBody1">{desc}</Typography>
                          </li>
                        </ul>
                      ))}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Zoom>
        </Box>



        {/* Technologies Section */}
        <PaperComponent
          paperId="technologies"
          paperTitle={t("technologiesTitle")}
          paperDescription={t("technologiesList", { returnObjects: true })}
          paperRef={technologiesRef}
          isPaperInView={isTechnologiesInView}
        />

        {/* Projects Section */}
        <Box id="projects" sx={{ py: 8, bgcolor: "altSecondary.main" }} ref={projectsRef}>
          <Grow
            in={isProjectsInView}
            style={{ transformOrigin: "0 0 0" }}
            {...(isProjectsInView ? { timeout: 1000 } : {})}
          >
            <Container maxWidth="md">
              <Typography variant="h3" component="h2" gutterBottom align="center" mb={4}>
                {t("projectsMenu")}
              </Typography>

              <Grid container spacing={4}>
                {t("projects", { returnObjects: true }).map((project, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <ProjectCard project={project} />

                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grow>
        </Box>

      </Box>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => handleSnackbarClose(false)}
      >
        <Alert severity="success">{messageSnackbar}</Alert>
      </Snackbar>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "primary.main", color: "white" }}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} {t("footer")}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
