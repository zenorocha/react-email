import React from 'react';
import Image from 'next/image';
import { Topbar } from '../components/topbar';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';

const Home = () => {
  return (
    <>
      <div
        className="max-w-7xl mx-auto flex flex-col h-screen justify-between relative z-100 h-screen-ios"
        style={{ zIndex: '1000' }}
      >
        <svg
          className="absolute top-[70px] md:top-[280px] left-[18px] md:left-[280px] animate-[dash_8s_infinite]"
          width="37"
          height="171"
          viewBox="0 0 37 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
        >
          <g clipPath="url(#clip0_331_902)">
            <path
              d="M36 171L36 96.8C36 94.0386 33.7614 91.8 31 91.8H6C3.2386 91.8 0.999996 89.5614 0.999996 86.8L0.999996 0"
              stroke="url(#paint0_linear_331_902)"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_331_902"
              x1="-3"
              y1="21.5"
              x2="74.5"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.021" stopOpacity="0" />
              <stop offset="0.161458" stopColor="#E29B59" stopOpacity="0.5" />
              <stop offset="0.380415" stopColor="#EC3D12" stopOpacity="0.4" />
              <stop offset="0.687906" stopColor="#DB2EAA" stopOpacity="0.5" />
              <stop offset="0.961" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_331_902">
              <rect
                width="171"
                height="37"
                fill="white"
                transform="translate(37) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="bottom-[120px] md:bottom-[420px] left-0 md:left-[300px] absolute animate-[dash_8s_infinite_300ms]"
          width="171"
          height="37"
          viewBox="0 0 171 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <g clipPath="url(#clip0_331_900)">
            <path
              d="M171 1L96.8 1C94.0386 1 91.8 3.23857 91.8 6V31C91.8 33.7614 89.5614 36 86.8 36H0"
              stroke="url(#paint0_linear_331_900)"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_331_900"
              x1="21.5"
              y1="40"
              x2="42"
              y2="-37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.021" stopOpacity="0" />
              <stop offset="0.161458" stopColor="#E29B59" stopOpacity="0.5" />
              <stop offset="0.380415" stopColor="#EC3D12" stopOpacity="0.4" />
              <stop offset="0.687906" stopColor="#DB2EAA" stopOpacity="0.5" />
              <stop offset="0.961" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_331_900">
              <rect width="171" height="37" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="top-[100px] md:top-[420px] right-[10px] md:right-[320px] absolute animate-[dash_8s_infinite_600ms]"
          width="171"
          height="37"
          viewBox="0 0 171 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <g clipPath="url(#clip0_331_900)">
            <path
              d="M171 1L96.8 1C94.0386 1 91.8 3.23857 91.8 6V31C91.8 33.7614 89.5614 36 86.8 36H0"
              stroke="url(#paint0_linear_331_900)"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_331_900"
              x1="21.5"
              y1="40"
              x2="42"
              y2="-37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.021" stopOpacity="0" />
              <stop offset="0.161458" stopColor="#E29B59" stopOpacity="0.5" />
              <stop offset="0.380415" stopColor="#EC3D12" stopOpacity="0.4" />
              <stop offset="0.687906" stopColor="#DB2EAA" stopOpacity="0.5" />
              <stop offset="0.961" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_331_900">
              <rect width="171" height="37" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="absolute right-[12px] md:right-[300px] bottom-[80px] md:bottom-[320px] animate-[dash_8s_infinite_900ms]"
          width="37"
          height="171"
          viewBox="0 0 37 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <g clipPath="url(#clip0_331_904)">
            <path
              d="M1 0L1 74.2C1 76.9614 3.23857 79.2 6 79.2H31C33.7614 79.2 36 81.4386 36 84.2L36 171"
              stroke="url(#paint0_linear_331_904)"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_331_904"
              x1="44"
              y1="151"
              x2="-42.5"
              y2="125.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.021" stopOpacity="0" />
              <stop offset="0.197917" stopColor="#D7E259" stopOpacity="0.5" />
              <stop offset="0.473958" stopColor="#12EC9D" stopOpacity="0.4" />
              <stop offset="0.744792" stopColor="#024889" stopOpacity="0.5" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_331_904">
              <rect
                width="171"
                height="37"
                fill="white"
                transform="translate(0 171) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>

        <Topbar />
        <Hero />
        <Footer />
      </div>
      <Image
        className="absolute w-full h-full top-[220px] md:top-0 left-0 select-none"
        fill
        src="/static/background.png"
        alt={''}
        style={{ userSelect: 'none', zIndex: '10' }}
      />
    </>
  );
};

export default Home;
