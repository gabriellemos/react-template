import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from 'config/localization/locales'

i18n.use(initReactI18next).init({
  resources,
  lng: 'enUS',
  interpolation: {
    // not needed for react as it escapes by default
    escapeValue: false,
  },
})

export default i18n
