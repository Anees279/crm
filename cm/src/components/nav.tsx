// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Img from '../assets/images/profile.webp'; // Assuming it's a profile image

// export const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-md fixed top-0 w-full z-10">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="w-10 rounded-full">
//           <Link to="/"><img src={Img} alt="Profile" /></Link>
//         </div>

//         {/* Hamburger button for mobile */}
//         <button
//           className="text-white block md:hidden"
//           onClick={toggleMenu}
//         >
//           {/* Conditionally render hamburger icon or X icon */}
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Links for desktop and mobile */}
//         <ul
//           className={`md:flex md:space-x-8 ${isOpen ? 'absolute top-16 left-0 w-full bg-blue-600' : 'hidden'} md:block space-y-4 md:space-y-0`}
//         >
//           <li>
//             <Link to="/" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>HomePage</Link>
//           </li>
//           <li>
//             <Link to="/Lead" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Leads</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
//           </li>
//           <li>
//             <Link to="/services" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Services</Link>
//           </li>
//           <li>
//             <Link to="/account" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Account</Link>
//           </li>
//           <li>
//             <Link to="/call" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Calls</Link>
//           </li>
//           <li>
//             <Link to="/meeting" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>Meetings</Link>
//           </li>
//         </ul>

//         <div className="w-10 rounded-full">
//           <img src={Img} alt="profile" />
//         </div>
//       </div>
//     </nav>
//   );
// };
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/images/profile.webp'; // Assuming it's a profile image

// Define the props interface for NavBar
interface NavBarProps {
  handleLogout: () => void; // Define handleLogout as a required prop
}

export const NavBar: React.FC<NavBarProps> = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-10 rounded-full">
          <Link to="/"><img src={Img} alt="Profile" /></Link>
        </div>

        {/* Hamburger button for mobile */}
        <button className="text-white block md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Links for desktop and mobile */}
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'absolute top-16 left-0 w-full bg-blue-600' : 'hidden'} md:block space-y-4 md:space-y-0`}>
          <li>
            <Link to="/HomePage" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Lead" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Leads
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/account" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Account
            </Link>
          </li>
          <li>
            <Link to="/call" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Calls
            </Link>
          </li>
          <li>
            <Link to="/meeting" className="text-white hover:text-gray-300 block px-4 py-2" onClick={() => setIsOpen(false)}>
              Meetings
            </Link>
          </li>

          {/* Logout Button */}
          <li>
          <button
  onClick={handleLogout}
  className="text-white hover:text-gray-300 bg-blue-500 hover:bg-blue-600 border border-blue-700 rounded-lg px-4 py-2"
>
  Logout
</button>
          </li>
        </ul>

        {/* <div className="w-10 rounded-full">
          <img src={Img} alt="profile" />
        </div> */}
      </div>
    </nav>
  );
};
