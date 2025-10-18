const Footer = () => {
  return (
    <footer class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-indigo-200/70">
        <div>
          © <span id="curYear"></span> College Verse. All rights reserved.
        </div>
        <div class="flex gap-2">
          <a href="#top" class="chip px-3 py-1.5 rounded-lg">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
