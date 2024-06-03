import React from 'react'

function Footer() {
  return (
    <>
    <footer className="text-gray-400  body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-300 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80" className=' w-10 h-10 text-white'>
<path d="M 9 9 L 9 64 C 9 67.855469 12.144531 71 16 71 L 64 71 C 67.855469 71 71 67.855469 71 64 L 71 19 L 59 19 L 59 9 Z M 11 11 L 57 11 L 57 64 C 57 65.960938 57.824219 67.726563 59.136719 69 L 16 69 C 13.226563 69 11 66.773438 11 64 Z M 17 20 L 17 22 L 51 22 L 51 20 Z M 59 21 L 69 21 L 69 64 C 69 66.773438 66.773438 69 64 69 C 61.226563 69 59 66.773438 59 64 L 59 62 C 59.550781 62 60 61.550781 60 61 C 60 60.449219 59.550781 60 59 60 L 59 57 C 59.550781 57 60 56.550781 60 56 C 60 55.449219 59.550781 55 59 55 L 59 52 C 59.550781 52 60 51.550781 60 51 C 60 50.449219 59.550781 50 59 50 L 59 47 C 59.550781 47 60 46.550781 60 46 C 60 45.449219 59.550781 45 59 45 L 59 42 C 59.550781 42 60 41.550781 60 41 C 60 40.449219 59.550781 40 59 40 L 59 37 C 59.550781 37 60 36.550781 60 36 C 60 35.449219 59.550781 35 59 35 L 59 32 C 59.550781 32 60 31.550781 60 31 C 60 30.449219 59.550781 30 59 30 Z M 17 25 L 17 27 L 51 27 L 51 25 Z M 63 30 C 62.449219 30 62 30.449219 62 31 C 62 31.550781 62.449219 32 63 32 C 63.550781 32 64 31.550781 64 31 C 64 30.449219 63.550781 30 63 30 Z M 18 32 C 17.449219 32 17 32.449219 17 33 C 17 33.550781 17.449219 34 18 34 C 18.550781 34 19 33.550781 19 33 C 19 32.449219 18.550781 32 18 32 Z M 22 32 C 21.449219 32 21 32.449219 21 33 C 21 33.550781 21.449219 34 22 34 C 22.550781 34 23 33.550781 23 33 C 23 32.449219 22.550781 32 22 32 Z M 26 32 C 25.449219 32 25 32.449219 25 33 C 25 33.550781 25.449219 34 26 34 C 26.550781 34 27 33.550781 27 33 C 27 32.449219 26.550781 32 26 32 Z M 30 32 C 29.449219 32 29 32.449219 29 33 C 29 33.550781 29.449219 34 30 34 C 30.550781 34 31 33.550781 31 33 C 31 32.449219 30.550781 32 30 32 Z M 38 32 C 37.449219 32 37 32.449219 37 33 C 37 33.550781 37.449219 34 38 34 C 38.550781 34 39 33.550781 39 33 C 39 32.449219 38.550781 32 38 32 Z M 42 32 C 41.449219 32 41 32.449219 41 33 C 41 33.550781 41.449219 34 42 34 C 42.550781 34 43 33.550781 43 33 C 43 32.449219 42.550781 32 42 32 Z M 46 32 C 45.449219 32 45 32.449219 45 33 C 45 33.550781 45.449219 34 46 34 C 46.550781 34 47 33.550781 47 33 C 47 32.449219 46.550781 32 46 32 Z M 50 32 C 49.449219 32 49 32.449219 49 33 C 49 33.550781 49.449219 34 50 34 C 50.550781 34 51 33.550781 51 33 C 51 32.449219 50.550781 32 50 32 Z M 63 35 C 62.449219 35 62 35.449219 62 36 C 62 36.550781 62.449219 37 63 37 C 63.550781 37 64 36.550781 64 36 C 64 35.449219 63.550781 35 63 35 Z M 18 37 C 17.449219 37 17 37.449219 17 38 C 17 38.550781 17.449219 39 18 39 C 18.550781 39 19 38.550781 19 38 C 19 37.449219 18.550781 37 18 37 Z M 22 37 C 21.449219 37 21 37.449219 21 38 C 21 38.550781 21.449219 39 22 39 C 22.550781 39 23 38.550781 23 38 C 23 37.449219 22.550781 37 22 37 Z M 26 37 C 25.449219 37 25 37.449219 25 38 C 25 38.550781 25.449219 39 26 39 C 26.550781 39 27 38.550781 27 38 C 27 37.449219 26.550781 37 26 37 Z M 30 37 C 29.449219 37 29 37.449219 29 38 C 29 38.550781 29.449219 39 30 39 C 30.550781 39 31 38.550781 31 38 C 31 37.449219 30.550781 37 30 37 Z M 38 37 C 37.449219 37 37 37.449219 37 38 C 37 38.550781 37.449219 39 38 39 C 38.550781 39 39 38.550781 39 38 C 39 37.449219 38.550781 37 38 37 Z M 42 37 C 41.449219 37 41 37.449219 41 38 C 41 38.550781 41.449219 39 42 39 C 42.550781 39 43 38.550781 43 38 C 43 37.449219 42.550781 37 42 37 Z M 46 37 C 45.449219 37 45 37.449219 45 38 C 45 38.550781 45.449219 39 46 39 C 46.550781 39 47 38.550781 47 38 C 47 37.449219 46.550781 37 46 37 Z M 50 37 C 49.449219 37 49 37.449219 49 38 C 49 38.550781 49.449219 39 50 39 C 50.550781 39 51 38.550781 51 38 C 51 37.449219 50.550781 37 50 37 Z M 63 40 C 62.449219 40 62 40.449219 62 41 C 62 41.550781 62.449219 42 63 42 C 63.550781 42 64 41.550781 64 41 C 64 40.449219 63.550781 40 63 40 Z M 18 42 C 17.449219 42 17 42.449219 17 43 C 17 43.550781 17.449219 44 18 44 C 18.550781 44 19 43.550781 19 43 C 19 42.449219 18.550781 42 18 42 Z M 22 42 C 21.449219 42 21 42.449219 21 43 C 21 43.550781 21.449219 44 22 44 C 22.550781 44 23 43.550781 23 43 C 23 42.449219 22.550781 42 22 42 Z M 26 42 C 25.449219 42 25 42.449219 25 43 C 25 43.550781 25.449219 44 26 44 C 26.550781 44 27 43.550781 27 43 C 27 42.449219 26.550781 42 26 42 Z M 30 42 C 29.449219 42 29 42.449219 29 43 C 29 43.550781 29.449219 44 30 44 C 30.550781 44 31 43.550781 31 43 C 31 42.449219 30.550781 42 30 42 Z M 38 42 C 37.449219 42 37 42.449219 37 43 C 37 43.550781 37.449219 44 38 44 C 38.550781 44 39 43.550781 39 43 C 39 42.449219 38.550781 42 38 42 Z M 42 42 C 41.449219 42 41 42.449219 41 43 C 41 43.550781 41.449219 44 42 44 C 42.550781 44 43 43.550781 43 43 C 43 42.449219 42.550781 42 42 42 Z M 46 42 C 45.449219 42 45 42.449219 45 43 C 45 43.550781 45.449219 44 46 44 C 46.550781 44 47 43.550781 47 43 C 47 42.449219 46.550781 42 46 42 Z M 50 42 C 49.449219 42 49 42.449219 49 43 C 49 43.550781 49.449219 44 50 44 C 50.550781 44 51 43.550781 51 43 C 51 42.449219 50.550781 42 50 42 Z M 63 45 C 62.449219 45 62 45.449219 62 46 C 62 46.550781 62.449219 47 63 47 C 63.550781 47 64 46.550781 64 46 C 64 45.449219 63.550781 45 63 45 Z M 18 47 C 17.449219 47 17 47.449219 17 48 C 17 48.550781 17.449219 49 18 49 C 18.550781 49 19 48.550781 19 48 C 19 47.449219 18.550781 47 18 47 Z M 22 47 C 21.449219 47 21 47.449219 21 48 C 21 48.550781 21.449219 49 22 49 C 22.550781 49 23 48.550781 23 48 C 23 47.449219 22.550781 47 22 47 Z M 26 47 C 25.449219 47 25 47.449219 25 48 C 25 48.550781 25.449219 49 26 49 C 26.550781 49 27 48.550781 27 48 C 27 47.449219 26.550781 47 26 47 Z M 30 47 C 29.449219 47 29 47.449219 29 48 C 29 48.550781 29.449219 49 30 49 C 30.550781 49 31 48.550781 31 48 C 31 47.449219 30.550781 47 30 47 Z M 38 47 C 37.449219 47 37 47.449219 37 48 C 37 48.550781 37.449219 49 38 49 C 38.550781 49 39 48.550781 39 48 C 39 47.449219 38.550781 47 38 47 Z M 42 47 C 41.449219 47 41 47.449219 41 48 C 41 48.550781 41.449219 49 42 49 C 42.550781 49 43 48.550781 43 48 C 43 47.449219 42.550781 47 42 47 Z M 46 47 C 45.449219 47 45 47.449219 45 48 C 45 48.550781 45.449219 49 46 49 C 46.550781 49 47 48.550781 47 48 C 47 47.449219 46.550781 47 46 47 Z M 50 47 C 49.449219 47 49 47.449219 49 48 C 49 48.550781 49.449219 49 50 49 C 50.550781 49 51 48.550781 51 48 C 51 47.449219 50.550781 47 50 47 Z M 63 50 C 62.449219 50 62 50.449219 62 51 C 62 51.550781 62.449219 52 63 52 C 63.550781 52 64 51.550781 64 51 C 64 50.449219 63.550781 50 63 50 Z M 18 52 C 17.449219 52 17 52.449219 17 53 C 17 53.550781 17.449219 54 18 54 C 18.550781 54 19 53.550781 19 53 C 19 52.449219 18.550781 52 18 52 Z M 22 52 C 21.449219 52 21 52.449219 21 53 C 21 53.550781 21.449219 54 22 54 C 22.550781 54 23 53.550781 23 53 C 23 52.449219 22.550781 52 22 52 Z M 26 52 C 25.449219 52 25 52.449219 25 53 C 25 53.550781 25.449219 54 26 54 C 26.550781 54 27 53.550781 27 53 C 27 52.449219 26.550781 52 26 52 Z M 30 52 C 29.449219 52 29 52.449219 29 53 C 29 53.550781 29.449219 54 30 54 C 30.550781 54 31 53.550781 31 53 C 31 52.449219 30.550781 52 30 52 Z M 38 52 C 37.449219 52 37 52.449219 37 53 C 37 53.550781 37.449219 54 38 54 C 38.550781 54 39 53.550781 39 53 C 39 52.449219 38.550781 52 38 52 Z M 42 52 C 41.449219 52 41 52.449219 41 53 C 41 53.550781 41.449219 54 42 54 C 42.550781 54 43 53.550781 43 53 C 43 52.449219 42.550781 52 42 52 Z M 46 52 C 45.449219 52 45 52.449219 45 53 C 45 53.550781 45.449219 54 46 54 C 46.550781 54 47 53.550781 47 53 C 47 52.449219 46.550781 52 46 52 Z M 50 52 C 49.449219 52 49 52.449219 49 53 C 49 53.550781 49.449219 54 50 54 C 50.550781 54 51 53.550781 51 53 C 51 52.449219 50.550781 52 50 52 Z M 63 55 C 62.449219 55 62 55.449219 62 56 C 62 56.550781 62.449219 57 63 57 C 63.550781 57 64 56.550781 64 56 C 64 55.449219 63.550781 55 63 55 Z M 18 57 C 17.449219 57 17 57.449219 17 58 C 17 58.550781 17.449219 59 18 59 C 18.550781 59 19 58.550781 19 58 C 19 57.449219 18.550781 57 18 57 Z M 22 57 C 21.449219 57 21 57.449219 21 58 C 21 58.550781 21.449219 59 22 59 C 22.550781 59 23 58.550781 23 58 C 23 57.449219 22.550781 57 22 57 Z M 26 57 C 25.449219 57 25 57.449219 25 58 C 25 58.550781 25.449219 59 26 59 C 26.550781 59 27 58.550781 27 58 C 27 57.449219 26.550781 57 26 57 Z M 30 57 C 29.449219 57 29 57.449219 29 58 C 29 58.550781 29.449219 59 30 59 C 30.550781 59 31 58.550781 31 58 C 31 57.449219 30.550781 57 30 57 Z M 38 57 C 37.449219 57 37 57.449219 37 58 C 37 58.550781 37.449219 59 38 59 C 38.550781 59 39 58.550781 39 58 C 39 57.449219 38.550781 57 38 57 Z M 42 57 C 41.449219 57 41 57.449219 41 58 C 41 58.550781 41.449219 59 42 59 C 42.550781 59 43 58.550781 43 58 C 43 57.449219 42.550781 57 42 57 Z M 46 57 C 45.449219 57 45 57.449219 45 58 C 45 58.550781 45.449219 59 46 59 C 46.550781 59 47 58.550781 47 58 C 47 57.449219 46.550781 57 46 57 Z M 50 57 C 49.449219 57 49 57.449219 49 58 C 49 58.550781 49.449219 59 50 59 C 50.550781 59 51 58.550781 51 58 C 51 57.449219 50.550781 57 50 57 Z M 63 60 C 62.449219 60 62 60.449219 62 61 C 62 61.550781 62.449219 62 63 62 C 63.550781 62 64 61.550781 64 61 C 64 60.449219 63.550781 60 63 60 Z M 18 62 C 17.449219 62 17 62.449219 17 63 C 17 63.550781 17.449219 64 18 64 C 18.550781 64 19 63.550781 19 63 C 19 62.449219 18.550781 62 18 62 Z M 22 62 C 21.449219 62 21 62.449219 21 63 C 21 63.550781 21.449219 64 22 64 C 22.550781 64 23 63.550781 23 63 C 23 62.449219 22.550781 62 22 62 Z M 26 62 C 25.449219 62 25 62.449219 25 63 C 25 63.550781 25.449219 64 26 64 C 26.550781 64 27 63.550781 27 63 C 27 62.449219 26.550781 62 26 62 Z M 30 62 C 29.449219 62 29 62.449219 29 63 C 29 63.550781 29.449219 64 30 64 C 30.550781 64 31 63.550781 31 63 C 31 62.449219 30.550781 62 30 62 Z M 38 62 C 37.449219 62 37 62.449219 37 63 C 37 63.550781 37.449219 64 38 64 C 38.550781 64 39 63.550781 39 63 C 39 62.449219 38.550781 62 38 62 Z M 42 62 C 41.449219 62 41 62.449219 41 63 C 41 63.550781 41.449219 64 42 64 C 42.550781 64 43 63.550781 43 63 C 43 62.449219 42.550781 62 42 62 Z M 46 62 C 45.449219 62 45 62.449219 45 63 C 45 63.550781 45.449219 64 46 64 C 46.550781 64 47 63.550781 47 63 C 47 62.449219 46.550781 62 46 62 Z M 50 62 C 49.449219 62 49 62.449219 49 63 C 49 63.550781 49.449219 64 50 64 C 50.550781 64 51 63.550781 51 63 C 51 62.449219 50.550781 62 50 62 Z"></path>
</svg> */}
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className=' w-[30px] h-[30px]'>
<path fill="#CFD8DC" d="M35 39L6 39 6 9 9 12 12 9 15 12 18 9 21 12 24 9 27 12 30 9 33 12 36 9 39 12 42 9 42 32.004z"></path><path fill="#3F51B5" d="M9 15H24V19H9zM9 22H24V36H9z"></path><path fill="#29B6F6" d="M24 15H39V19H24z"></path><path fill="#B0BEC5" d="M26 22H39V24H26zM26 26H39V28H26zM26 30H39V32H26zM26 34H37V36H26z"></path><path fill="#78909C" d="M35 32L42 32 35 39z"></path><path fill="#E8EAF6" d="M17.4,28.669c0-0.651,1.383-0.839,1.383-2.368c0-0.918-0.082-1.472-0.779-1.797c0-0.229,1.232-0.078,1.232-0.504c-0.213,0-2.698,0-2.698,0s-2.732,0.069-2.732,2.464c0,2.396,2.389,2.119,2.389,2.119s0,0.361,0,0.606c0,0.247,0.321,0.163,0.36,0.66c-0.162,0-3.318-0.087-3.318,2.082c0,2.17,2.783,2.066,2.783,2.066s3.217,0.151,3.217-2.543C19.236,29.841,17.4,29.32,17.4,28.669z M15.069,26.604c-0.251-0.963,0.081-1.893,0.744-2.08c0.664-0.188,1.406,0.441,1.659,1.402c0.252,0.963-0.08,1.894-0.744,2.081S15.322,27.565,15.069,26.604z M16.451,33.306c-1.113,0.078-2.061-0.54-2.116-1.382c-0.055-0.841,0.803-1.586,1.917-1.665c1.114-0.078,2.062,0.54,2.117,1.381C18.423,32.482,17.565,33.228,16.451,33.306z"></path>
</svg>
      <span className="ml-3 text-xl">RevoltronX News</span>
    </a>
    <p className="text-md text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <span className="text-gray-400 ml-1" >By Shreya</span>
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    

      <a className="ml-3 text-gray-400" href='https://github.com/shreya38'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="0,0,256,256">
    <g fill="#cbd5e0" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
        <g transform="scale(16,16)">
            <path d="M7.5,1c-3.58984,0 -6.5,2.90625 -6.5,6.48828c0,2.86719 1.86328,5.30078 4.44531,6.16016c0.32422,0.05859 0.55469,-0.27344 0.55469,-0.52344c0,-0.15234 0.00391,-0.33594 0,-0.875c-1.80859,0.39063 -2.375,-0.875 -2.375,-0.875c-0.29687,-0.75 -0.65625,-0.96484 -0.65625,-0.96484c-0.58984,-0.40234 0.04297,-0.39062 0.04297,-0.39062c0.65234,0.04297 0.98828,0.60547 0.98828,0.60547c0.5,0.875 1.62891,0.78906 2,0.625c0,-0.39844 0.04297,-0.6875 0.15234,-0.87109c-2.04297,-0.35937 -3.15625,-1.53906 -3.15234,-3.17188c0.00391,-0.96484 0.33594,-1.71484 0.875,-2.26953c-0.23437,-0.29687 -0.39453,-1.3125 0.08594,-1.9375c1.20703,0 1.92578,0.87109 1.92578,0.87109c0,0 0.56641,-0.24609 1.60938,-0.24609c1.04687,0 1.60937,0.23438 1.60937,0.23438c0,0 0.72266,-0.85937 1.92969,-0.85937c0.48047,0.625 0.32031,1.64063 0.13281,1.91797c0.51563,0.54297 0.83203,1.29297 0.83203,2.28906c0,1.63281 -1.10937,2.8125 -3.14844,3.16797c0.12891,0.19531 0.14844,0.46875 0.14844,0.875c0,0.86719 0,1.66016 0,1.875c0,0.25 0.22656,0.58594 0.55859,0.52344c2.58203,-0.86328 4.44141,-3.29297 4.44141,-6.16016c0,-3.58203 -2.91016,-6.48828 -6.5,-6.48828z"></path>
        </g>
    </g>
</svg>


      </a>
      <a className="ml-3 text-gray-400" href='https://www.linkedin.com/in/shreya38/' target='_blank' >
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </>
  )
}

export default Footer