import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaYoutube, 
  FaInstagram, FaGooglePlusG, FaEnvelope 
} from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';

const SocialLanding = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center bg-white font-sans overflow-hidden">
      
      {/* Left Side: Content */}
     <div className="w-full md:w-1/2 p-12 lg:p-24 z-10 space-y-6">

  <h1 className="text-4xl text-gray-600 tracking-tighter leading-tight">
    Grow Your Digital{" "}
    <span className="  text-orange-600 ">
      Presence Together
    </span>
  </h1>

  <p className="text-gray-600 text-lg max-w-md">
Connect with your audience across all platforms using our integrated solutions.
Leverage powerful tools to unify communication, optimize performance, and elevate customer experiences.
Designed for scalability and reliability, our solutions help you stay ahead in a rapidly evolving digital landscape.
  </p>

  <div className="flex gap-4 pt-4">
    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
      Get Started
    </button>
    <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all">
      Let's Connect
    </button>
  </div>

</div>

      {/* Right Side: Icon Grid Area */}
      <div className="w-full md:w-1/2 h-[500px] relative">
        
        {/* Facebook (Top Center) */}
        <div className="absolute top-[10%] left-[40%] bg-[#56acc4] p-6 rounded-xl shadow-xl">
          <FaFacebookF className="text-white text-4xl" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#56acc4]"></div>
        </div>

        {/* Instagram (Top Right) */}
        <div className="absolute top-[15%] left-[70%] bg-[#4c75a3] p-6 rounded-xl shadow-xl">
          <FaInstagram className="text-white text-4xl" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#4c75a3]"></div>
        </div>

        {/* Twitter (Center Left) */}
        <div className="absolute top-[35%] left-[15%] bg-[#f15e32] p-8 rounded-xl shadow-xl">
          <FaTwitter className="text-white text-5xl" />
          <div className="absolute -bottom-4 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[25px] border-t-[#f15e32]"></div>
        </div>

        {/* YouTube (Center Right) */}
        <div className="absolute top-[30%] left-[48%] bg-[#f5527a] p-10 rounded-xl shadow-xl">
          <FaYoutube className="text-white text-6xl" />
          <div className="absolute -bottom-4 left-6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[25px] border-t-[#f5527a]"></div>
        </div>

        {/* Google Plus (Bottom Left) */}
        <div className="absolute bottom-[20%] left-[5%] bg-[#c0a6e3] p-8 rounded-xl shadow-xl">
          <FaGooglePlusG className="text-white text-5xl" />
          <div className="absolute -bottom-4 left-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#c0a6e3]"></div>
        </div>

        {/* Chat Bubbles (Bottom Center) */}
        <div className="absolute bottom-[15%] left-[35%] bg-[#8bb5e6] px-12 py-8 rounded-xl shadow-xl">
          <IoMdChatbubbles className="text-white text-6xl" />
          <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[25px] border-t-[#8bb5e6]"></div>
        </div>

        {/* Mail (Bottom Right) */}
        <div className="absolute bottom-[18%] left-[65%] bg-[#8cc351] p-6 rounded-xl shadow-xl">
          <FaEnvelope className="text-white text-4xl" />
          <div className="absolute -bottom-4 right-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#8cc351]"></div>
        </div>

        {/* Decorative Small Bubbles */}
        <div className="absolute top-[25%] left-[5%] w-8 h-8 bg-[#8cc351] rounded-lg"></div>
        <div className="absolute bottom-[10%] left-[28%] w-10 h-10 bg-[#f51d5f] rounded-lg"></div>
        <div className="absolute top-[45%] right-[5%] w-12 h-12 bg-[#f9a01b] rounded-lg"></div>
      </div>
    </div>
  );
};

export default SocialLanding;