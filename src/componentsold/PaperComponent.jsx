import { Box, Container, Grid, Paper, Typography, Zoom } from "@mui/material"
import React from "react"

export const PaperComponent = ({
  paperTitle,
  paperDescription = [],
  paperRef,
  isPaperInView,
  paperId
}) => {
  const isArray = Array.isArray(paperDescription)
  const isWithImages = isArray && typeof paperDescription[0] === "object" && paperDescription[0].name

  return (
    <Box id={paperId} sx={{ py: 8, bgcolor: "altSecondary.main" }} ref={paperRef}>
      <Zoom
        in={isPaperInView}
        style={{ transitionDelay: isPaperInView ? "500ms" : "0ms" }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom align="center" mb={4}>
            {paperTitle}
          </Typography>

          <Paper elevation={2} sx={{ p: 3, bgcolor: "primary.main" }}>
            {isWithImages ? (
              <Grid container spacing={2}>
                {paperDescription.map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                    <Typography variant="altBody1">{item.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ pl: 2 }}>
                {paperDescription.map((desc, index) => (
                   <ul key={index}>
                    <li>
                      <Typography variant="altBody1">{desc}</Typography>
                    </li>
                  </ul>
                ))}
              </Box>
            )}
          </Paper>
        </Container>
      </Zoom>
    </Box>
  )
}