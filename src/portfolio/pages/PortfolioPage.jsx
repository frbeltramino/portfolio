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
  Email
} from "@mui/icons-material"
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useRef, useState } from "react"
import Zoom from '@mui/material/Zoom';
import { useInView } from "../../hooks/useInView"
import { PaperComponent } from "../../components/PaperComponent"
import { useScrollTriggerOnce } from '../../hooks/useScrollTriggerOnce';

export const PortfolioPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [experienceRef, isExperienceInView] = useInView();
  const [professionalRef, isProfessionalInView] = useInView();
  const [technologiesRef, isTechnologiesInView] = useInView();
  const [projectsRef, isProjectsInView] = useInView();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSnackbarClose = (bool) => {
    setOpenSnackbar(bool);
  }

  const navItems = [
    { name: "Sobre mí", id: "professional", icon: <InfoOutlineIcon /> },
    { name: "Experiencia", id: "experience", icon: <WorkIcon /> },
    { name: "Tecnologías", id: "technologies", icon: <CodeIcon /> },
    { name: "Proyectos", id: "projects", icon: <CodeIcon /> },
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

  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "GlobalLogic",
      period: "Junio 2018 - Presente",
      description: [
        "Desarrollo, testing y documentación de funcionalidades bancarias para aplicaciones web y mobile (Android / iOS). ",
        "Resolución de bugs y soporte a incidencias productivas (hotfixes). ",
        "Amplio conocimiento en tecnologías específicas del proyecto y reglas de negocio bancarias.",
        "Mentoría informal a compañeros de equipo en dudas técnicas y funcionales.",
        " Participación activa en equipos Scrum: planificación, refinamiento, dailies, retrospectivas."
      ]
        
    }
  ]

  const projects = [
    {
      title: "TuTurno-App",
      description:[
        "Una Aplicación web desarrollada con React y bootstrap que permite a los usuarios pedir un turno en una veterinaria.",
        "Uso de envío de OTP para el login del usuario vía email.",
        "Manejo de base de datos MONGODB con NodeJS Express y Mongoose para guardar la información de los turnos, usuarios, servicios y profesionales.",
        "Aviso de confirmación de turno por correo electrónico."
      ],
      image: "/tuTurnoApp.jpg",
      repo: "https://github.com/frbeltramino/tu-turno-app",
      demo: "https://tuturno-app.netlify.app/"
    },
    {
      title: "TuTurno-Admin",
      description:[
        "Una Aplicación web desarrollada con React y MaterialUI que permite a los administradores gestionar turnos, servicios, profesionales y feriados.",
      ],
      image: "/tuTurnoAdmin.jpg",
      repo: "https://github.com/frbeltramino/tu-turno-admin",
      demo: "https://tuturno-admin.netlify.app/auth/login"
    }
  ]

  const technologies = [
    "JavaScript, HTML, CSS, Visualizer Framework, Postman (APIs REST), SQL básico (insert, select, update, create table), Git (versionado de código), Jira (gestión ágil), React Js, MongoDB, Express."
  ]

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
          }}
    }
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
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
              Desarrollador Web Frontend
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <LocationIcon color="action" sx={{ mr: 1, color:"text.secondary" }} />
              <Typography variant="body1" color="text.secondary">
                La Plata, Buenos Aires, Argentina
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <Email color="action" sx={{ mr: 1, color:"text.secondary" }} />
              <Typography variant="body1" color="text.secondary">
                frbeltra2@gmail.com
              </Typography>
              <IconButton
                aria-label="Copiar email"
                size="small"
                sx={{ color: "text.secondary" }}
                onClick={() => {
                  navigator.clipboard.writeText("frbeltra2@gmail.com");
                  handleSnackbarClose(true);
                }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
             <a href="/Federico Beltramino - CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<DownloadIcon />}
                sx={{ color: "white" }}
              >
                Descargar CV
              </Button>
            </a>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
              <IconButton aria-label="github" href="https://github.com/frbeltramino?tab=repositories" target="_blank" sx={{  color:"text.secondary" }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/federico-beltramino-5b174215b/"
                target="_blank"
                sx={{  color:"text.secondary" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="email"
                sx={{  color:"text.secondary" }}
                 onClick={() => {
                  navigator.clipboard.writeText("frbeltra2@gmail.com")
                  handleSnackbarClose(true)
                }}
              >
                <Email fontSize="large" />
              </IconButton>
            </Box>
            
          </Container>
        </Box>

          {/* Professional Perfil */}
          <PaperComponent
            paperId="professional"
            paperTitle="Perfil Profesional "
            paperDescription = {[
             "Experiencia en desarrollo de software con más de 6 años de experiencia en proyectos de aplicaciones bancarias web y mobile.",
             "Experto en tecnologías Frontend como JavaScript, HTML y CSS, consumo de servicios REST y metodologías ágiles (Scrum/Kanban). Apasionado por el aprendizaje continuo, actualmente perfeccionando habilidades en React, Express y MongoDB, y mejorando el inglés de manera activa."
            ]}
            paperRef={professionalRef}
            isPaperInView={isProfessionalInView}
          />

        {/* Experience Section */}
        <Box id="experience" sx={{ 
          py: 8, 
          bgcolor: "altSecondary.main" }}
          ref={experienceRef}>
          <Zoom in={isExperienceInView} style={{ transitionDelay: isExperienceInView ? '500ms' : '0ms' }}>  
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom align="center" mb={4}>
              Experiencia
            </Typography>
            <Grid container spacing={4}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  <Paper elevation={2} sx={{ p: 3, bgcolor: "primary.main"}}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    {
                     exp.description.map( (desc, index) => (
                        <ul>
                          <li><Typography variant="altBody1">{desc}</Typography></li>
                        </ul>
                      )) 
                    }
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
          paperTitle="Tecnologías y herramientas"
          paperDescription={technologies}
          paperRef={technologiesRef}
          isPaperInView={isTechnologiesInView}
        />
    
        {/* Projects Section */}
        <Box id="projects" sx={{ py: 8,  bgcolor: "altSecondary.main"}} ref={projectsRef}>
          <Grow
            in={isProjectsInView}
            style={{ transformOrigin: '0 0 0' }}
            {...(isProjectsInView ? { timeout: 1000 } : {})}
          >
      
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom align="center" mb={4}>
              Proyectos
            </Typography>
            
            <Grid container spacing={4} >
              {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} >
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: 400, // o el valor que se vea mejor en tu layout
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'primary.main',
                    }}
                  >
                    
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {project.title}
                      </Typography>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover', // <- hace que se vea completa
                          objectPosition: 'center',
                          mt: 1,
                        }}
                      />
                      {
                         project.description.map( (desc, index) => (
                          <ul>
                            <li><Typography>{desc}</Typography></li>
                          </ul>
                          
                        )) 
                      }
                    </CardContent>
                    <CardActions sx={{ mt: 'auto' }}>
                      <Button
                        size="small"
                        color="#ffffff"
                        href={project.repo}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                      >
                        Repositorio
                      </Button>
                      <Button 
                        size="small" color="#ffffff"
                         href={project.demo}
                         target="_blank"
                      >
                        Demo
                      </Button>
                    </CardActions>
                  </Card>
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
        <Alert severity="success">Email copiado al portapapeles</Alert>
      </Snackbar>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "primary.main", color: "white" }}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Federico Beltramino
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
