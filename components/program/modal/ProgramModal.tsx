"use client";

import * as React from "react";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { brandColors, programCardColors } from "@/lib/colors";
import type { ScheduleItem } from "../Program.types";

interface ProgramModalProps {
  item: ScheduleItem | null;
  index: number | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DialogCarousel({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

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
    if (!api || images.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [api, images.length]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, idx) => (
            <CarouselItem key={idx} className="h-full pl-0 basis-full shrink-0">
              <Image
                src={image}
                alt={`Imagen ${idx + 1}`}
                width={1000}
                height={1000}
                className="object-contain w-full h-full"
                loading={idx === 0 ? "eager" : "lazy"}
                quality={85}
                unoptimized={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button
        onClick={scrollPrev}
        variant="ghost"
        size="icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full hover:scale-110 z-10 shadow-lg"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        onClick={scrollNext}
        variant="ghost"
        size="icon"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full hover:scale-110 z-10 shadow-lg"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 shadow-sm",
              current === idx
                ? "bg-white w-8"
                : "bg-white/60 w-2 hover:bg-white/80",
            )}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export function ProgramModal({ item, index, open, onOpenChange }: ProgramModalProps) {
  const colorScheme = index !== null 
    ? programCardColors[index % programCardColors.length]
    : { accent: brandColors.turquoise };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[94vw] max-w-[480px] lg:max-w-[1000px] h-[92vh] lg:h-[700px] overflow-hidden p-0 rounded-xl lg:rounded-2xl border-0 shadow-2xl flex flex-col lg:flex-row font-bold">
        {item && (
          <>
            <div className="relative h-80 lg:h-full lg:w-[48%] shrink-0 bg-gray-100 overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 lg:w-2 z-20"
                style={{ backgroundColor: colorScheme.accent }}
              />
              <DialogCarousel images={item.images} />
              {item.time && (
                <div
                  className="absolute top-3 left-3 lg:top-4 lg:left-4 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg flex gap-2 text-sm lg:text-base font-bold shadow-md items-center"
                  style={{ backgroundColor: `${colorScheme.accent}e6` }}
                >
                  <Clock className="h-4 w-4 lg:h-5 lg:w-5" />
                  {item.time}
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1 min-h-0 bg-white overflow-hidden">
              <DialogHeader className="px-5 py-4 lg:px-6 lg:py-5 border-b border-gray-100 shrink-0">
                <DialogTitle
                  className="text-lg lg:text-2xl font-bold leading-snug pr-8"
                  style={{ color: brandColors.textDark }}
                >
                  {item.title}
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto px-5 py-4 lg:px-6 lg:py-5 space-y-3 lg:space-y-4">
                {item.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-100 flex gap-4"
                  >
                    <div
                      className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-base"
                      style={{ backgroundColor: colorScheme.accent }}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-semibold text-base lg:text-lg leading-snug"
                        style={{ color: brandColors.textDark }}
                      >
                        {activity.name}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed mt-1.5">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="px-5 py-4 lg:px-6 lg:py-5 border-t border-gray-100 shrink-0"
                style={{ backgroundColor: `${colorScheme.accent}08` }}
              >
                <p
                  className="font-medium text-center italic text-sm lg:text-base leading-relaxed"
                  style={{ color: colorScheme.accent }}
                >
                  "{item.footer}"
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
