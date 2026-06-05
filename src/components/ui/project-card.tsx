import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  title: string
  description: string
  link: string
  linkText?: string
  meta?: string
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = 'Explain more',
      meta,
      ...props
    },
    ref
  ) => {
    const isInternal = link.startsWith('/')

    const cta = (
      <span className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-primary transition-all duration-300 hover:underline">
        {linkText}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
      </span>
    )

    return (
      <div
        ref={ref}
        className={cn(
          'group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border',
          'border-stone-200 bg-white text-stone-900 shadow-sm',
          'dark:border-white/10 dark:bg-card dark:text-card-foreground',
          'transition-all duration-500 ease-in-out',
          'hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-300/50',
          'dark:hover:shadow-black/40',
          className
        )}
        {...props}
      >
        <div className="aspect-video overflow-hidden bg-stone-100 dark:bg-stone-900">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          {meta && (
            <p className="text-xs text-stone-500 dark:text-muted-foreground mb-2">
              {meta}
            </p>
          )}
          <h3 className="text-xl font-semibold text-stone-900 dark:text-card-foreground transition-colors duration-300 group-hover:text-stone-700 dark:group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed font-sf text-stone-600 dark:text-muted-foreground">
            {description}
          </p>

          {isInternal ? (
            <Link to={link} className="w-fit" onClick={(e) => e.stopPropagation()}>
              {cta}
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {cta}
            </a>
          )}
        </div>
      </div>
    )
  }
)
ProjectCard.displayName = 'ProjectCard'

export { ProjectCard }
