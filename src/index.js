import { render } from "react-dom";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { CookiesProvider } from "react-cookie";
import { App } from "./app";
import commonRus from "./translations/rus/common.json";
import commonEn from "./translations/en/common.json";
import "./styles/slider.scss";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: commonEn, // 'common' is our custom namespace
    },
    rus: {
      common: commonRus,
    },
  },
});

render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("app"),
);
