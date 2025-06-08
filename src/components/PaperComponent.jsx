import { Box, Container, Grid, Paper, Typography, Zoom } from '@mui/material'
import React from 'react'

export const PaperComponent = ( { paperTitle, paperDescription = [], paperRef, isPaperInView, paperId } ) => {
  return (
    <Box
      id={paperId}
      sx={{ py: 8, bgcolor: "altSecondary.main" }}
      ref={paperRef}
    >
      <Zoom in={isPaperInView} style={{ transitionDelay: isPaperInView ? '500ms' : '0ms' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom align="center" mb={4}>
            {paperTitle}
          </Typography>
          <Grid container spacing={4}>
            <Paper elevation={2} sx={{ p: 3, bgcolor: "primary.main" }}>
              {
                paperDescription.length > 1 ?
                  paperDescription.map((desc, index) => (
                    <ul>
                      <li><Typography variant="altBody1">{desc}</Typography></li>
                    </ul>
                  )) :
                  <Typography variant="altBody1">{paperDescription}</Typography>
              }
            </Paper>
          </Grid>
        </Container>
      </Zoom>
    </Box>

  )
}
