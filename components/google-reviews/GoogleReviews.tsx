import type { GoogleReviewsProps } from "./GoogleReviews.types"

/**
 * Google Reviews component using Elfsight widget
 * El script de Elfsight se carga una sola vez al día en layout.tsx
 */
export function GoogleReviews({ className }: GoogleReviewsProps) {
  return (
    <section className={`pt-12 md:pt-16 pb-20 md:pb-32 bg-linear-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          {/* Elfsight Google Reviews | Untitled Google Reviews */}
          <div 
            className="elfsight-app-a1322072-e2d9-4105-9553-0814bcd4a2ff" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
