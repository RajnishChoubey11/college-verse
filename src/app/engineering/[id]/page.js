"use client";
import {useEffect,useState} from "react"
import { useParams, useRouter } from "next/navigation";

export default function Details() {

  const {id,Category} = useParams();
  const router = useRouter();
  const[data,setData] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);

  useEffect(()=>{
    if (!id) return;
    
    setLoading(true);
    setError(null);
    
    fetch(`/api/engineering/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched data:', data);
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error in data fetching:', error);
      setError(error.message);
      setData(null);
      setLoading(false);
    });
  },[id]);

  return (
    <div className="Details min-h-screen bg-orbit text-white antialiased p-12">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
      <div className="max-w-7xl mx-auto mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="h-60 bg-white rounded-2xl flex justify-center items-center p-4">
              <img
                src={data?.image}
                alt={data?.Name}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          
          {/* Info Section */}
          <div className="lg:col-span-2">
            <div className={`relative overflow-hidden rounded-2xl h-60 bg-gradient-to-r ${
              data?.Category === 'Engineering' ? 'from-rose-400 to-pink-400' : 
              data?.Category === 'Medical' ? 'from-amber-400 to-orange-400' : 
              data?.Category === 'Management' ? 'from-emerald-400 to-teal-400' : 
              data?.Category === 'University' ? 'from-indigo-400 to-sky-400':
              'from-green-400 to-blue-400'
            }`}>
              <svg viewBox="0 0 600 320" className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                <circle cx="100" cy="160" r="60" fill="white"/>
                <circle cx="300" cy="80" r="40" fill="white"/>
                <circle cx="500" cy="240" r="50" fill="white"/>
              </svg>
              <div className="absolute left-6 top-6">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center">
                    <div className="p-4 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-4xl backdrop-blur-sm">#{data?.Rank}</div>
                    <h1 className="text-3xl font-bold text-white m-2">{data?.Name}</h1>
                  </div>
                  <p className="text-white/90 text-lg">{data?.City}, {data?.State}</p>
                  <p className="text-white/80 text-sm mt-1">{data?.Category} College</p>
                </div>
              </div>
              <div className="absolute right-6 bottom-6 text-7xl opacity-80">
                {data?.Category === 'Engineering' ? '⚙️' : 
                data?.Category === 'Medical' ? '🩺' : 
                data?.Category === 'Management' ? '📈' :
                data?.Category === 'Pharmacy' ? '💊' : '🎓'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pb-6 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-indigo-300">95</div>
            <div className="text-sm text-indigo-200/70">Overall Score</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-300">98%</div>
            <div className="text-sm text-indigo-200/70">Placement Rate</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-300">8.5K</div>
            <div className="text-sm text-indigo-200/70">Students</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300">250</div>
            <div className="text-sm text-indigo-200/70">Acres Campus</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              About College
            </h3>
            <div className="space-y-3 text-indigo-100/90">
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Established</span>
                <span>1959</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Total Students</span>
                <span>8,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Faculty Members</span>
                <span>550</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Campus Size</span>
                <span>250 acres</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Annual Fees</span>
                <span>₹2.1L</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Placement Stats
            </h3>
            <div className="space-y-3 text-indigo-100/90">
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Placement Rate</span>
                <span className="text-green-300 font-semibold">98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Average Package</span>
                <span>₹15.2L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Highest Package</span>
                <span>₹38.0L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200/70">Top Recruiters</span>
                <span className="text-right text-sm">TCS, Infosys<br/>Microsoft, Google</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Courses Offered
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Computer Science</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Mechanical</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Electrical</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Civil</span>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Facilities
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Library</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Hostel</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Sports</span>
              <span className="tag px-3 py-1.5 rounded-lg text-sm">Lab</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
          <button type="button" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 font-medium">
            Save to Favorites
          </button>
          <button type="button" className="px-6 py-3 rounded-xl chip hover:bg-white/10">
            Add to Compare
          </button>
          <button type="button" className="px-6 py-3 rounded-xl chip hover:bg-white/10">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  )

}