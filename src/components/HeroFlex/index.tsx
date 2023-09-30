import { ReactNode } from 'react'
import RedirectButton from '../RedirectButton'
import Image from 'next/image'

interface HeroFlexProps {
    children: ReactNode
    title: string
    description: string
    imagePath: number
    reverse?: boolean
}

export default function HeroFlex({ children, reverse, description, imagePath, title }: HeroFlexProps) {
    return (
        <div className={`flex flex-col sm:grid sm:grid-cols-2 ${reverse && 'flex-col-reverse'}`}>
            <div className="w-full flex flex-col justify-center gap-2">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-zinc-600 sm:text-lg">{description}</p>
                {children}
                <div className="mt-4 mb-6 sm:mt-2 w-full flex"><RedirectButton /></div>
            </div>
            <div className={`flex flex-end ${reverse && 'mb-4'}`}>
                <Image
                    src={`/images/hero/${imagePath}.png`}
                    alt="Imagem do Juninho Rezende tocando em show"
                    width={450}
                    height={450}
                    className="rounded-3xl"
                />
            </div>
        </div>
    )
}