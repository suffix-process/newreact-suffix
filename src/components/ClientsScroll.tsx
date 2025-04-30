// src/components/Clients.tsx
import React, { FC } from 'react';
import { motion } from 'framer-motion';

// Import your client logos
import bajajLogo from '../assets/logos/bajaj.png';
import iciciLogo from '../assets/logos/icici.png';
import relianceLogo from '../assets/logos/Reliance.png';
import tataAigLogo from '../assets/logos/TATA_AIG.png';
import indusLogo from '../assets/logos/indus.png';
import shriramLogo from '../assets/logos/shriram.png';

interface Client {
  id: number;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  { id: 1, logo: bajajLogo, alt: 'Bajaj Allianz General Insurance' },
  { id: 2, logo: iciciLogo, alt: 'ICICI Lombard General Insurance' },
  { id: 3, logo: relianceLogo, alt: 'Reliance General Insurance' },
  { id: 4, logo: tataAigLogo, alt: 'TATA AIG Insurance' },
  { id: 5, logo: indusLogo, alt: 'IndusInd Bank' },
  { id: 6, logo: shriramLogo, alt: 'Shriram Capital Finance' },
];

// Duplicate clients to ensure smooth infinite looping
const duplicatedClients: Client[] = [...clients, ...clients, ...clients];

const ClientsScroll: FC = () => {
  return (
    <div>

        <section className="py-12 md:py-16 bg-[#ffff]">
        
          <div className="relative overflow-hidden py-1 md:py-6 bg-[#f5f2f3]">
            

            <div className="absolute inset-y-0 left-0 w-full md:w-[25%] bg-[#bfbfbf] z-10 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]" />
            <div className="absolute inset-y-0 left-[20%] w-full md:w-[15%] bg-gradient-to-r from-[#4079ff] to-[#38ffee]/70 z-10 [clip-path:polygon(33%_0,100%_0,70%_100%,0%_100%)]" />

            <div className="flex">
              <motion.div
                className="flex"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              >

                {duplicatedClients.map((client, index) => (
                  <div
                    key={`first-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}

                {duplicatedClients.map((client, index) => (
                  <div
                    key={`second-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}


                {duplicatedClients.map((client, index) => (
                  <div
                    key={`third-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          <div className="relative overflow-hidden py-1 md:py-6 bg-[#f5f2f3]">
            <div className="absolute inset-y-0 left-0 w-full md:w-[20%] bg-[#bfbfbf] z-10 [clip-path:polygon(0_0,100%_0,75%_100%,0_100%)]" />
            <div className="absolute inset-y-0 left-[15%] w-full md:w-[15.5%] bg-gradient-to-r from-[#38ffee] to-[#4079ff]/70 z-10 [clip-path:polygon(32%_0,100%_0,70%_100%,0%_100%)]" />

            <div className="flex">
              <motion.div
                className="flex"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              >
                {duplicatedClients.map((client, index) => (
                  <div
                    key={`first-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}

                {duplicatedClients.map((client, index) => (
                  <div
                    key={`second-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}


                {duplicatedClients.map((client, index) => (
                  <div
                    key={`third-${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                      <img src={client.logo} alt={client.alt} className="object-contain max-h-full max-w-full" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>

    </div>






  );
};



export default ClientsScroll;
