import { FlippableCreditCard } from "@/components/ui/credit-debit-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { experiences } from "../data/experiences"

function ExperienceExpandable() {
  const order = ["dhadkan", "techspr", "railse", "quddle"] as const
  const items = order
    .map((slug) => experiences.find((e) => e.slug === slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))

  return (
    <div className="rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden">
      <Accordion type="single" collapsible defaultValue={items[0]?.slug} className="w-full">
        {items.map((exp) => (
          <AccordionItem
            key={exp.slug}
            value={exp.slug}
            className="border-b border-black/10 dark:border-white/10 last:border-b-0"
          >
            <div className="px-6 py-6">
              <p className="text-gray-400 text-xs sm:text-sm">{exp.period}</p>

              <AccordionTrigger
                hideChevron
                className="group py-0 hover:no-underline"
              >
                <div className="flex w-full items-center justify-between gap-6">
                  <div className="text-left">
                    <p className="text-lg font-medium sm:text-xl">
                      <span
                        className={cn(
                          'relative inline text-stone-900 dark:text-[#E1E0CC]',
                          'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-stone-900 after:transition-transform after:duration-300 after:content-[""]',
                          'group-hover:after:scale-x-100 dark:after:bg-[#E1E0CC]'
                        )}
                      >
                        {exp.role}
                      </span>
                      <span className="font-normal text-gray-500">
                        {" "}
                        · {exp.company}
                      </span>
                    </p>
                  </div>

                  <span
                    className={cn(
                      'relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 transition-colors duration-300',
                      'group-data-[state=open]:border-[#000000] group-data-[state=open]:bg-[#000000]',
                      'dark:border-white/10 dark:bg-black/40 dark:group-data-[state=open]:border-[#000000] dark:group-data-[state=open]:bg-[#000000]'
                    )}
                  >
                    <Plus className="h-5 w-5 text-stone-500 transition-opacity duration-300 group-data-[state=open]:opacity-0 dark:text-gray-400" />
                    <X className="absolute h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-4">
                <p className="text-stone-600 dark:text-gray-400 text-sm leading-relaxed font-sf">
                  {exp.tagline}
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export function CreditCardShowcase() {
  return (
    <section data-header-surface="light" className="w-full px-4 py-14 sm:px-6 sm:py-16 md:py-20">
      <div className="w-full flex flex-col items-center justify-center gap-8 rounded-2xl bg-white dark:bg-white border border-black/10 dark:border-black/10 p-8 sm:p-10 md:p-12">
          <div className="text-center max-w-xl">
            {/* <h2 className="text-foreground text-2xl sm:text-3xl font-semibold">2+ Years of Experience</h2> */}
            {/* <p className="text-muted-foreground mt-3 text-sm sm:text-base">
              Building production-grade Flutter apps with clean architecture, pixel-perfect UI, and smooth animations.
            </p> */}
          </div>

          <div className="grid w-full max-w-7xl mx-auto grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start lg:items-center">
            <div className="lg:col-span-5 flex justify-center">
              <FlippableCreditCard className="h-56 w-96 sm:h-60 sm:w-[26rem] md:h-64 md:w-[28rem]" />
            </div>
            <div className="lg:col-span-7">
              <ExperienceExpandable />
            </div>
          </div>
        </div>
    </section>
  )
}

