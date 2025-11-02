"use client";
import { Navbar, Pagination, Loading } from "../../../components";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Engineering() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setLoading(true);
    fetch("/api/engineering")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData(false);
        setFilteredData(false);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((item) => {
      const name = item?.Name?.toLowerCase() || "";
      const city = item?.City?.toLowerCase() || "";
      const state = item?.State?.toLowerCase() || "";
      return (
        name.includes(value) || city.includes(value) || state.includes(value)
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredData(data);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  if (loading || !data) {
    return <Loading />;
  }
  return (
    <div className="App text-white antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="md:col-span-5">
          <form id="searchForm" className="w-full" autoComplete="off">
            <label className="block text-sm text-indigo-200/80 mb-2">
              Search colleges
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 glass rounded-xl px-4 py-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-indigo-200/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                  <path
                    d="M21 21l-3.5-3.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <input
                  id="searchInput"
                  className="bg-transparent outline-none w-full placeholder-indigo-200/60"
                  placeholder="Try 'Apex', 'Mumbai', or 'Medical'"
                  onChange={handleSearch}
                  value={searchTerm}
                />
              </div>

              <button
                type="button"
                onClick={handleClearSearch}
                className="px-4 py-3 rounded-xl chip hover:bg-white/10"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Heading */}
        <div className="heading text-2xl font-semibold my-6">Engineering Colleges</div>

        {/* College List */}
        <div id="bigBox" className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <Link
                href={`/engineering/${item._id}`}
                className="info-card glass rounded-2xl p-3 sm:p-6 shadow-xl shine transition flex flex-col max-w-xl w-full mx-auto"
                key={item._id}
              >
                <div className="h-50 sm:h-80 w-full bg-white rounded-2xl grid place-items-center mx-auto">
                  <img
                    src={item.image}
                    alt={item.Name}
                    className="image-section w-auto h-40 sm:h-50 object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 mt-3 sm:mt-6">
                  <div className="flex items-center gap-3">
                    <div className="min-w-[48px] h-12 grid place-items-center rounded-xl font-bold text-lg shadow bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-900">
                      #{item.Rank}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">
                        {item.Name}
                      </h3>
                      <div className="text-sm text-indigo-200/80">
                        {item.City}, {item.State}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-indigo-200/70">Score</div>
                    <div className="text-2xl font-bold">${item.score}</div>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex justify-between">
                  <button
                    type="button"
                    className="px-3 py-2 rounded-lg chip hover:bg-white/10 text-sm"
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-sm font-medium"
                  >
                    Save
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center col-span-full">
              <h1 className="text-xl text-indigo-200/80">
                No Result Found
              </h1>
            </div>
          )}
        </div>

        {/* ✅ New Styled Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
