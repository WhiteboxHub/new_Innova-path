// import Link from 'next/link'
// import Logo from './logo'
// import Dropdown from '@/components/utils/dropdown'
// import MobileMenu from './mobile-menu'

// export default function Header({ mode = 'dark' }: {
//   mode?: string
// }) {
//   return (
//     <header className= {` absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
//       <div className="max-w-7xl mx-auto px-5 sm:px-6  ">
//         <div className="flex items-center justify-between h-16 md:h-20">

//           {/* Site branding */}
//           <div className="shrink-0 mr-4">
//             <Logo />
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:grow">

//             {/* Desktop menu links */}
//             <ul className="flex grow  justify-start flex-wrap items-center">
//               <li>
//                 <Link href="/pricing" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">For foundation models</Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">For enterprises</Link>
//               </li>
          
//               {/* 1st level: hover */}
//               <Dropdown title="Why ip">
//                 {/* 2nd level: hover */}
//                 <li>
//                   <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">404</Link>
//                 </li>
//                 <li>
//                   <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Support</Link>
//                 </li>
//               </Dropdown>
//               <li>
//                 <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
//               </li>
//             {/* </ul> */}

//             {/* Desktop sign in links */}
//             {/* <ul className="flex grow justify-end flex-wrap items-center"> */}
//               <li>
//                 <Link href="/signin" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
//                 Become a trainer</Link>
//               </li>
//               <li>
//                 <Link href="/request-demo" className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
//                   Request Demo <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                 </Link>
//               </li>
//             </ul>

//           </nav>

//           <MobileMenu />

//         </div>
//       </div>
//     </header>
//   )
// }



// import Link from 'next/link';
// import Logo from './logo';
// import Dropdown from '@/components/utils/dropdown';
// import MobileMenu from './mobile-menu';

// export default function Header({ mode = 'dark' }: { mode?: string }) {
//   return (
//     <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
//       <div className="max-w-7xl mx-auto px-5 sm:px-6">
//         <div className="flex items-center justify-between h-16 md:h-20">

//           {/* Logo positioned at the extreme left */}
//           <div className="flex items-center">
//             <Logo />
//           </div>
     
//           {/* Desktop navigation */}
//           <nav className="hidden md:flex flex-grow justify-center items-center space-x-4">

//             {/* Desktop menu links */}
//             <Link href="/pricing" className="text-sm sm:text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               For foundation models
//             </Link>
//             <Link href="/blog" className="text-sm sm:text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               For enterprises
//             </Link>
//             <Dropdown title="Why ip">
//               <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">
//                 404
//               </Link>
//               <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">
//                 Support
//               </Link>
//             </Dropdown>
//             <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               About
//             </Link>
//             <Link href="/signin" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               Become a trainer
//             </Link>

//           </nav>

//           {/* "Request Demo" link positioned at the extreme right */}

//           <div>
//           <div className="hidden md:block">
//             <Link 
//               className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl w-full sm:w-auto group transition duration-150 ease-in-out text-center" 
//               href="/request-demo"
//             >
//               Request Demo 
//               <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//                 -&gt;
//               </span>
//             </Link>
//           </div>
//         </div>

//           {/* Mobile menu */}
//           <MobileMenu />

//         </div>
//       </div>
//     </header>
//   );
// }





// // Keep the rest of the imports the same
// import Link from 'next/link';
// import Logo from './logo';
// import Dropdown from '@/components/utils/dropdown';
// import MobileMenu from './mobile-menu';

// export default function Header({ mode = 'dark' }: { mode?: string }) {
//   return (
//     <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
//       <div className="max-w-7xl mx-auto px-5 sm:px-6">
//         <div className="flex items-center justify-between h-16 md:h-20">

//           {/* Logo */}
//           <div className="flex items-center">
//             <Logo />
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex flex-grow justify-center items-center space-x-4">
//             {/* <Link href="/pricing" className="text-sm sm:text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               For foundation models
//             </Link> */}
//             {/* <Link href="/blog" className="text-sm sm:text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               For enterprises
//             </Link> */}
//             <Dropdown title="Why IP">
//               <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">
//                 404
//               </Link>
//               <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">
//                 Support
//               </Link>
//             </Dropdown>
//             <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               About
//             </Link>
//             {/* <Link href="/signin" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150 ease-in-out">
//               Become a trainer
//             </Link> */}
//           </nav>

//           {/* Request Demo */}
//           <div className="hidden md:block">
//             <Link 
//               className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl w-full sm:w-auto group transition duration-150 ease-in-out text-center" 
//               href="/request-demo"
//             >
//               Request Demo 
//               <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//                 -&gt;
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu (card style) */}
//           <div className="md:hidden">
//             <MobileMenu />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



// // Keep the rest of the imports the same
// import Link from 'next/link';
// import Logo from './logo';
// import Dropdown from '@/components/utils/dropdown';
// import MobileMenu from './mobile-menu';

// export default function Header({ mode = 'dark' }: { mode?: string }) {
//   return (
//     // <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
//     <header className={`absolute w-full z-30 bg-slate-900 ${mode !== 'light' && 'dark'}`}>

//       <div className="max-w-7xl mx-auto px-5 sm:px-6">
//         <div className="flex items-center justify-between ml-10 h-16 md:h-20">

//           {/* Logo */}
//           <div className="flex items-center ">
//             <Logo />
//           </div>

//           {/* Desktop navigation + Request Demo aligned right */}
//           <div className="hidden md:flex items-center ml-auto space-x-4">


//           {/* </div><div className="hidden md:flex items-center ml-auto space-x-4"> */}

// {/* Talent Showcase Dropdown */}
//       {/* <Dropdown
//         title={
//           <span className="text-white text-xl font-bold tracking-wide leading-relaxed font-[Poppins]">
//             Talent Showcase
//           </span>
//         }                >
//           <Link href="/talent-showcase/search-candidates" className="text-sm text-black-800 hover:text-blue-600 flex py-2 px-5 leading-tight">
//             Search Talent
//           </Link>
//           <Link href="/talent-showcase/request-talent" className="text-sm text-black-800 hover:text-blue-600 flex py-2 px-5 leading-tight">
//             Request Talent
//           </Link>
//                     </Dropdown>  */}
//        <Dropdown
//         title={
//           // <span className="text-white text-xl font-bold tracking-wide leading-relaxed font-[Poppins]">
//           <span className="text-white text-xl font-bold tracking-wide leading-relaxed font-[Poppins]  transition-colors duration-200 ">

//             Talent Showcase
//           </span>
//         }
//       >
//         <Link
        
//           href="/talent-showcase/search-candidates"
//           className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
//         >
        

//           Search Talent
//         </Link>
//         <Link
//           href="/talent-showcase/request-talent"
//           className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
//         >
//           Request Talent
//         </Link>
//       </Dropdown>


            
//             <Link 
//               className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl w-full sm:w-auto group transition duration-150 ease-in-out text-center" 
//               href="/request-demo"
//             >
//               Request Demo 
//               <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//                 -&gt;
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu (card style) */}
//           <div className="md:hidden">
//             <MobileMenu />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// components\ui\header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';

export default function Header({ mode = 'dark' }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'} bg-slate-900`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between ml-10 h-16 md:h-20">

          {/*  Site branding with logo image */}
          <div className="flex items-center mb-2">
            <Link href="/" className="block transition duration-150 ease-in-out" aria-label="IP">
              <Image
                src="/images/logo/IP_logo.png"
                width={180}
                height={80}
                alt="Innovapath Logo"
                priority
                className="h-12 w-auto md:h-20"
              />
            </Link>
          </div>

          {/*Talent Showcase Dropdown + Request Demo */}
          <div className="hidden  md:flex items-center ml-auto space-x-4">

            <Dropdown
              title={
                // 
                <span className=" text-white text-xl font-bold tracking-wide leading-relaxed font-times-new-roman transition-colors duration-200">
                  Talent Showcase
                </span>
              }
            >
              <Link
                href="/talent-showcase/search-candidates"
                className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
              >
                Search Talent
              </Link>
              {/* <Link
                href="/talent-showcase/request-talent"
                className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
              >
                Request Talent
              </Link> */}
            </Dropdown>

            <Link
              className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl w-full sm:w-auto group transition duration-150 ease-in-out text-center"
              href="/request-demo"
            >
              Request Demo
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </Link>
          </div>

          {/* Mobile menu for smaller screens */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
