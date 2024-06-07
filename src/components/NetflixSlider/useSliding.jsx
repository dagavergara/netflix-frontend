import { useState, useEffect, useRef, useCallback } from 'react';

const useSliding = (elementWidth) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth(); // Actualiza el ancho al montar el componente

    // Listener para el redimensionamiento de la ventana
    window.addEventListener('resize', updateWidth);

    // Limpieza del listener al desmontar el componente
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth, elementWidth]);

  return { containerRef, containerWidth };
};

export default useSliding;
