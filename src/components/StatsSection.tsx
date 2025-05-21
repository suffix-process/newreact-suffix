import React from 'react';

// interface StatProps {
//   value: string;
//   label: string;
// }

// const Stat: React.FC<StatProps> = ({ value, label }) => {
//   return (
//     <div className="text-center">
//       <div className="text-5xl md:text-6xl font-bold text-blue-700">{value}</div>
//       <div className="text-gray-600 mt-2">{label}</div>
//     </div>
//   );
// };

const StatsSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Delivering for our global clients
        </h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <Stat value="$3.5B" label="in government services" />
          <Stat value="2.3B" label="customer service interactions" />
          <Stat value="$12.4B" label="in tolling transactions" />
          <Stat value="45%" label="of Fortune 100 companies served" /> */}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;