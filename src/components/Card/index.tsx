'use client'
import { useEffect, useState } from "react"

interface CardProps {
    image: string
    title: string
    desc: string
    special?: boolean
}

export default function Card({ desc, title, image, special }: CardProps) {
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== 'undefined') setWidth(window.screen.width)
    }, [])

    return (
        <div className={`card sm:w-[350px] w-full h-[300px] relative rounded-[20px] border px-12 py-16 border-gray-300 my-shadow flex items-center justify-center ${special ? 'sm:-translate-y-8 grad-4' : 'sm:bg-white'}`}>
            {special && <img src="./images/hero/3.png" alt="Background-image" className="hidden sm:block absolute top-0 left-0 w-full h-full" />}
            <div className="relative flex flex-col items-center z-10 text-center ">
                {special ?
                    width > 450 ?
                        <img src={`./images/icons/${image}.png`} alt="ícone" className="w-14 h-14 mb-4" />
                        :
                        <img src={`./images/icons/5.png`} alt="ícone" className="w-14 h-14 mb-4" />
                    :
                    <img src={`./images/icons/${image}.png`} alt="ícone" className="w-14 h-14 mb-4" />
                }
                <h2 className={`text-3xl font-bold ${special ? 'text-white sm:letter-grad' : 'sm:letter-grad'}`}>{title}</h2>
                <p className={`text-lg ${special ? 'text-zinc-200 sm:text-zinc-600' : 'text-zinc-600'}`}>{desc}</p>
            </div>
        </div>
    )
}