"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type Grid = {
  rows: number;
  cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
  src: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
}

export const PixelImage = ({
  src,
  grid = "8x8",
  grayscaleAnimation = true,
  pixelFadeInDuration = 800,
  maxAnimationDelay = 1500,
  colorRevealDelay = 2000,
  customGrid,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const { rows, cols } = useMemo(() => {
    if (customGrid) return customGrid;
    return DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  useEffect(() => {
    // Pequeno delay para garantir que tudo está renderizado
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const colorTimeout = setTimeout(() => {
      setShowColor(true);
    }, colorRevealDelay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(colorTimeout);
    };
  }, [colorRevealDelay]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      // Calcula a posição central para focar no rosto
      const centerOffset = 0.15; // 15% de margem em cada lado
      const startX = centerOffset * 100;
      const startY = centerOffset * 100;
      const width = (100 - 2 * centerOffset * 100) / cols;
      const height = (100 - 2 * centerOffset * 100) / rows;

      const clipPath = `polygon(
        ${startX + col * width}% ${startY + row * height}%,
        ${startX + (col + 1) * width}% ${startY + row * height}%,
        ${startX + (col + 1) * width}% ${startY + (row + 1) * height}%,
        ${startX + col * width}% ${startY + (row + 1) * height}%
      )`;

      // Delay determinístico baseado no índice para evitar problemas de hidratação
      const delay = (index / total) * maxAnimationDelay;

      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div className="relative h-72 w-72 select-none md:h-96 md:w-96">
      {/* Imagem de fundo completa */}
      <Image
        src={src}
        alt="Background"
        className="w-full h-full object-cover rounded-[2.5rem]"
        draggable={false}
      />

      {/* Overlay com efeito de pixelização apenas no rosto */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
        {pieces.map((piece, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all ease-out",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
              transform: isVisible ? "scale(1)" : "scale(0.9)",
            }}
          >
            <Image
              src={src}
              alt={`Pixel ${index + 1}`}
              className={cn(
                "w-full h-full object-cover",
                grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
              )}
              style={{
                transition: grayscaleAnimation
                  ? `filter ${pixelFadeInDuration}ms ease-out`
                  : "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
