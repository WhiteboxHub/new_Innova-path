// import Image from 'next/image'
// // import FeaturesImage01 from '@/public/images/features-home-3-01.jpg'
// import awardImage01 from '@/public/images/logo/award-1.png'
// import awardImage02 from '@/public/images/logo/award-2.png'
// import awardImage03 from '@/public/images/logo/award-3.png'
// // import FeaturesImage02 from '@/public/images/features-home-3-02.jpg'
// // import FeaturesImage03 from '@/public/images/features-home-3-03.jpg'

// export default function FeaturesHome03() {
//   return (
//     <section className="relative">

//       {/* Dark background */}
//       <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64" aria-hidden="true"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 font-playfair-display text-slate-100">Awards & recognition</h2>
//             <p className="text-xl text-slate-300">
//             Innovapath is proud to be recognized for our award-winning innovation.
//             </p>
//           </div>

//           {/* Section content */}
//           <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">

//             {/* 1st article */}
//             <article data-aos="fade-up">
//               <a className="relative block group mt-8 mb-4" href="#0">
//                 <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
//                 <div className="overflow-hidden">
//                   <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={awardImage01} width={342} height={342} alt="News 01" />
//                 </div>
//                 <div className="w-16 h-16 absolute bg-linear-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
//                   <svg className="w-16 h-16 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
//                     <path className="text-white" d="m30.152 39.848.672-.408C32.24 33.632 33.92 32 35.96 26.768a10.714 10.714 0 0 0-.432-2.28c-.288-.096-.888-.336-1.44-.336-1.776.48-3.48 1.632-5.208 2.088-1.272.336-.576 2.352.36 3.312.672-.384 1.872-1.008 2.28-.96-1.248 2.112-3 6.12-3 7.704 0 .528-.48.816-.48 1.104 0 .288.12.6.144.936.384-.24.48-.12.48.264.264.192.672.504 1.032.816.144-.744.384-1.56.888-1.464l-.6 1.704c.072.072.12.144.168.192Z" />
//                   </svg>
//                 </div>
//               </a>
//               <h3 className="h4 font-playfair-display mb-2">
//                 <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Advanced Features</a>
//               </h3>
//               <p className="text-lg text-slate-500">Innovpath Technologies honored as Business Services category winner in the 2025 Artificial Intelligence Excellence Awards</p>
//             </article>

//             {/* 2nd article */}
//             <article data-aos="fade-up" data-aos-delay="100">
//               <a className="relative block group mt-8 mb-4" href="#0">
//                 <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
//                 <div className="overflow-hidden">
//                   <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={awardImage02} width={342} height={342} alt="News 02" />
//                 </div>
//                 <div className="w-16 h-16 absolute bg-linear-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
//                   <svg className="w-16 h-16 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
//                     <path className="text-white" d="M25.508 39.044c.312 0 .672-.024 1.008-.048-.096-.432.384-.528.816-.096 1.488-.216 3.12-.624 4.416-.888l.6-.624c1.104 0 .456.624 1.44.432.168-1.008.552-.456 1.92-1.176l.072.168c-.264.192-.72.408-1.152.576v.216c1.584-.528 1.848-1.32 2.928-1.464 1.224-.168 2.184-.048 2.52-.792l-1.728-.096-.168-.24h1.008l-.096-.216c-1.032 0-1.44-.168-2.4-.576-2.016.192-5.328.912-7.632.768 1.296-1.512 3.72-2.592 5.712-3.648.024.36-.384.6-.744.816l.072.216 1.344-.744c.048-.72.552-1.344 1.272-1.44.6-.744.864-1.776.864-2.76 0-1.08-1.2-2.208-3.024-2.208l.096-.264c-1.968.192-5.4.36-6.792 1.176-.504.288-.456.696-.792.984.48.36.024.528.504 1.2.624.888.648 1.488 1.152 1.2 1.056-.576 2.4-1.176 3.384-1.176.48 0 .864.168 1.104.504 0 1.488-6.744 3.792-9.288 7.632.48.096.312.48.072.84.504.768.84 1.728 1.512 1.728Zm7.344-5.976.912-.48-.048-.264-.912.6.048.144Zm7.08 3.216-.096-.216-1.128.216c.144.168.72.048 1.224 0Z" />
//                   </svg>
//                 </div>
//               </a>
//               <h3 className="h4 font-playfair-display mb-2">
//                 <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Advanced Features</a>
//               </h3>
//               <p className="text-lg text-slate-500">Innovapath Technologies ranked 61st fastest-growing company in North America on the 2024 Deloitte Technology Fast 500™</p>
//             </article>

//             {/* 3rd article */}
//             <article data-aos="fade-up" data-aos-delay="200">
//               <a className="relative block group mt-8 mb-4" href="#0">
//                 <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
//                 <div className="overflow-hidden">
//                   <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={awardImage03} width={342} height={342} alt="News 03" />
//                 </div>
//                 <div className="w-16 h-16 absolute bg-linear-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
//                   <svg className="w-16 h-16 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
//                     <path className="text-white" d="M25.53 40.038c1.607-.216 3.071-.576 4.655-1.08.048-.36.288-.6.552-.624l.12.408a37.15 37.15 0 0 0 2.352-.912l.12.264c1.416-.72 2.64-1.2 3.984-2.376l.312.144c1.392-1.248 1.632-2.904 1.632-4.728-.624-.912-1.416-1.656-2.784-2.112.36-.72.768-1.752.984-2.784-.12-.648-.408-1.224-.864-1.776-.84-.072-2.088-.24-3.264-.24l-.192-.216a18.485 18.485 0 0 0-1.152-.048c-1.776 0-4.056 1.032-4.056 1.944 0 .624.048 1.248.192 1.824l.268-.172c.578-.368 1.127-.671 1.46-.38l-1.656.792c.048.144.12.336.192.48 1.296-.672 3.96-1.608 5.64-1.608-.456.984-2.376 2.496-3.672 2.832l-.24 1.056c.456 1.248.864 1.032 2.16 1.68l.12-.288c1.8.216 3.336 0 3.96.72-.312 1.464-3.984 2.712-5.4 3.12-.504.144-.84.144-.936-.096-1.416.744-3.36.696-5.064.696-.24.768-.336 1.608.048 2.544l.72-.312c.144.288-.432.696-.456.96-.024.24.12.312.264.288Zm7.703-2.352-.144-.264.744-.312.072.216-.672.36Zm-4.344 1.248-.048-.264c.216-.048.384-.096.552-.12a.588.588 0 0 1 .48.12l-.984.264Z" />
//                   </svg>
//                 </div>
//               </a>
//               <h3 className="h4 font-playfair-display mb-2">
//                 <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Advanced Features</a>
//               </h3>
//               <p className="text-lg text-slate-500">Innovapath Technologies ranks #3 in artificial intelligence and #152 overall on the 2024 Inc. 5000</p>
//             </article>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



import { CheckCircleIcon, CpuChipIcon, Cog6ToothIcon, SparklesIcon, ChartBarIcon, BellAlertIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export default function IntelligentAutomation() {
  return (
    <section className="bg-gradient-to-b from-slate-30 to-white  py-0.5 mb-0.5 mb-[-200px] mt-[-90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 ">
      {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> */}

        <div className="flex flex-col md:flex-row items-center md:space-x-12 lg:space-x-20">

          {/* Left Card */}
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <div className="bg-gradient-to-tr from-indigo-50 to-purple-100 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto border border-slate-200">
              {/* Header Icon and Title */}
              <div className="flex items-center space-x-3 mb-4">
                <Cog6ToothIcon className="w-7 h-7 text-indigo-600" />
                <h4 className="text-lg font-semibold text-slate-800">Empowered Performance</h4>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-slate-600 mb-6">
                Unlock Human Potential with Smart, Context-Aware Guidance
              </p>

              {/* Automation Steps */}
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <SparklesIcon className="w-5 h-5 mt-1 text-violet-600" />
                  <span className="text-slate-700">AI-curated development paths</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ChartBarIcon className="w-5 h-5 mt-1 text-blue-600" />
                  <span className="text-slate-700">Real-time insights via dashboards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BellAlertIcon className="w-5 h-5 mt-1 text-rose-500" />
                  <span className="text-slate-700">Contextual alerts and updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <UserGroupIcon className="w-5 h-5 mt-1 text-emerald-600" />
                  <span className="text-slate-700">Tailored employee journeys</span>
                </li>
              </ul>

              {/* Footer stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white shadow-sm rounded-lg px-4 py-2 text-center">
                  <div className="text-xs text-slate-500">Enrollments</div>
                  <div className="text-xl font-bold text-indigo-600">540</div>
                </div>
                <div className="bg-white shadow-sm rounded-lg px-4 py-2 text-center">
                  <div className="text-xs text-slate-500">Rating</div>
                  <div className="text-xl font-bold text-green-600">4.2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
            <div className="max-w-xl">
              {/* Pre-title */}
              <div className="flex items-center mb-3 space-x-2">
                <CpuChipIcon className="w-6 h-6 text-emerald-600" />
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-600">
                  AI-Powered Enablement
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-semibold font-times-new-roman text-slate-800 mb-4">
                Empowered Performance Through AI
              </h3>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-6">
                Equip managers and employees with AI-powered assistance, timely insights, and personalized nudges—all seamlessly embedded into daily workflows.
              </p>

              {/* Bullet List */}
              <ul className="space-y-4 text-base text-slate-700">
                {[
                  'Intelligent development paths curated by AI',
                  'Interactive dashboards that surface relevant, real-time insights',
                  'Contextual alerts and updates to keep teams aligned',
                  'Tailored employee journeys shaped by behavioral and performance data',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-1 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
