import { Box, Button } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import { useTranslation } from "react-i18next"

export const DownloadPDFFile = () => {

  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || "en"

  // Armamos el nombre dinámico del archivo
  const fileName = `Federico Beltramino CV ${currentLang}.pdf`

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
      <a href={`/${fileName}`} target="_blank" rel="noopener noreferrer">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<DownloadIcon />}
          sx={{ color: "white" }}
        >
          {t("downloadCV")}
        </Button>
      </a>
    </Box>
  )
}
