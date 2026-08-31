"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Pagination from "./pagination";
import Loading from "./loading";
import CollegeCard from "./CollegeCard";

export default function CollegeList({
  title,
  apiEndpoint,
  detailBasePath = "",
  placeholder = "Try 'Apex', 'Mumbai', or 'Delhi'",
}) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((resData) => {
        if (isMounted) {
          const list = Array.isArray(resData) ? resData : [];
          setData(list);
          setFilteredData(list);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        if (isMounted) {
          setData([]);
          setFilteredData([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiEndpoint]);

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

  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = (filteredData || []).slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App text-white antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="md:col-span-5">
          <form
            id="searchForm"
            className="w-full"
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-sm text-indigo-200/80 mb-2">
              Search colleges
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 glass rounded-xl px-4 py-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-indigo-200/70 shrink-0"
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
                  className="bg-transparent outline-none w-full placeholder-indigo-200/60 text-white"
                  placeholder={placeholder}
                  onChange={handleSearch}
                  value={searchTerm}
                />
              </div>

              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="px-4 py-3 rounded-xl chip hover:bg-white/10 text-sm font-medium cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-between my-6">
          <h2 className="heading text-2xl font-semibold">{title}</h2>
          <div className="text-sm text-indigo-200/70">
            Showing {filteredData.length} colleges
          </div>
        </div>

        {/* College List */}
        <div id="bigBox" className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <CollegeCard
                key={item._id}
                item={item}
                detailBasePath={detailBasePath}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center col-span-full py-16 text-center glass rounded-2xl">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-1">
                No Colleges Found
              </h3>
              <p className="text-sm text-indigo-200/70">
                Try searching for a different name, city, or state.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
