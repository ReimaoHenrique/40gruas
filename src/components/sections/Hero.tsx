export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video_Hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Conteúdo do Hero */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-yellow-400 mb-4 md:mb-6 drop-shadow-2xl">
          40grausbahia
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-yellow-300 mb-4 md:mb-6 drop-shadow-xl">
          Agência de Modelos
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg px-2">
          Descubra talentos excepcionais para seus projetos. Modelos
          profissionais para fotografia, eventos e desfiles.
        </p>

        {/* Botão Glassmorphism */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <button className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/20">
            {/* Efeito de brilho interno */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Conteúdo do botão */}
            <div className="relative flex items-center justify-center sm:justify-start space-x-2 md:space-x-3">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                CONTRATAR MODELOS
              </span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-6 bg-transparent border-2 border-white/30 text-white font-bold text-base md:text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            VER PORTFÓLIO
          </button>
        </div>
      </div>
    </section>
  );
}
