const Header = () => {
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-6 sm:pt-10">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl grid place-items-center glass shadow-lg">
              {/* Simple SVG crest */}
              <svg viewBox="0 0 64 64" className="w-7 h-7 text-indigo-300">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 12l24-6 24 6v16c0 16-10 26-24 30C18 54 8 44 8 28V12z"
                  fill="url(#g1)"
                />
                <path
                  d="M20 24h24M20 32h24M20 40h24"
                  stroke="#0b0f1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity=".8"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                College Verse
              </h1>
              <p className="text-sm sm:text-base text-indigo-200/80">
                Discover the top 100 colleges across 5 disciplines
              </p>
            </div>
          </div>
          {/* Stats */}
          <div className="hidden md:flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl glass">
              <div className="text-indigo-200/80 text-xs">Total Colleges</div>
              <div className="text-lg font-semibold text-center">500</div>
            </div>
            <div className="px-4 py-2 rounded-xl glass">
              <div className="text-indigo-200/80 text-xs">Disciplines</div>
              <div className="text-lg font-semibold text-center">5</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
