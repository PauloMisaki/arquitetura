import { Contato } from '../components/Contato'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projetos } from '../components/Projetos'
import { Sobre } from '../components/Sobre'
import { Sobre2 } from '../components/Sobre2'

export default function Index() {
  return (
    <>
      <head>
        <title>Arquitetura</title>
      </head>
      <div>
        <div className="flex flex-col min-h-screen mx-auto">
          <Header />
          <Hero />
          <Sobre />
          <Sobre2 />
          <Projetos />
          <Contato />
          <Footer />
        </div>
      </div>
    </>
  )
}
