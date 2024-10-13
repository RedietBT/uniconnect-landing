// src/pages/ResearchPage.jsx
import React, { useEffect, useState } from 'react';
import researchData from '../data/research.json'; // Ensure this path is correct

// Import images
import AIImage from '../assets/artifical-intelligence-ai-in-healthcare-market-2020-2030-1630414375.jpeg';
import EnergyImage from '../assets/sustainable-energy.jpg';
import QuantumImage from '../assets/quantum.jpg';
import BlockchainImage from '../assets/Blockchain_Technology.jpg';
import VRImage from '../assets/virtual-reality.jpg';
import GeneEditingImage from '../assets/gene.webp';
import ClimateChangeImage from '../assets/climate.jpg';
import NanotechnologyImage from '../assets/nanotechnology.jpg';

const ResearchPage = () => {
  const [researches, setResearches] = useState([]);
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updatedResearches = researchData.map((research) => {
      switch (research.title) {
        case 'AI in Healthcare':
          return { ...research, image: AIImage };
        case 'Sustainable Energy Solutions':
          return { ...research, image: EnergyImage };
        case 'Quantum Computing Advances':
          return { ...research, image: QuantumImage };
        case 'Blockchain Technology in Supply Chain':
          return { ...research, image: BlockchainImage };
        case 'The Future of Virtual Reality':
          return { ...research, image: VRImage };
        case 'Gene Editing Technologies':
          return { ...research, image: GeneEditingImage };
        case 'Climate Change and Agriculture':
          return { ...research, image: ClimateChangeImage };
        case 'Nanotechnology in Medicine':
          return { ...research, image: NanotechnologyImage };
        default:
          return research;
      }
    });

    setResearches(updatedResearches);
  }, []);

  const openModal = (research) => {
    setSelectedResearcher(research);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResearcher(null);
  };

  return (
    <div className="container mx-auto my-10 mt-20">
      <h2 className="text-3xl font-bold text-[#5e208f] text-center mb-6">Research Projects</h2>
      <div className="flex flex-col space-y-8">
        {researches.map((research, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:transform hover:scale-105">
            <img
              src={research.image}
              alt={research.title}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#5e208f]">{research.title}</h3>
                <p className="text-gray-700 mb-4">{research.description}</p>
                <div className="flex space-x-4"> {/* Added space between the two links */}
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5e208f] text-white px-4 py-2 rounded hover:bg-[#440f69] transition duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    onClick={() => openModal(research)}
                    className="text-[#5e208f] font-bold hover:underline"
                  >
                    Contact Researcher
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h2 className="text-lg font-bold mb-4">Contact {selectedResearcher.researcher}</h2>
            <p>If you have questions about this research, feel free to reach out:</p>
            <p className="mt-2 font-semibold">Email: <span className="text-blue-600">{selectedResearcher.email}</span></p>
            <p className="mt-2 font-semibold">For more info, visit:</p>
            <a 
              href={selectedResearcher.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Research Details
            </a>
            <button onClick={closeModal} className="mt-4 bg-[#5e208f] text-white px-4 py-2 rounded hover:bg-[#440f69]">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchPage;
