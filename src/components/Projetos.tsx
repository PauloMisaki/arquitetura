export function Projetos() {
  return (
    <div className="">
      <p className="flex justify-center pt-24 pb-2 text-4xl text-gray-800">
        PROJETOS EM DESTAQUE
      </p>
      <p className="flex justify-center italic text-gray-500">
        Aqui é onde o seu texto começa. Basta clicar e começar a escrever. Illo
        inventore veritatis et quasi
      </p>
      <p className="flex justify-center italic text-gray-500">
        architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.
      </p>
      <div className="flex flex-row justify-center mt-10 mb-8 space-x-16">
        <div className="overflow-hidden transition-all duration-200 ease-in-out hover:scale-110">
          <img
            src="https://d1di2lzuh97fh2.cloudfront.net/files/11/11k/11kv3b.jpg?ph=07b8c7dff3&t=1"
            alt=""
            className="object-cover transition-all duration-200 ease-in-out transform img-cont2 hover:scale-110"
          />
        </div>
        <div className="overflow-hidden transition-all duration-200 ease-in-out hover:scale-110">
          <img
            src="https://d1di2lzuh97fh2.cloudfront.net/files/0y/0yg/0yg11h.jpg?ph=07b8c7dff3&t=1"
            alt=""
            className="object-cover transition-all duration-200 ease-in-out transform img-cont2 hover:scale-110"
          />
        </div>
        <div className="overflow-hidden transition-all duration-200 ease-in-out hover:scale-110">
          <img
            src="https://d1di2lzuh97fh2.cloudfront.net/files/48/488/4887fw.jpg?ph=07b8c7dff3"
            alt=""
            className="object-cover transition-all duration-200 ease-in-out transform img-cont2 hover:scale-110"
          />
        </div>
      </div>
      <div className="flex justify-center pb-20 space-x-40 text-gray-700">
        <p>Apartamentos, Rio de Janeiro</p>
        <p>Biblioteca pública, São Paulo</p> <p>Shopping Center, Curitiba</p>
      </div>
    </div>
  )
}
