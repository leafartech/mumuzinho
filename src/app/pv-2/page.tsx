import Card from "@/components/Card";
import HeroFlex from "@/components/HeroFlex";
import RedirectButton from "@/components/RedirectButton";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <header className="bg-black relative parallax-1 h-screen w-full flex items-end sm:items-center justify-center">
        <img src="./images/bg/3.png" alt="" className="block sm:hidden absolute top-0 left-0  min-w-full" />
        <div className="absolute bg-gradient-to-t from-black to-black/0 sm:bg-black/30 top-0 left-0 w-full h-screen"></div>
        <div className="w-full max-w-6xl flex justify-start text-white z-10 -translate-y-20">
          <div className="w-full max-w-xl flex flex-col gap-2 sm:gap-5 px-4 sm:px-0">
            <h1 className="text-4xl sm:text-6xl font-bold">A maior oferta do <span className="letter-grad">Juninho Rezende</span></h1>
            <p className="text-lg">Desconto inacreditável para você tirar do papel o sonho de evoluir no cavaquinho ou aprender do zero.</p>
            <RedirectButton />
          </div>
        </div>
      </header>
      <main className="sm:-translate-y-10 pt-12 sm:pt-0">
        <Section>
          <div className="w-full flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between">
            <Card
              image="1"
              title="Escola"
              desc="+ 1.000 aulas de alta qualidade: batidas, levadas, acordes e muito mais"
            />
            <Card
              image="2"
              title="Mentoria"
              desc="12 aulas ao vivo COMIGO para evoluir em tempo recorde e tirar todas suas dúvidas"
              special={true}
            />
            <Card
              image="3"
              title="Acordes"
              desc="Dicionário com mais de 5.000 acordes para você evoluir o seu repertório"
            />
          </div>
        </Section>
        <Section classNames="pt-12 sm:pt-32">
          <div className="flex flex-col sm:grid sm:grid-cols-2 items-center">
            <div className="relative ps-4">
              <div className="absolute left-0 top-0 h-full w-[6px] grad-2 rounded-[1px]"></div>
              <p className="font-bold letter-grad">3 em 1</p>
              <h2 className="text-6xl sm:text-8xl font-bold">OFERTA ÚNICA DO JUNINHO</h2>
            </div>
            <div className="relative flex flex-col gap-3 mt-8 sm:mt-0">
              <h2 className="font-bold text-2xl">RZD</h2>
              <div className="relative py-0 px-0 flex flex-col gap-3">
                <img src="./images/icons/left.png" alt="" className="opacity-50 absolute -top-0 left-0 sm:-left-4 sm:top-0 w-4" />
                <p className="text-zinc-600 text-lg">
                  <span className="ps-4">Toco</span> cavaquinho há 18 anos e há 10 como profissional. Quando comecei tive muita dificuldade em evoluir no cavaquinho porque o acesso ao conteúdo era muito complicado.
                </p>
                <p className="text-zinc-600 text-lg">
                <span className="ps-4">E</span> para você não passar por isso, decidi juntar todo meu conhecimento em um combo completo e por um preço muito acessível para quem sempre teve o sonho de tocar cavaquinho.
                </p>
                <img src="./images/icons/right.png" alt="" className="opacity-50 absolute bottom-0 right-0 sm:-right-4 w-4" />
              </div>
              <h2 className="absolute -bottom-12 right-0 flex items-center before:bg-zinc-400 text-zinc-600 before:w-[48px] before:h-[2px] before:rounded-full before:left-0 before:me-4">Juninho Rezende</h2>
            </div>
          </div>
        </Section>
        <Section classNames="pt-16 sm:pt-32">
          <HeroFlex
            title="Tudo que você irá receber"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imagePath={1}
            reverse={true}
          >
            <div className="flex flex-col gap-2">
              <p className="flex gap-1 sm:gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="height text-zinc-600 text-lg">Aulas práticas e didáticas</span>
              </p>
              <p className="flex gap-1 sm:gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="height text-zinc-600 text-lg">Suporte <strong>direto comigo</strong> tirando suas dúvidas</span>
              </p>
              <p className="flex gap-1 sm:gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="height text-zinc-600 text-lg">Material de reforço para você estudar</span>
              </p>
              <p className="flex gap-1 sm:gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="height text-zinc-600 text-lg"><strong></strong> validado por mais de centenas de alunos</span>
              </p>
            </div>
          </HeroFlex>
        </Section>
        <section className="relative my-4 sm:my-24 parallax-2 min-h-screen w-full flex items-center justify-center py-12 sm:py-36">
          <img src="./images/bg/4.png" alt="" className="block sm:hidden absolute bottom-0 left-0 h-full" />
          <div className="absolute top-0 left-[12rem] h-full w-[6px] grad-2 z-10 hidden sm:block"></div>
          <div className="absolute top-0 left-0 bg-black/70 w-full h-full"></div>
          <div className="relative max-w-6xl w-full flex justify-center">
            <div className="w-full max-w-4xl flex flex-col z-10 gap-16">
              <h2 className="letter-grad text-4xl font-bold text-left px-4 sm:text-center">Como vai funcionar</h2>
              <div className="flex flex-col gap-8">
                <Text
                  image="1"
                  title="ESCOLA"
                  desc="RZD Music é uma das Escolas de Cavaquinho mais completas do mercado. Dentro dela, você terá conteúdos práticos e objetivos sobre batida, levada, troca de acordes, tudo sobre arpejos, tudo sobre escalas, campo harmônico, Intervalo e funções harmônicas e tudo sobre leitura também."
                />
                <Text
                  image="2"
                  title="MENTORIA"
                  desc="Serão 12 aulas ao vivo, com acesso vitalício às aulas que acontecerão, em que o Juninho acompanhará os alunos semanalmente na aplicação do método autoral dele de estudos e prática no cavaquinho. Essa é a melhor oportunidade para cavaquinistas evoluirem anos em poucos meses e começarem a tocar de ouvido com tranquilidade."
                />
                <Text
                  image="3"
                  title="ACORDES"
                  desc="São mais de 5000 acordes para você desfrutar e usar como quiser, o dicionário contem toda a parte intervalar de cada acordes distribuídos em 8 posições pelo braço do cavaco onde você poderá usar de posições fechadas a posições mais abertas."
                />
              </div>
            </div>
          </div>
        </section>
        <Section classNames="pt-8 sm:pt-0">
          <HeroFlex
            title="O Juninho Rezende"
            description="Considerado um dos maiores cavaquinistas do Brasil, Juninho Rezende é cavaquinista há 18 anos e atua há 10 anos como profissional. E é o Cavaquinista oficial do cantor Mumuzinho e fundador da RZD Music"
            imagePath={2}
          >
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="flex gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="text-zinc-600 text-lg">Considerado um dos maiores cavaquinistas do Brasil.</span>
              </p>
              <p className="flex gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="text-zinc-600 text-lg">Cavaquinista oficial do <strong>cantor Mumuzinho</strong> e fundador da RZD Music.</span>
              </p>
              <p className="flex gap-2 items-center">
                <img src="./images/icons/4.png" alt="check" className="w-10 h-10" />
                <span className="text-zinc-600 text-lg"><strong>Formou</strong> centenas de alunos do zero.</span>
              </p>
            </div>
          </HeroFlex>
        </Section>
        <Section classNames="pt-12 sm:pt-24">
          <div className="flex flex-col" id="oferta">
            <h2 className="text-4xl font-bold sm:text-center">Chegou a hora de fazer parte da <br /> <span className="letter-grad">FAMÍLIA RZD</span></h2>
            <div className="relative parallax-1 mt-6 sm:mt-12 w-full max-w-lg rounded-3xl px-4 sm:px-12 py-12 sm:py-16 overflow-hidden">
              <img src="./images/bg/3.png" alt="" className="block sm:hidden absolute bottom-0 left-0 h" />
              <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>

              <div className="relative flex flex-col z-10 text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="letter-grad text-3xl sm:text-4xl font-bold">OFERTA EXCLUSIVA</h3>
                  <p className="text-white/70">de R$<span className="text-white text-4xl line-through sm:ps-4">3.997,00</span></p>
                  <p className="text-white">
                    <span className="text-sm font-normal">12x de </span>
                    <span className="text-sm font-normal">R$ </span>
                    <span className="text-4xl font-bold tracking-wider ps-1">59,58</span>
                  </p>
                </div>
                <p className="py-4 text-sm my-4 border-y border-zinc-300 text-zinc-300">Clique no botão abaixo para entrar no <strong>grupo VIP</strong> onde será anunciado o valor promocional.</p>
                <a href="https://pay.hotmart.com/P87118107J" className="mb-4 rounded-lg grad py-3 font-bold text-center text-white">QUERO APRENDER COM O JUNINHO</a>
                <Image
                  src="/images/icons/security.png"
                  alt="imagens de pagamento"
                  width={539}
                  height={46}
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer></footer>
    </div>
  )
}