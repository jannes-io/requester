import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './Containers/App';
import translationResources from './Translations';

(async () => {
  await i18next
    .use(initReactI18next)
    .init({
      interpolation: { escapeValue: false },
      lng: 'en',
      fallbackLng: 'en',
      resources: translationResources,
      debug: process.env.NODE_ENV === 'development',
    });

  ReactDOM.render(<App i18n={i18next} />, document.getElementById('root'));
})();
