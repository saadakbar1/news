import React from "react";

export default function NavBar({setCategory}) {

  function updateCategory(e){
    setCategory(e.target.textContent.toLowerCase());
  }

  return (
    <>
      <header className="text-gray-400 relative body-font fixed top-0 left-0 z-10 w-full ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
           
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#CFD8DC" d="M35 39L6 39 6 9 9 12 12 9 15 12 18 9 21 12 24 9 27 12 30 9 33 12 36 9 39 12 42 9 42 32.004z"></path><path fill="#3F51B5" d="M9 15H24V19H9zM9 22H24V36H9z"></path><path fill="#29B6F6" d="M24 15H39V19H24z"></path><path fill="#B0BEC5" d="M26 22H39V24H26zM26 26H39V28H26zM26 30H39V32H26zM26 34H37V36H26z"></path><path fill="#78909C" d="M35 32L42 32 35 39z"></path><path fill="#E8EAF6" d="M17.4,28.669c0-0.651,1.383-0.839,1.383-2.368c0-0.918-0.082-1.472-0.779-1.797c0-0.229,1.232-0.078,1.232-0.504c-0.213,0-2.698,0-2.698,0s-2.732,0.069-2.732,2.464c0,2.396,2.389,2.119,2.389,2.119s0,0.361,0,0.606c0,0.247,0.321,0.163,0.36,0.66c-0.162,0-3.318-0.087-3.318,2.082c0,2.17,2.783,2.066,2.783,2.066s3.217,0.151,3.217-2.543C19.236,29.841,17.4,29.32,17.4,28.669z M15.069,26.604c-0.251-0.963,0.081-1.893,0.744-2.08c0.664-0.188,1.406,0.441,1.659,1.402c0.252,0.963-0.08,1.894-0.744,2.081S15.322,27.565,15.069,26.604z M16.451,33.306c-1.113,0.078-2.061-0.54-2.116-1.382c-0.055-0.841,0.803-1.586,1.917-1.665c1.114-0.078,2.062,0.54,2.117,1.381C18.423,32.482,17.565,33.228,16.451,33.306z"></path>
</svg>
            <span className="ml-3 text-xl cursor-pointer text-gray-200">RevoltronX News</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-300 text-lg ">
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>General</a>
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>Business</a>
            <a className="mr-5 hover:text-black cursor-pointer hover:bottom-1" onClick={updateCategory}>Entertainment</a>
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>Health</a>
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>Science</a>
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>Sports</a>
            <a className="mr-5 hover:text-black cursor-pointer" onClick={updateCategory}>Technology</a>
          </nav>
        
        </div>
      </header>
    </>
  );
}
