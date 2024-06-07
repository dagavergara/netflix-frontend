import { useState, useRef, useEffect } from 'react';

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.clientWidth);
      }
    };

    handleResize(); // Inicializa el ancho al montar el componente

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, []); // No se incluye elementRef.current en el array de dependencias

  return { width, elementRef };
};

export default useSizeElement;