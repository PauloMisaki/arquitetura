export function Header() {
  return (
    <div className="absolute flex flex-row justify-between w-full py-6 bg-black bg-opacity-50">
      <div className="pl-20">
        <p className="text-3xl text-white">
          <span className="font-semibold">CREARE</span> Arquitetura
        </p>
      </div>
      <div className="flex pr-16 space-x-20 align-middle">
        <button className="font-semibold text-white hover:underline">
          INICIO
        </button>
        <button className="font-semibold text-white hover:underline">
          SOBRE NÓS
        </button>
        <button className="font-semibold text-white hover:underline">
          PROJETO
        </button>
        <button className="font-semibold text-white hover:underline">
          CONTATO
        </button>
      </div>
    </div>
  )
}
