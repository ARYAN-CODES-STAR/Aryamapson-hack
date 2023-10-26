// import React from "react";
// import logo from "../../public/ridoo.png";
// import Image from 'next/image';

// function Nav() {
//   return (
//     <div>
//       <header class="bg-gray-50">
//         <div class="mx-auto max-w-screen-lg px-4 py-0 sm:px-6 sm:py-0 lg:px-8">
//           <div class="sm:flex sm:items-center sm:justify-between py-0">
//             <div class="text-center sm:text-left">
//               <Image src={logo} width={100} height={200}/>

              {/* <p class="mt-1.5 text-sm text-gray-500">
                Let's write a new blog post! 🎉
              </p> */}
//             </div>

//             <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
//               <button
//                 class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
//                 type="button"
//               >
//                 <span class="text-sm font-medium"> View Website </span>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>

//               <button
//                 class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
//                 type="button"
//               >
//                 Create Post
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Nav;

import React from "react";
import Image from 'next/image';
import logo from "../../public/ridoo.png";

function Nav() {
  return (
    <div>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-lg px-4 py-0 sm:px-6 sm:py-0 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between py-0"> {/* Adjust padding */}
            {/* First Flexbox: Logo */}
            <div className="text-center sm:text-left mx-auto sm:mx-0"><Image src={logo} width={100} height={100} /></div>
            {/* <div className="text-center sm:text-left ml-0"> */}
              {/* <Image src={logo} width={100} height={100} /> */}

              {/* <p className="mt-1.5 text-sm text-gray-500">
                Let's write a new blog post! 🎉
              </p> */}
            {/* </div> */}

            <div className="text-center sm:text-left mx-auto sm:mx-0 bg-yellow-500 w-64 h-30">
            <div className="text-5xl font-bold mx-8 text-black">Carpool</div> {/* Add your first emoji */}

            </div>
            {/* Second Flexbox: Emoji 1 */}
            {/* <div className="mt-4 sm:mt-0 sm:flex sm:flex-row sm:items-center w-64 h-28 py-0 bg-yellow-500">
              <div className="text-5xl font-bold mx-8 text-black">Carpool</div> Add your first emoji
            </div> */}

            {/* Third Flexbox: Emoji 2 */}
            {/* <div className="mt-4 sm:mt-0 sm:flex sm:flex-row sm:items-center">
              <div className="text-5xl text-black">Carpool </div>
            </div> */}

            <div className="text-center sm:text-left mx-auto sm:mx-0">
            <div className="text-5xl text-black">Rido </div>
            </div>

            {/* Fourth Flexbox: Buttons */}
            {/* <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"> */}
              {/* <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button> */}

              {/* <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
