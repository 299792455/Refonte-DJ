'use client';

export default function Footer() {
  return (
    <footer className="w-full text-center p-4  ">
      <p>© {new Date().getFullYear()} DJ Sergio Telmo. <a
          href="/aviso-legal"
          className="underline text-[#1ed760] hover:text-white transition"
        >
          Todos los derechos reservados.
        </a></p>
    </footer>
  );
}
