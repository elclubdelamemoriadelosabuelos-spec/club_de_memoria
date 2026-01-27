"use client";

import * as React from "react";
import type { ProgramProps, ScheduleItem } from "./Program.types";
import { SCHEDULE } from "./Program.helper";
import { ProgramCard } from "./card/ProgramCard";
import { ProgramModal } from "./modal/ProgramModal";

export function Program({ className }: ProgramProps) {
  const [selectedItem, setSelectedItem] = React.useState<ScheduleItem | null>(
    null,
  );
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleCardClick = (item: ScheduleItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setDialogOpen(true);
  };

  return (
    <section
      id="programa"
      className={`py-16 md:py-24 bg-background ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Programa de Día</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            De Lunes a Viernes de 10:00 a 16:00, un programa integral diseñado
            para acompañar a los adultos mayores a lo largo de toda la jornada
            en un entorno seguro, activo y humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto md:auto-rows-fr">
          {SCHEDULE.map((item, index) => (
            <ProgramCard
              key={index}
              item={item}
              index={index}
              onClick={() => handleCardClick(item, index)}
            />
          ))}
        </div>
      </div>

      <ProgramModal
        item={selectedItem}
        index={selectedIndex}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
