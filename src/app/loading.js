export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 loading-overlay bg-orbit flex items-center justify-center p-4">
      {/* Background ambient lighting orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-60 h-60 rounded-full bg-sky-500/15 blur-3xl pointer-events-none -bottom-10 -right-10" />

      {/* Main Glassmorphism Card */}
      <div className="relative glass-premium rounded-3xl p-8 max-w-sm w-full mx-auto text-center overflow-hidden">
        {/* Subtle top card glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

        {/* Multi-ring Cosmic Spinner */}
        <div className="mb-7 flex justify-center items-center">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer pulsating aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-sky-400/20 blur-md animate-pulse-glow" />

            {/* Outer counter-rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-400/40 animate-spin-reverse-slow" />

            {/* Middle glowing gradient spinner */}
            <div className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-indigo-400 border-r-sky-400 animate-spin" />

            {/* Inner glowing core icon */}
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner animate-float-gentle">
              <svg
                className="w-6 h-6 text-indigo-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l-9-5 9-5 9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-1.5 mb-6">
          <h3 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-indigo-200 via-white to-sky-200 bg-clip-text text-transparent">
            College Verse
          </h3>
          <p className="text-indigo-200/70 text-xs font-normal">
            Fetching institutions & verified NIRF rankings...
          </p>
        </div>

        {/* High-Tech Shimmer Bar */}
        <div className="space-y-3">
          <div className="w-full bg-white/[0.08] rounded-full h-1.5 overflow-hidden relative">
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-400 to-sky-300 rounded-full animate-laser shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
          </div>

          {/* Staggered Pulsing Dots */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-indigo-300/80">
            <span>Loading data</span>
            <div className="flex items-center gap-1 ml-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-1" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 dot-2" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 dot-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
