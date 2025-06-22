import { Button, ButtonGroup } from "@mui/material"
import { useTranslation } from "react-i18next"

export const TranslateDropdown = () => {

   const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const currentLang = i18n.language


  return (
    <ButtonGroup variant="contained">
      <Button
        color={currentLang === "es" ? "primary" : "secondary"}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
      <Button
        color={currentLang === "en" ? "primary" : "secondary"}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
    </ButtonGroup>
  )
}
