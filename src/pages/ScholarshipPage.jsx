import React, { useEffect, useState } from 'react';
import scholarshipsData from '../data/scholarships.json';
import NationalImage from '../assets/National.jpg';
import FulbrightImage from '../assets/Fulbright-Foreign-Student-Program-1.webp';
import GatesImage from '../assets/gate-eligibility.jpg';
import CocaColaImage from '../assets/Coca-Cola-Scholarship-2014.webp';
import JackKentImage from '../assets/jack_kent_cooke_scholarship.jpg';
import DavisPutterImage from '../assets/Davis.png';
import HoratioAlgerImage from '../assets/Horatioalgera.jpg';
import ElksImage from '../assets/elks national.jpg';

const ScholarshipPage = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const updatedScholarships = scholarshipsData.map(scholarship => {
      switch (scholarship.title) {
        case "National Merit Scholarship":
          return { ...scholarship, image: NationalImage };
        case "Fulbright Program":
          return { ...scholarship, image: FulbrightImage };
        case "Gates Millennium Scholars Program":
          return { ...scholarship, image: GatesImage };
        case "Coca-Cola Scholars Program":
          return { ...scholarship, image: CocaColaImage };
        case "Jack Kent Cooke Foundation College Scholarship":
          return { ...scholarship, image: JackKentImage };
        case "Davis-Putter Scholarship Fund":
          return { ...scholarship, image: DavisPutterImage };
        case "Horatio Alger Scholarship":
          return { ...scholarship, image: HoratioAlgerImage };
        case "Elks National Foundation Most Valuable Student Competition":
          return { ...scholarship, image: ElksImage };
        default:
          return scholarship;
      }
    });

    setScholarships(updatedScholarships);
  }, []);

  return (
    <div className="container mx-auto my-10 mt-20">
      <h2 className="text-3xl font-bold text-[#5e208f] text-center mb-6">Scholarship Opportunities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="p-4 border rounded shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
            <img src={scholarship.image} alt={scholarship.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2 text-purple-600">{scholarship.title}</h3>
            <p className="text-gray-700 mb-4">{scholarship.description}</p>
            <a
              href={scholarship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipPage;
