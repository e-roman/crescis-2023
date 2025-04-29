"use client";


import { useEffect } from "react";

const useDetectBrowser = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isFirefox = userAgent.indexOf("firefox") > -1;

    if (isFirefox) {
      document.body.classList.add("is-firefox");
    }

    return () => {
      // Limpieza si desmonta el componente
      document.body.classList.remove("is-firefox");
    };
  }, []);
};

export default useDetectBrowser;
