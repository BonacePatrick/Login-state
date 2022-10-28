
import './App.css';

function App() {
  return (
    <>
       {/* --global container -- */}
       <div className="flex items-center justify-center min-h-screen bg-slate-50">
        {/* --card container--- */}
        <div className="relative flex.flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:space-y-0 flex-row md:m-0">
          {/* --left side (contents) */}
            <div className="p-6 md:p-20">
             {/* ---top content--  */}
             <h2 className="mb-5 text-4xl font-bold">Login</h2>
             <p className="max-w-sm mb-12 font-light text-gray-600">
              Login to your account to upload and download high rated musics and also pictures.
             </p>
             <input type="text" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light" placeholder='enter your email address' />
             {/* --Middle content-- */}
             <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-700">Forgot password?</div>
              <button className='w-full md:w-auto flex justify-center items-center p-4  space-x-4 font-bold text-white rounded-md  px-6 bg-blue-600 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
                <span>Next</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
              </button>
             </div>
             {/* --border-- */}
             <div className="mt-12 border-b border-b-gray-300"></div>
             {/* border contents-- */}
              <p className="py-6 text-sm font-thin text-center text-gray-800">
                or Login with
              </p>
              {/* --Bottom button container-- */}
              <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                  <img src="./images/facebook.png" alt="" className='w-9' />
                  <span className="font-thin">Facebook</span>
                </button>
                <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                  <img src="./images/google.png" alt="" className='w-9' />
                  <span className="font-thin">Google</span>
                </button>

              </div>
            </div>
        </div>
         {/* ---right side (image)  */}
         <img src="./images/image.jpg" alt="" className='w-[430px] h-[625px] object-cover hidden md:block' />
       </div>
    </>
  );
}

export default App;
