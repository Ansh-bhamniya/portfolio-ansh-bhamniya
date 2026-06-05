import * as React from "react"

import { cn } from "@/lib/utils"

interface FlippableCreditCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const FlippableCreditCard = React.forwardRef<HTMLDivElement, FlippableCreditCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("group h-40 w-64 [perspective:1000px]", className)} ref={ref} {...props}>
        <div className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute h-full w-full rounded-2xl [backface-visibility:hidden] border border-white/40 dark:border-white/40">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              {/* background */}
              <div className="absolute inset-0 bg-[#0b0b0b]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_80%,rgba(255,120,60,0.95),rgba(255,120,60,0.45)_35%,rgba(0,0,0,0)_70%)]" />
              <div className="noise-overlay absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none" />

              {/* inset border */}
              <div className="absolute inset-2 rounded-[1.15rem] border border-white/30 dark:border-white/30" />

              {/* main type */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-cormorant font-semibold text-[92px] sm:text-[112px] leading-none text-white/95">
                   2
                  </span>
                  <span className="font-cormorant font-medium text-[56px] sm:text-[64px] leading-none text-white/95">
                    +
                  </span>
                </div>
                <p className="mt-6 font-cormorant text-xl sm:text-2xl tracking-wide text-white/85">
                  Years of Experience
                </p>
              </div>

            </div>
          </div>

          {/* Back */}
          <div className="absolute h-full w-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/30 dark:border-white/30 bg-black/90">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_80%,rgba(255,120,60,0.25),rgba(0,0,0,0)_65%)]" />
              <div className="noise-overlay absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-2 rounded-[1.15rem] border border-white/20" />
              <div className="absolute inset-0 grid place-items-center px-8">
                <p className="font-signature text-4xl sm:text-5xl tracking-wide text-white/90">
                  Ansh Bhamniya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
)
FlippableCreditCard.displayName = "FlippableCreditCard"

export { FlippableCreditCard }

