"use client";
import Link from "next/link";

export default function CollegeCard({ item, detailBasePath = "" }) {
  const href = detailBasePath ? `${detailBasePath}/${item._id}` : `/${item._id}`;

  return (
    <Link
      href={href}
      className="info-card glass rounded-2xl p-3 sm:p-6 shadow-xl shine transition flex flex-col max-w-xl w-full mx-auto group hover:border-white/20"
    >
      <div className="h-50 sm:h-80 w-full bg-white rounded-2xl grid place-items-center mx-auto overflow-hidden p-4">
        <img
          src={item.image || "/img.png"}
          alt={item.Name || "College"}
          className="image-section w-auto h-40 sm:h-50 object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex items-start justify-between gap-3 mt-3 sm:mt-6">
        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-[48px] h-12 grid place-items-center rounded-xl font-bold text-lg shadow bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-900 shrink-0">
            #{item.Rank || "-"}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug truncate" title={item.Name}>
              {item.Name}
            </h3>
            <div className="text-sm text-indigo-200/80 truncate">
              {item.City ? `${item.City}, ` : ""}{item.State || ""}
            </div>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-xs text-indigo-200/70">Category</div>
          <div className="text-sm font-semibold text-indigo-200">
            {item.Category || "College"}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 flex justify-between gap-2">
        <span className="px-3 py-2 rounded-lg chip hover:bg-white/10 text-sm font-medium transition-colors text-indigo-100">
          Details →
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-sm font-medium transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </Link>
  );
}
