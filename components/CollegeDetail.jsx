"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "./loading";

const categoryGradients = {
  Engineering: "from-rose-400 to-pink-400",
  Medical: "from-amber-400 to-orange-400",
  Management: "from-emerald-400 to-teal-400",
  University: "from-indigo-400 to-sky-400",
  Pharmacy: "from-green-400 to-blue-400",
};

const categoryIcons = {
  Engineering: "⚙️",
  Medical: "🩺",
  Management: "📈",
  University: "🎓",
  Pharmacy: "💊",
};

export default function CollegeDetail({ apiBasePath, fallbackCategory = "College" }) {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`${apiBasePath}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((resData) => {
        if (isMounted) {
          setData(resData);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error in data fetching:", error);
        if (isMounted) {
          setData(null);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiBasePath, id]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <div className="glass rounded-2xl p-8 max-w-md mx-auto">
          <div className="text-4xl mb-3">⚠️</div>
          <h2 className="text-xl font-semibold mb-2">College Not Found</h2>
          <p className="text-indigo-200/70 text-sm mb-6">
            Unable to find college details with ID: {id}
          </p>
          <button
            onClick={() => router.back()}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-sm font-medium cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const category = data?.Category || fallbackCategory;
  const gradient = categoryGradients[category] || "from-indigo-400 to-sky-400";
  const icon = categoryIcons[category] || "🎓";

  return (
    <div className="Details text-white antialiased py-4 sm:py-6">
      <div className="max-w-7xl mx-auto mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors mb-6 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_3fr] gap-6 sm:gap-4 items-start">
          {/* Image Section */}
          <div>
            <div className="w-35 aspect-square sm:h-60 sm:w-full sm:aspect-auto bg-white rounded-2xl flex justify-center items-center px-3 py-2 sm:px-4 sm:py-4 mx-auto sm:mx-0">
              <img
                src={data?.image || "/img.png"}
                alt={data?.Name || "College"}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div
              className={`relative overflow-hidden rounded-2xl min-h-[160px] bg-gradient-to-r sm:min-h-[240px] p-6 flex flex-col justify-between ${gradient}`}
            >
              <svg
                viewBox="0 0 600 320"
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                preserveAspectRatio="none"
              >
                <circle cx="100" cy="160" r="60" fill="white" />
                <circle cx="300" cy="80" r="40" fill="white" />
                <circle cx="500" cy="240" r="50" fill="white" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 sm:p-4 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-2xl backdrop-blur-sm sm:text-4xl shrink-0">
                    #{data?.Rank || "-"}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white sm:text-3xl leading-tight">
                      {data?.Name}
                    </h1>
                    <p className="text-white/90 text-sm sm:text-lg mt-1">
                      {data?.City ? `${data.City}, ` : ""}{data?.State || ""}
                    </p>
                    <p className="text-white/80 text-xs mt-1 sm:text-sm">
                      {category} College
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 bottom-4 text-5xl opacity-80 sm:text-7xl sm:right-6 sm:bottom-6 pointer-events-none">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-indigo-300">
              {data?.Rank ? `NIRF #${data.Rank}` : "Top 100"}
            </div>
            <div className="text-sm text-indigo-200/70">National Ranking</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-300">
              {data?.["Placement Rate"] || "98%"}
            </div>
            <div className="text-sm text-indigo-200/70">Placement Rate</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-300">
              {data?.["Total Students"] || "8.5K"}
            </div>
            <div className="text-sm text-indigo-200/70">Total Students</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300">
              {data?.["Campus Size"] || "250 Acres"}
            </div>
            <div className="text-sm text-indigo-200/70">Campus Size</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              About College
            </h3>
            <div className="space-y-3 text-indigo-100/90">
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Established</span>
                <span>{data?.["Established"] || "1959"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Total Students</span>
                <span>{data?.["Total Students"] || "8,500"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Faculty Members</span>
                <span>{data?.["Faculty Members"] || "550"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Campus Size</span>
                <span>{data?.["Campus Size"] || "250 acres"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Annual Fees</span>
                <span>{data?.["Annual Fees"] || "₹2.1L"}</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Placement Stats
            </h3>
            <div className="space-y-3 text-indigo-100/90">
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Placement Rate</span>
                <span className="text-green-300 font-semibold">
                  {data?.["Placement Rate"] || "98%"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Average Package</span>
                <span>{data?.["Average Package"] || "₹15.2L"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Highest Package</span>
                <span>{data?.["Highest Package"] || "₹38.0L"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Top Recruiters</span>
                <span className="text-right text-sm">
                  {Array.isArray(data?.["Top Recruiters"]) && data["Top Recruiters"].length > 0
                    ? data["Top Recruiters"].join(", ")
                    : "TCS, Infosys, Microsoft, Google"}
                </span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Courses Offered
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(data?.["Courses Offered"]) && data["Courses Offered"].length > 0
                ? data["Courses Offered"].map((course, idx) => (
                    <span key={idx} className="tag px-3 py-1.5 rounded-lg text-sm">
                      {course}
                    </span>
                  ))
                : (
                  <>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Undergraduate</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Postgraduate</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Doctoral (Ph.D.)</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Diploma</span>
                  </>
                )}
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Facilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(data?.["Facilities"]) && data["Facilities"].length > 0
                ? data["Facilities"].map((facility, idx) => (
                    <span key={idx} className="tag px-3 py-1.5 rounded-lg text-sm">
                      {facility}
                    </span>
                  ))
                : (
                  <>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Library</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Hostel</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Sports Complex</span>
                    <span className="tag px-3 py-1.5 rounded-lg text-sm">Research Labs</span>
                  </>
                )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
          {data?.Website && (
            <a
              href={data.Website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 font-medium inline-flex items-center gap-2 cursor-pointer"
            >
              Official Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          <button
            type="button"
            className="px-6 py-3 rounded-xl chip hover:bg-white/10 cursor-pointer"
          >
            Save to Favorites
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl chip hover:bg-white/10 cursor-pointer"
          >
            Add to Compare
          </button>
        </div>
      </div>
    </div>
  );
}
