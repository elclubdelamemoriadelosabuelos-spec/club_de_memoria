"use client";

import * as React from "react";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { programCardColors, brandColors } from "@/lib/colors";
import type { ProgramCardProps } from "../Program.types";

export function ProgramCard({ item, onClick, index }: ProgramCardProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const colorScheme = programCardColors[index % programCardColors.length];

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-play: cambia las imágenes automáticamente cada 4 segundos
  React.useEffect(() => {
    if (!api || item.images.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [api, item.images.length]);

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer",
        "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]",
        "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]",
        "hover:-translate-y-1",
        "border border-gray-100/80",
        "min-h-[400px] md:h-full md:min-h-0",
        "will-change-transform",
        colorScheme.hover,
      )}
      style={{ transform: "translateZ(0)" }}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div
          className="w-full md:w-1.5 h-1.5 md:h-full"
          style={{ backgroundColor: colorScheme.accent }}
        />

        {/* Sección de imagen - Izquierda */}
        <div className="relative w-full md:w-1/2 h-96 md:h-full md:flex-1 overflow-hidden shrink-0 bg-gray-50">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full ml-0">
              {item.images.map((image, idx) => (
                <CarouselItem key={idx} className="pl-0 basis-full shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`${item.title} - imagen ${idx + 1}`}
                      width={1000}
                      height={1000}
                      className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full"
                      loading={idx === 0 ? "eager" : "lazy"}
                      quality={85}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
            style={{ zIndex: 10 }}
          >
            {item.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  api?.scrollTo(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === idx
                    ? "bg-white w-5"
                    : "bg-white/40 w-1.5 hover:bg-white/60",
                )}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>

          {item.time && (
            <div
              className="absolute top-3 right-3 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex gap-1.5 text-xs font-medium shadow-lg items-center"
              style={{ backgroundColor: `${colorScheme.accent}e6`, zIndex: 10 }}
            >
              <Clock className="h-3 w-3" />
              {item.time}
            </div>
          )}
        </div>

        {/* Sección de información - Derecha */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between min-h-0">
          <div className="flex-1 flex flex-col min-h-0">
            <h3
              className="text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors duration-300 line-clamp-2"
              style={{ color: brandColors.textDark }}
            >
              {item.title}
            </h3>

            <ul className="space-y-2 mb-4 flex-1">
              {item.activities.slice(0, 3).map((activity, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm md:text-base text-gray-600"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: colorScheme.accent }}
                  />
                  <span className="leading-relaxed">{activity.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-gray-100 shrink-0">
            <div className="flex items-center justify-between">
              <p
                className="text-xs md:text-sm font-medium leading-relaxed line-clamp-2 flex-1"
                style={{ color: colorScheme.accent }}
              >
                {item.footer}
              </p>
              <div
                className="ml-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2 will-change-transform"
                style={{
                  backgroundColor: `${colorScheme.accent}15`,
                  transform: "translateZ(0)",
                }}
              >
                <ChevronRight
                  className="h-4 w-4"
                  style={{ color: colorScheme.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
