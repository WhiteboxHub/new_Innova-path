// import Link from 'next/link'
// import VideoThumb from '@/public/images/hero-image-01.jpg'
// import ModalVideo01 from '@/components/modal-video-01'

// export default function HeroHome() {
//   return (
//     <section className="relative  ">

//       {/* Dark background */}
//       <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-20 md:pt-40 md:pb-44">

//           {/* Hero content */}
//           <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

//             {/* Content */}
//             <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
//               <h1 className="h1 font-playfair-display text-slate-100 mb-4">Reimagine Talent Management with the Power of AI</h1>
//               <p className="text-xl text-slate-400 mb-8">Leverage Agentic AI, RAG, and Smart Chatbots to streamline talent operations, enhance decision-making, and scale innovation with precision and speed.</p>
//               <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//                 <div>
//                   <Link className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-auto group transition duration-150 ease-in-out" href="/request-demo">
//                     Request Demo <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                   </Link>
//                 </div>

//                 {/* <div>
//                   <Link className="btn text-white bg-slate-700 hover:bg-slate-800 w-full" href="#0">Explore Product</Link>
//                 </div> */}
//               </div>
//             </div>

//             {/* Hero image */}
//             <ModalVideo01
//               thumb={VideoThumb}
//               thumbWidth={540}
//               thumbHeight={405}
//               thumbAlt="Modal video thumbnail"
//               video="/videos/video.mp4"
//               videoWidth={1920}
//               videoHeight={1080} />

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Left side - Title */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1 className="h1 font-times-new-roman text-slate-100 mb-4">
                Reimagine Talent Management with the Power of AI
              </h1>
            </div>

            {/* Right side - Paragraph + Button */}
            <div
              className="text-center md:text-left space-y-6 max-w-xl"
              data-aos="fade-left"
            >
              <p className="text-xl text-slate-400 font-times-new-roman">
                Leverage Agentic AI, RAG, and Smart Chatbots to streamline
                talent operations, enhance decision-making, and scale innovation
                with precision and speed.
              </p>
              <div className="flex justify-center md:justify-start">
                {/* <Link
                  className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-auto group transition duration-150 ease-in-out"
                  href="/"
                >
                  Request Demo{" "}
                  <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link> */ }

                  
                  <Link
                    className="btn text-sm text-white bg-blue-600 hover:bg-blue-600 px-3 py-2 rounded-xl w-auto group transition duration-150 ease-in-out"
                    href="/request-demo"
                    // font-times-new-roman
                  >
                    Request Demo{" "}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
