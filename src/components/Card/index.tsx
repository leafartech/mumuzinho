interface CardProps {
    image: string
    title: string
    desc: string
    special?: boolean
}

export default function Card({ desc, title, image, special }: CardProps) {
    return (
        <div className={`sm:w-[350px] w-full h-[300px] relative bg-white rounded-[20px] border px-12 py-16 border-gray-300 my-shadow flex items-center justify-center ${special && 'sm:-translate-y-8'}`}>
            {special && <img src="./images/hero/3.png" alt="Background-image" className="absolute top-0 left-0 w-full h-full" />}
            <div className="relative flex flex-col items-center z-10 text-center ">
                <img src={`./images/icons/${image}.png`} alt="ícone" className="w-14 h-14 mb-4" />
                <h2 className="text-3xl font-bold letter-grad">{title}</h2>
                <p className="text-zinc-600 text-lg">{desc}</p>
            </div>
        </div>
    )   
}