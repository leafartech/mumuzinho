interface TextProps {
    image: string
    title: string
    desc: string
}

export default function Text({ desc, title, image }: TextProps) {
    return (
        <div className={`flex gap-2 sm:gap-4 flex-col sm:flex-row px-4 sm:px-0`}>
            <img src={`./images/icons/${image}.png`} alt="ícone" className="w-14 h-14" />
            <div className="relative flex flex-col items-start">
                <h2 className="text-white text-3xl font-bold">{title}</h2>
                <p className="text-zinc-200">{desc}</p>
            </div>
        </div>
    )   
}