"use client";

import { useEffect } from "react";

const useMagicCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".magic-cursor");
    const follower = document.querySelector(".magic-follower");

    if (!cursor || !follower) return;

    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    const animate = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      if (follower) {
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
};

export default useMagicCursor;
