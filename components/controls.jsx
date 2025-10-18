const Controls = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6 mt-6">
        <div class="grid md:grid-cols-12 gap-4">
          {/* Search */}
          <div class="md:col-span-5">
            <form id="searchForm" class="w-full" autocomplete="off">
              <label class="block text-sm text-indigo-200/80 mb-2">
                Search colleges
              </label>
              <div class="flex items-center gap-2">
                <div class="flex-1 glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg
                    class="w-5 h-5 text-indigo-200/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="7" stroke-width="2"></circle>
                    <path
                      d="M21 21l-3.5-3.5"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <input
                    id="searchInput"
                    class="bg-transparent outline-none w-full placeholder-indigo-200/60"
                    placeholder="Try 'Apex', 'Mumbai', or 'Medical'"
                  />
                </div>
                <button
                  type="button"
                  id="clearSearch"
                  class="px-4 py-3 rounded-xl chip hover:bg-white/10"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* Location */}
          <div class="md:col-span-3">
            <label class="block text-sm text-indigo-200/80 mb-2">
              Location
            </label>
            <div class="glass rounded-xl px-4 py-3">
              <select
                id="locationSelect"
                class="bg-transparent w-full outline-none"
              >
                {/* Options inserted by JS */}
              </select>
            </div>
          </div>

          {/* Sort */}
          <div class="md:col-span-2">
            <label class="block text-sm text-indigo-200/80 mb-2">Sort by</label>
            <div class="glass rounded-xl px-4 py-3">
              <select
                id="sortSelect"
                class="bg-transparent w-full outline-none"
              >
                <option value="rank_asc">Rank (1 → 100)</option>
                <option value="rank_desc">Rank (100 → 1)</option>
                <option value="score_desc">Score (High → Low)</option>
                <option value="score_asc">Score (Low → High)</option>
                <option value="name_asc">Name (A → Z)</option>
                <option value="name_desc">Name (Z → A)</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div class="md:col-span-2 flex md:block gap-3 md:gap-2 items-end">
            <button
              id="resetBtn"
              class="w-full px-4 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium shine transition"
            >
              Reset filters
            </button>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-6 mt-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="text-indigo-100/90">
            <span id="resultCount" class="font-semibold">
              100
            </span>{" "}
            results •<span id="activeCategoryLabel">Engineering</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-indigo-200/70 text-sm">Per page</span>
            <div class="glass rounded-xl px-3 py-1.5">
              <select id="perPageSelect" class="bg-transparent outline-none">
                <option>10</option>
                <option>20</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Controls;
