import Image from 'next/image'

import nlwlogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwlogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="text-4xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black transition-colors hover:bg-green-700"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
