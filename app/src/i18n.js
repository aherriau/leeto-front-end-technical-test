import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import giftCardTranslation from './locales/fr/gift_card.json'

const resources = {
  fr: {
    translation: giftCardTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
