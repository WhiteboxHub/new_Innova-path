// import Link from 'next/link'
// import Image from "next/image";

// export default function Logo() {
//   return (  
//     <Link href="/" className=" block text-blue-600 transition duration-150 ease-in-out" aria-label="IP">
//     <Image 
//       src="/images/logo/IP_logo.png" 
//       alt="IP Logo"
//       width={200}  
//       height={200} 
//       className=" "
//     />
//   </Link>
//   )
// }


import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`block text-blue-600 transition duration-150 ease-in-out ${className}`}
      aria-label="IP"
    >
      <Image
        src="/images/logo/IP_logo.png"
        alt="IP Logo"
        width={200}
        height={200}
      />
    </Link>
  );
}
