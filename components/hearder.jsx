const Header = () => {
  return (
    <header class="relative">
      <div class="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div class="flex items-center justify-between gap-6">
          {/* Logo */}
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl grid place-items-center glass shadow-lg">
              {/* Simple SVG crest */}
              <svg viewBox="0 0 64 64" class="w-7 h-7 text-indigo-300">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#a5b4fc" />
                    <stop offset="100%" stop-color="#60a5fa" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 12l24-6 24 6v16c0 16-10 26-24 30C18 54 8 44 8 28V12z"
                  fill="url(#g1)"
                />
                <path
                  d="M20 24h24M20 32h24M20 40h24"
                  stroke="#0b0f1e"
                  stroke-width="2"
                  stroke-linecap="round"
                  opacity=".8"
                />
              </svg>
            </div>
            <div>
              <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">
                College Verse
              </h1>
              <p class="text-sm sm:text-base text-indigo-200/80">
                Discover the top 100 colleges across 4 disciplines
              </p>
            </div>
          </div>
          {/* Stats */}
          <div class="hidden md:flex items-center gap-3">
            <div class="px-4 py-2 rounded-xl glass">
              <div class="text-indigo-200/80 text-xs">Total Colleges</div>
              <div class="text-lg font-semibold">400</div>
            </div>
            <div class="px-4 py-2 rounded-xl glass">
              <div class="text-indigo-200/80 text-xs">Disciplines</div>
              <div class="text-lg font-semibold">4</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
