'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-black text-center"
    >
   
      <div className="absolute rounded-full opacity-70 mix-blend-screen pointer-events-none blur-[40px] animate-moveRandom1 w-[400px] h-[400px] bg-fuchsia-500"></div>
      <div className="absolute rounded-full opacity-70 mix-blend-screen pointer-events-none blur-[40px] animate-moveRandom2 w-[500px] h-[500px] bg-cyan-300"></div>

      {/* Titre neon avec effet scintillement sur le D seulement */}
      <div className="relative z-10">
      <h1 className="neon text-6xl md:text-8xl leading-tight font-bold">
  <span className="flicker">D</span>J
</h1>
<h1 className="neon text-6xl md:text-8xl leading-tight font-bold">SERGIO</h1>
<h1 className="neon text-6xl md:text-8xl leading-tight font-bold">TELMO</h1>

      </div>
    </section>
  );
}
