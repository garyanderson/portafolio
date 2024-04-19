import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_en from './assets/components/utilities/traslations/en/global.json'
import global_es from './assets/components/utilities/traslations/es/global.json'
import global_pt from './assets/components/utilities/traslations/pt/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    pt: {
      global: global_pt
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <App />      
    </I18nextProvider>
  </React.StrictMode>,
)
