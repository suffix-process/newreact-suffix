import React from "react";

import logo1 from '../assets/logos/bajaj.png';
import logo2 from '../assets/logos/icici.png';
import logo3 from '../assets/logos/indus.png';
import logo4 from '../assets/logos/Reliance.png';
import logo5 from '../assets/logos/shriram.png';
import logo6 from '../assets/logos/TATA_AIG.png';

export default function ScrollingLogos() {
  const logos = [logo1, logo2 ,logo3, logo4];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-[200%] animate-scroll">
        {[...logos, ...logos].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Logo ${idx + 1}`}
            className="flex-none w-24 mx-6 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
