import enUS from 'config/localization/locales/translations/enUS.json'
import ptBR from 'config/localization/locales/translations/ptBR.json'

function asTranslationObj(translation: object) {
  return { translation }
}

const resources = {
  enUS: asTranslationObj(enUS),
  ptBR: asTranslationObj(ptBR),
}

export default resources
