import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-[#1ed760] text-5xl md:text-6xl font-bold mb-4 ">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 ">
          Página <br /> no encontrada
        </h2>
        <p className="text-lg text-gray-400 font-sans mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-[#1ed760] rounded-lg text-[#1ed760] hover:bg-[#1ed760] hover:text-black transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
