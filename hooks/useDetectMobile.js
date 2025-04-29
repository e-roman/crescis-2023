"use client"; // si usás App Router, si no borrá esta línea.

import { useEffect } from "react";

const useDetectMobile = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      document.body.classList.add("is-mobile");
    }

    return () => {
      // Limpieza si desmonta el componente
      document.body.classList.remove("is-mobile");
    };
  }, []);
};

export default useDetectMobile;
