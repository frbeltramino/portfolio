import { Button, ButtonGroup } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export const TranslateDropdown = () => {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setCurrentLang(lng)
  }

  useEffect(() => {
    if (!currentLang && i18n.language) {
      setCurrentLang(i18n.language)
    }
  }, [i18n.language, currentLang])

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