import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-indigo-200/70">
        <div>
          © <span id="curYear"></span> College Verse. All rights reserved.
        </div>
        <div className="flex gap-2">
          <button className="chip px-3 py-1.5 rounded-lg">
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
