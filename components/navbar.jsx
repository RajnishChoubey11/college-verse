"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "University", path: "/", color: "from-indigo-400 to-sky-400" },
    { name: "Engineering", path: "/engineering", color: "from-rose-400 to-pink-400" },
    { name: "Medical", path: "/medical", color: "from-amber-400 to-orange-400" },
    { name: "Management", path: "/management", color: "from-emerald-400 to-teal-400" },
    { name: "Pharmacy", path: "/pharmacy", color: "from-green-400 to-blue-400" },
  ];

  return (
    <nav className="max-w-7xl mx-auto pb-6">
      <div className="glass rounded-2xl p-3 sm:p-4 shadow-xl">
        <div id="categoryTabs" className="flex gap-2 overflow-x-auto soft-scroll">
          {links.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path === "/" && pathname === "/university");
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-r ${link.color} text-white shadow-md`
                    : "chip"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
