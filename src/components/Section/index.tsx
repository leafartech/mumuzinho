import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    classNames?: string
}

export default function Section({ children, classNames }: SectionProps) {
    return (
        <section className={`w-full flex items-center justify-center ${classNames}`}>
            <div className="w-full max-w-6xl px-4 sm:px-0 flex items-center justify-center">
                {children}
            </div>
        </section>
    )
}