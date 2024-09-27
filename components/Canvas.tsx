import React, { useRef, useState, useEffect } from 'react';

const Canvas: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [scale, setScale] = useState(0.5);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDragging = useRef(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setPosition({ x: 100, y: 100 });
        setScale(0.5);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current && image) {
      const dx = e.clientX - lastMousePosition.current.x;
      const dy = e.clientY - lastMousePosition.current.y;
      moveImage(dx, dy);
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      isDragging.current = true;
      lastMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current && image) {
      e.preventDefault();
      const dx = e.touches[0].clientX - lastMousePosition.current.x;
      const dy = e.touches[0].clientY - lastMousePosition.current.y;
      moveImage(dx, dy);
      lastMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const moveImage = (dx: number, dy: number) => {
    setPosition(prev => {
      const newX = Math.max(
        0,
        Math.min(prev.x + dx, canvasRef.current!.width - (canvasRef.current!.width * scale))
      );
      const newY = Math.max(
        0,
        Math.min(prev.y + dy, canvasRef.current!.height - (canvasRef.current!.height * scale))
      );
      return { x: newX, y: newY };
    });
  };

  const scaleImage = (factor: number) => {
    setScale(prev => {
      const newScale = Math.max(0.1, Math.min(2, prev + factor));
      setPosition(prev => ({
        x: Math.min(prev.x, canvasRef.current!.width - (canvasRef.current!.width * newScale)),
        y: Math.min(prev.y, canvasRef.current!.height - (canvasRef.current!.height * newScale)),
      }));
      return newScale;
    });
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const img = new Image();
    const shirtImg = new Image(); // Imagen de la camiseta

    shirtImg.src = '/mapa.svg'; // Cambia esto a la ruta de tu imagen de camiseta

    shirtImg.onload = () => {
      ctx?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      ctx?.drawImage(shirtImg, 0, 0, canvasRef.current!.width, canvasRef.current!.height); // Dibuja la camiseta

      if (image) {
        img.src = image;
        img.onload = () => {
          ctx?.drawImage(img, position.x, position.y, img.width * scale, img.height * scale);
        };
      }
    };
  }, [image, position, scale]);

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div
        className="relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <canvas ref={canvasRef} width={500} height={500} className="border" />
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={() => moveImage(-5, 0)} className="bg-blue-500 text-white px-2 py-1 rounded">Izquierda</button>
        <button onClick={() => moveImage(5, 0)} className="bg-blue-500 text-white px-2 py-1 rounded">Derecha</button>
        <button onClick={() => moveImage(0, -5)} className="bg-blue-500 text-white px-2 py-1 rounded">Arriba</button>
        <button onClick={() => moveImage(0, 5)} className="bg-blue-500 text-white px-2 py-1 rounded">Abajo</button>
        <button onClick={() => scaleImage(0.05)} className="bg-green-500 text-white px-2 py-1 rounded">Aumentar</button>
        <button onClick={() => scaleImage(-0.05)} className="bg-red-500 text-white px-2 py-1 rounded">Disminuir</button>
      </div>
    </div>
  );
};

export default Canvas;
