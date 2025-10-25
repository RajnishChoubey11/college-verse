"use client";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const range = [];
  const maxShown = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxShown - 1);
  start = Math.max(1, Math.min(start, end - maxShown + 1));

  const makeButton = (label, page, disabled = false, active = false) => (
    <button
      key={label}
      onClick={() => !disabled && onPageChange(page)}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl transition ${
        active
          ? "bg-indigo-500 text-white"
          : "chip hover:bg-white/10 text-indigo-100"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-2">
      {makeButton("Prev", currentPage - 1, currentPage === 1)}

      {start > 1 && (
        <>
          {makeButton("1", 1)}
          {start > 2 && <span className="px-2 text-indigo-200/70">...</span>}
        </>
      )}

      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) =>
        makeButton(p, p, false, p === currentPage)
      )}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-2 text-indigo-200/70">...</span>
          )}
          {makeButton(totalPages, totalPages)}
        </>
      )}

      {makeButton("Next", currentPage + 1, currentPage === totalPages)}
    </div>
  );
};

export default Pagination;
