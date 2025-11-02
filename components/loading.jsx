const Loading =()=>{
    return (
      <div className="fixed inset-0 z-50 loading-overlay bg-orbit flex items-center justify-center">
        <div className="relative glass rounded-3xl p-8 max-w-sm w-full mx-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-white/20" />
              <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-indigo-400 border-r-purple-400 loading-spinner" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 loading-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Loading...</h3>
            <p className="text-indigo-200/80 text-sm">Please wait while we fetch the data</p>
          </div>
          <div className="mt-6">
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full loading-shimmer" style={{ width: '60%' }} />
            </div>
            <div className="mt-2 text-xs text-indigo-200/60">Loading…</div>
          </div>
        </div>
      </div>
    );
}
export default Loading;