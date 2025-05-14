"use client";

import { useEffect } from 'react'
import { initMagicCursor } from '@/utils/themeFunctions'

export default function CursorMagic() {
  useEffect(() => {
    initMagicCursor()
  }, []) // solo una vez al montar

  return (
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
  )
}
